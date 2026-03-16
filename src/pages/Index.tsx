import BrightLifeNavbar from "@/components/BrightLifeNavbar";
import BrightLifeHero from "@/components/BrightLifeHero";
import BrightLifeAbout from "@/components/BrightLifeAbout";
import BrightLifeImpact from "@/components/BrightLifeImpact";
import BrightLifeProjects from "@/components/BrightLifeProjects";
import BrightLifeDonation from "@/components/BrightLifeDonation";
import BrightLifeGallery from "@/components/BrightLifeGallery";
import BrightLifeFooter from "@/components/BrightLifeFooter";

const Index = () => {
  return (
    <div className="selection:bg-yellow-300 selection:text-foreground font-body text-foreground">
      <BrightLifeNavbar />
      <BrightLifeHero />
      <BrightLifeAbout />
      <BrightLifeImpact />
      <BrightLifeProjects />
      <BrightLifeDonation />
      <BrightLifeGallery />
      <BrightLifeFooter />
    </div>
  );
};

export default Index;
