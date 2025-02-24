import { Testimonials } from "@/components/AnimatedTestimonials";
import Endorsement from "@/components/endorsement";
import { GlowingEffectt } from "@/components/Glowingeffect";
import { Hero } from "@/components/Hero";


export default function Home() {
  return (
   <div>
    <Hero/>
    <Endorsement/>
    <Testimonials/>
    <GlowingEffectt/>
   </div>
  );
}
