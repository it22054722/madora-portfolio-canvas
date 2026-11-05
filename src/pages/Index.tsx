import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustIndicators } from "@/components/TrustIndicators";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Statistics } from "@/components/Statistics";
import { Skills } from "@/components/Skills";
// import { FeaturedProjects } from "@/components/FeaturedProjects";
import { AllProjects } from "@/components/AllProjects";
import { Education } from "@/components/Education";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingSideBlogButton } from "@/components/FloatingSideBlogButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <Navigation />
      {/* <FloatingSideBlogButton /> */}
      <Hero />
      <TrustIndicators />
      <About />
      <Services />
      <Statistics />
      <Education />
      <Skills />
      {/* <FeaturedProjects /> */}
      <AllProjects />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
