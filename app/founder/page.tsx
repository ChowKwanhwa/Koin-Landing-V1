import FounderLayout from "@/components/founder/founder-layout"
import FounderHero from "@/components/founder/founder-hero"
import FounderBiography from "@/components/founder/founder-biography"
import FounderInitiatives from "@/components/founder/founder-initiatives"
import FounderLeadership from "@/components/founder/founder-leadership"
import FounderVision from "@/components/founder/founder-vision"
import FounderMedia from "@/components/founder/founder-media"
import FounderContact from "@/components/founder/founder-contact"

export default function FounderPage() {
  return (
    <FounderLayout>
      <FounderHero />
      <FounderBiography />
      <FounderInitiatives />
      <FounderLeadership />
      <FounderVision />
      <FounderMedia />
      <FounderContact />
    </FounderLayout>
  )
}

