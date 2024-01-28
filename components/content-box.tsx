"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ContentBox({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    // <AnimatePresence mode="wait">
    //   <motion.div key={pathname} className="col-span-5 relative">
    //     {children}

    //     <motion.div
    //       className="slide-in"
    //       initial={{ scaleY: 0 }}
    //       animate={{ scaleY: 0 }}
    //       exit={{ scaleY: 1 }}
    //       transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    //     />
    //     <motion.div
    //       className="slide-out"
    //       initial={{ scaleY: 1 }}
    //       animate={{ scaleY: 0 }}
    //       exit={{ scaleY: 0 }}
    //       transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    //     />
    //   </motion.div>
    // </AnimatePresence>
    <motion.div
      key={pathname}
      className="col-span-1 md:col-span-5 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
