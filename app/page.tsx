import Image from "next/image";
// import { Testimonials } from "~/components/Section/LandingPage/Testimonials";
import DesignDataFlow from "~/components/Section/LandingPage/DesignDataFlow";
import Hero from "~/components/Section/LandingPage/Hero";
import { LogoTicker } from "~/components/Section/LandingPage/LogoTicker";
import { Testimonial } from "~/components/Section/LandingPage/Testimonial";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <LogoTicker />
      <DesignDataFlow />
      <Testimonial />
    </div>
  );
}
