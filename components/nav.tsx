"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col space-y-2 flex-1 mt-12 z-10">
      {navItems.map(({ name, url }, i) => (
        <motion.div
          key={`${i}-${url}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: i * 0.1 }}
        >
          <Link
            href={url}
            className={`transition-all cursor-pointer hover:opacity-80 font-semibold text-xs md:text-base ${
              pathname === url ? "opacity-80" : ""
            }`}
          >
            {pathname === url ? `• ${name}` : name}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

const navItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Experience",
    url: "/experience",
  },
  //   {
  //     name: "Blog",
  //     url: "/blog",
  //   },
  {
    name: "Contact",
    url: "/contact",
  },
];
