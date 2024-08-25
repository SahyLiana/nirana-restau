import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function Header({ children }: Props) {
  return (
    <motion.div
      className="text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 1,
      }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default Header;
