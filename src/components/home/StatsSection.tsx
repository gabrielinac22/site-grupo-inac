"use client";
import { Users, Calendar, Video, Smile } from "lucide-react";
import CountUp from "react-countup";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  end: number;
  duration: number;
  aria: string;
  highlight?: boolean;
  delay?: number;
}

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      label: "Participantes",
      end: 1000000,
      duration: 2.2,
      aria: "+1 milhão de participantes",
      highlight: true,
    },
    {
      icon: Calendar,
      label: "Eventos presenciais",
      end: 2500,
      duration: 1.8,
      aria: "+2500 eventos presenciais",
    },
    {
      icon: Video,
      label: "Eventos remotos",
      end: 700,
      duration: 1.6,
      aria: "+700 eventos remotos",
    },
    {
      icon: Smile,
      label: "Clientes satisfeitos",
      end: 384,
      duration: 1.4,
      aria: "+384 clientes satisfeitos",
    },
  ];

  return (
    <section className="py-24 sm:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Impacto em Números</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Resultados que comprovam nossa credibilidade no mercado de eventos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(
            ({ icon: Icon, label, end, duration, aria, highlight }, i) => (
              <StatCard
                key={label}
                icon={Icon}
                label={label}
                end={end}
                duration={duration}
                aria={aria}
                highlight={highlight}
                delay={i * 0.1}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  label,
  end,
  duration,
  aria,
  highlight,
  delay,
}: StatCardProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: "-20% 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView]); 

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`
        text-center bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-8 
        transition-all duration-500 hover:shadow-md hover:-translate-y-1 
        ${highlight ? "border-t-4 border-secondary" : ""}
      `}
      aria-label={aria}
    >
      <div className="w-12 h-12 mx-auto mb-4 bg-secondary-light ring-1 ring-secondary text-black rounded-xl flex items-center justify-center">
        <Icon className="w-6 h-6" aria-hidden="true" />
      </div>

      <div
        className={`flex justify-center items-baseline ${
          end === 1000000
            ? "text-[2.4rem] sm:text-[2.8rem]"
            : "text-4xl sm:text-5xl"
        } font-extrabold tracking-tight leading-none ${
          highlight ? "text-secondary" : "text-gray-900"
        }`}
        aria-live="polite"
      >
        <span className="mr-1">+</span>
        {inView && (
          <CountUp
            end={end}
            separator="."
            duration={duration}
            startOnMount
            decimals={0}
          />
        )}
      </div>

      <p className="mt-2 text-sm sm:text-base text-gray-600">{label}</p>
    </motion.div>
  );
}
