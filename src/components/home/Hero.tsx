"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-label="Hero: Soluções Tecnológicas para o Mercado de Eventos"
      className="relative isolate min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Imagem com movimento sutil */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-section.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay gradiente */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
        aria-hidden="true"
      />

      {/* Conteúdo */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 80, scale: 0.95, filter: "blur(4px)" },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              staggerChildren: 0.15,
            },
          },
        }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
          className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
        >
          Soluções Tecnológicas para o Mercado de Eventos
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1.1 }}
          className="mt-5 text-white/90 text-base sm:text-lg md:text-xl leading-relaxed"
        >
          Integramos ferramentas e sistemas para tornar a gestão de eventos mais
          simples, rápida e eficiente.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg">
            <Link href="#solucoes">Conheça Nossas Soluções</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contato">Fale Conosco</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Seta animada para rolagem */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight * 0.9,
              behavior: "smooth",
            })
          }
          aria-label="Role para ver mais"
          className="text-white/80 hover:text-white transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
}
