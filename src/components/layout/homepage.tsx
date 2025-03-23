"use client";
import { motion } from "framer-motion";
import "@/app/styles/landing.css";
import { Button } from "antd";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Welcome to My Landing Page</h1>
          <p>With the smooth animations </p>
          <Link href="/auth/login">
            <Button className="button-signin">Click here to sign in</Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
