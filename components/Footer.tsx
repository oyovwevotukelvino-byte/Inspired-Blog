import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Ministry */}
        <div>
          <h2 className="text-2xl font-bold text-[#D4A017]">
            David Uchechukwu
          </h2>

          <p className="mt-4 text-white/70 leading-relaxed">
            Sharing the Gospel through sermons, devotionals,
            teachings and ministry resources to strengthen lives
            in Christ.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#D4A017]">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/sermons">Sermons</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/profile">Profile</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#D4A017]">
            Ministry
          </h3>

          <p className="text-white/70">
            Walking in faith.<br />
            Preaching Christ.<br />
            Building lives.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} David Uchechukwu. All rights reserved.
        <br />
        Designed & Developed by <span className="text-[#D4A017]">JQ Technologies</span>
      </div>
    </footer>
  );
}