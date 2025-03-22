import EemsLayout from "@/components/eems/eems-layout"
import EemsHero from "@/components/eems/eems-hero"
import EemsAbout from "@/components/eems/eems-about"
import EemsProjects from "@/components/eems/eems-projects"
import EemsFramework from "@/components/eems/eems-framework"
import EemsBenefits from "@/components/eems/eems-benefits"
import EemsStats from "@/components/eems/eems-stats"
import EemsPartners from "@/components/eems/eems-partners"
import EemsContact from "@/components/eems/eems-contact"

export default function EemsPage() {
  return (
    <EemsLayout>
      <EemsHero />
      <EemsAbout />
      <EemsProjects />
      <EemsFramework />
      <EemsStats />
      <EemsBenefits />
      <EemsPartners />
      <EemsContact />
    </EemsLayout>
  )
}

