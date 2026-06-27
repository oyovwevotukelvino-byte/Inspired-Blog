"use client";

import { useState } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({
  title,
  url,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      alert("Unable to copy link.");
    }
  };

  return (
    <section className="mt-16 border-t border-gray-200 pt-10">
      <h3 className="text-2xl font-bold text-[#1E3A5F] mb-6 text-center">
        Share this Message
      </h3>

      <div className="flex flex-wrap justify-center gap-4">

        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl transition-all duration-300 shadow-lg hover:scale-105"
        >
          <FaWhatsapp size={20} />
          <span>WhatsApp</span>
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition-all duration-300 shadow-lg hover:scale-105"
        >
          <FaFacebookF size={18} />
          <span>Facebook</span>
        </a>

        {/* X */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-5 py-3 rounded-xl transition-all duration-300 shadow-lg hover:scale-105"
        >
          <FaXTwitter size={18} />
          <span>X</span>
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-5 py-3 rounded-xl transition-all duration-300 shadow-lg hover:scale-105"
        >
          <FaLinkedinIn size={18} />
          <span>LinkedIn</span>
        </a>

        {/* Copy */}
        <button
          onClick={copyLink}
          className="flex items-center gap-2 bg-[#D4A017] hover:bg-yellow-500 text-white px-5 py-3 rounded-xl transition-all duration-300 shadow-lg hover:scale-105"
        >
          🔗
          <span>{copied ? "Copied!" : "Copy Link"}</span>
        </button>

      </div>

      <p className="text-center text-gray-500 text-sm mt-6">
        Help spread God's Word by sharing this message with others.
      </p>
    </section>
  );
}