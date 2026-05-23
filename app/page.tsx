import KrNav from "@/components/KrNav";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ApproachSection from "@/components/sections/ApproachSection";
import WorkSection from "@/components/sections/WorkSection";
import NotesSection from "@/components/sections/NotesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <KrNav adaptive sticky />
      <main>
        <HomeSection />
        <AboutSection />
        <ApproachSection />
        <WorkSection />
        <NotesSection />
        <ContactSection />
      </main>
    </>
  );
}
