import Image from "next/image";
import DesignDataFlow from "~/components/Section/LandingPage/DesignDataFlow";
import Hero from "~/components/Section/LandingPage/Hero";
import { LogoTicker } from "~/components/Section/LandingPage/LogoTicker";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <LogoTicker />
      <DesignDataFlow />
    </div>
  );
}
