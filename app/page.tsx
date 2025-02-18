import { Testimonials } from "@/components/AnimatedTestimonials";
import { GlowingEffectt } from "@/components/Glowingeffect";
import { Hero } from "@/components/Hero";
import { Inducement } from "@/components/Inducement"


export default function Home() {
  return (
   <div>
    <Hero/>
    <Inducement/>
    <Testimonials/>
    <GlowingEffectt/>
   </div>
  );
}
