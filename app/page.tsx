import { Testimonials } from "@/components/AnimatedTestimonials";
import { GlowingEffectt } from "@/components/Glowingeffect";
import { Hero } from "@/components/Hero";
import Endorsement from "@/components/endorsement";
import { Tooltip } from "@/components/Tooltips";


export default function Home() {
  return (
      <div>
        <Hero/>
        <Endorsement/>
        <Testimonials/>
        <GlowingEffectt/>
        <Tooltip/>
      </div>
  );
}