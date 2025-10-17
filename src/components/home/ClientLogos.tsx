"use client";
import Image from "next/image";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const logos = [
  { src: "/logos/itau.svg", alt: "Itaú" },
  { src: "/logos/lenovo.svg", alt: "Lenovo" },
  { src: "/logos/netflix.svg", alt: "Netflix" },
  { src: "/logos/unimed.svg", alt: "Unimed" },
  { src: "/logos/rede-globo.png", alt: "Rede Globo" },
  { src: "/logos/positivo.png", alt: "Positivo" },
  { src: "/logos/edp.png", alt: "EDP" },
];

export default function ClientLogos() {
  const x = useMotionValue(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    if (paused || !containerRef.current) return;

    const containerWidth = containerRef.current.scrollWidth / 2;
    const moveBy = (delta / 1000) * 50;

    let currentX = x.get() - moveBy;

    if (Math.abs(currentX) >= containerWidth) {
      currentX = 0;
    }

    x.set(currentX);
  });

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs font-medium tracking-wider text-gray-500 uppercase mb-8">
          Clientes e parceiros
        </p>

        <div
          ref={containerRef}
          className="relative overflow-hidden cursor-default"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div className="flex items-center gap-10" style={{ x }}>
            {[...logos, ...logos].map(({ src, alt }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex-shrink-0 w-[25%] flex justify-center opacity-80 hover:opacity-100"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={150}
                  height={50}
                  className="h-12 sm:h-14 w-auto transition-transform duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
