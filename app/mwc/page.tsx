import MwcLayout from "@/components/mwc/mwc-layout"
import MwcHero from "@/components/mwc/mwc-hero"
import MwcAbout from "@/components/mwc/mwc-about"
import MwcCompetition from "@/components/mwc/mwc-competition"
import MwcStats from "@/components/mwc/mwc-stats"
import MwcArtists from "@/components/mwc/mwc-artists"
import MwcPartners from "@/components/mwc/mwc-partners"
import MwcHostCity from "@/components/mwc/mwc-host-city"
import MwcCta from "@/components/mwc/mwc-cta"

export default function MwcPage() {
  return (
    <MwcLayout>
      <MwcHero />
      <MwcAbout />
      <MwcCompetition />
      <MwcStats />
      <MwcArtists />
      <MwcHostCity />
      <MwcPartners />
      <MwcCta />
    </MwcLayout>
  )
}

