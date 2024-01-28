"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "../providers/app";
import { useTheme } from "next-themes";

type Props = {
  children: React.ReactNode;
};

export default function Loader({ children }: Props) {
  const { loading, visible } = useApp();

  return (
    <>
      {loading ? (
        <div className="w-screen h-screen justify-center items-center flex">
          <AnimatePresence>
            {visible && (
              <motion.div
                key="loader"
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                exit={{ scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 2,
                }}
              >
                <motion.p className="text-[100px] opacity-90 underline decoration-blue-900 decoration-4">
                  H
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
