"use client";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center transition-all h-full">
      <p>
        If you&apos;d like to get in touch, consider writing an email if you
        like, view my cv.
      </p>

      <div className="my-8 flex justify-between">
        <button
          onClick={() =>
            (window.location.href = "mailto:harryalpha@hotmail.co.uk")
          }
          className="underline underline-offset-1 hover:opacity-80 transition-all cursor-pointer"
        >
          Email
        </button>
        <Link
          href="https://docs.google.com/document/d/1En41VzhlKzHZek0FuGL9D5W96rk5nTbm/edit?usp=sharing&ouid=107125185807115847147&rtpof=true&sd=true"
          className="underline underline-offset-1 hover:opacity-80 transition-all"
        >
          Resume
        </Link>
      </div>
    </div>
  );
}
