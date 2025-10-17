"use client";

import Link from "next/link";
import { services } from "@/data/services";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ServiceCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  // Contêiner com stagger (efeito cascata)
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // Animação diagonal (vem de baixo e da esquerda)
  const cardVariant = {
    hidden: { opacity: 0, y: 40, x: -30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-24 bg-gray-50" id="solucoes">
      <div className="container-custom px-6 md:px-12 lg:px-20">
        {/* Cabeçalho */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Conheça o Grupo INAC
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Inovamos em cada detalhe para transformar tecnologia em experiências
            únicas — do credenciamento à inteligência artificial.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariant}>
              <Link
                href={`/solucoes/${service.slug}`}
                aria-label={`Saiba mais sobre ${service.title}`}
                className="group block"
              >
                <motion.article
                  whileHover={{
                    y: -5,
                    scale: 1.015,
                    rotateX: 1.5,
                    rotateY: -1.5,
                    transition: { duration: 0.15, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.985 }}
                  className="
                    bg-white rounded-xl overflow-hidden shadow-sm ring-1 ring-gray-100
                    transition-all duration-150 group
                  "
                >
                  {/* Faixa de topo */}
                  <div className="bg-gradient-to-r from-primary to-primary-light h-20 flex items-center justify-center relative overflow-hidden">
                    <div className="text-white w-14 h-14 flex items-center justify-center scale-110">
                      {service.icon}
                    </div>
                    {/* brilho */}
                    <motion.div
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                      {service.shortDescription}
                    </p>

                    <div className="mt-auto inline-flex items-center text-blue-600 font-medium text-sm">
                      <span>Saiba mais</span>
                      <motion.svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
