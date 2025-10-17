import Hero from '@/components/home/Hero';
import ServiceCards from '@/components/home/ServiceCards';
import StatsSection from '@/components/home/StatsSection';
import ClientLogos from '@/components/home/ClientLogos';

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
