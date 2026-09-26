"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
      }}
      className="
        fixed
        left-1/2
        top-3
        z-50
        w-[calc(100%-16px)]
        max-w-[520px]
        -translate-x-1/2
        sm:top-5
        sm:w-[calc(100%-32px)]
      "
    >
      {/* =====================================================
          NAVBAR CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          rounded-full
          border
          border-blue-400/10
          bg-[#07101f]/80
          p-1
          shadow-[0_0_40px_rgba(37,99,235,0.12)]
          backdrop-blur-2xl
          sm:p-1.5
        "
      >
        {/* BLUE GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            bg-blue-500/5
            blur-xl
          "
        />

        {/* =====================================================
            NAV LINKS
        ===================================================== */}

        <div
          className="
            relative
            flex
            items-center
            justify-between
            rounded-full
          "
        >
          <NavLink href="#home">
            Home
          </NavLink>

          <NavLink href="#about">
            About
          </NavLink>

          <NavLink href="#portfolio">
            Portfolio
          </NavLink>

          <NavLink href="#contact">
            Contact
          </NavLink>
        </div>
      </div>
    </motion.nav>
  );
}


/* =========================================================
   NAV LINK
========================================================= */

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="
        group
        relative
        flex
        min-w-0
        flex-1
        items-center
        justify-center
        rounded-full
        px-2.5
        py-2.5
        text-[11px]
        font-semibold
        text-gray-400
        transition
        duration-300

        hover:text-white

        sm:px-4
        sm:py-3
        sm:text-xs

        md:px-5
        md:text-sm
      "
    >
      {/* TEXT */}

      <span className="relative z-10 whitespace-nowrap">
        {children}
      </span>

      {/* BLUE GLOW */}

      <span
        className="
          absolute
          inset-0
          -z-0
          scale-75
          rounded-full
          bg-blue-500/0
          opacity-0
          blur-xl
          transition
          duration-300
          group-hover:scale-100
          group-hover:bg-blue-500/20
          group-hover:opacity-100
        "
      />

      {/* UNDERLINE */}

      <span
        className="
          absolute
          bottom-1
          left-1/2
          h-[2px]
          w-0
          -translate-x-1/2
          bg-blue-400
          shadow-[0_0_10px_#3b82f6]
          transition-all
          duration-300
          group-hover:w-5

          sm:group-hover:w-6
        "
      />
    </a>
  );
}