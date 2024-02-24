"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UserButton } from "@clerk/nextjs";

const ProfilePage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <UserButton afterSignOutUrl="/" />
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfilePage;
