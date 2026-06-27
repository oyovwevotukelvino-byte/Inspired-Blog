import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { client } from "@/lib/sanity";
import { POST_QUERY } from "@/lib/queries";
import Image from "next/image";
import Link from "next/link";
import RichBody from "@/components/RichBody";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { Post } from "@/types";
import ShareButtons from "@/components/ShareButtons";

const builder = createImageUrlBuilder(client);

function urlFor(source: any) {
  if (!source?.asset) return "";
  return builder.image(source).width(1200).auto("format").url();
}

interface Params {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post: Post | null = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const image = post.mainImage
    ? urlFor(post.mainImage)
    : "/image.png";

  return {
    title: post.title,
    description: post.excerpt || "Read this message by David Uchechukwu.",

    openGraph: {
      title: post.title,
      description: post.excerpt || "",
      url: `https://daviduchechukwu.vercel.app/sermons/${slug}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || "",
      images: [image],
    },
  };
}

export default async function SermonPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const post: Post | null = await client.fetch(POST_QUERY, {
    slug,
  });

  if (!post) notFound();

  const image = post.mainImage ? urlFor(post.mainImage) : "";

  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const pageUrl = `https://daviduchechukwu.vercel.app/sermons/${slug}`;

  return (
    <article className="max-w-5xl mx-auto px-5 py-24">

      {image && (
        <div className="relative h-[420px] rounded-3xl overflow-hidden mb-14 shadow-xl">
          <Image
            src={image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <header className="text-center">

        {post.categories?.length ? (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {post.categories.map((cat) => (
              <Link
                key={cat._id}
                href={`/categories/${(cat as any).slug?.current}`}
                className="bg-[#D4A017]/10 text-[#D4A017] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#D4A017]/20"
              >
                {cat.title}
              </Link>
            ))}
          </div>
        ) : null}

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1E3A5F]">
          {post.title}
        </h1>

        <div className="text-gray-500 mb-10">
          By{" "}
          <span className="font-semibold text-[#1E3A5F]">
            {post.author?.name}
          </span>{" "}
          • {date}
        </div>

      </header>

      <RichBody content={post.body} />

      

      <div className="mt-16">
        <ShareButtons
          title={post.title}
          url={pageUrl}
        />
      </div>

      <div className="mt-20 border-t pt-10">

        <Link
          href="/sermons"
          className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white px-6 py-3 rounded-xl hover:bg-[#294c75] transition"
        >
          ← Back to Sermons
        </Link>

      </div>
    </article>
  );
}