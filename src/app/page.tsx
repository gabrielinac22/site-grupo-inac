import ClientLogos from "@/components/home/ClientLogos";
import Hero from "@/components/home/Hero";
import ServiceCards from "@/components/home/ServiceCards";
import StatsSection from "@/components/home/StatsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <StatsSection />
      <ClientLogos />
    </>
  );
}
