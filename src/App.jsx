import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolio } from "./data/portfolio";
import { useTheme } from "./hooks/useTheme";
import { AmbientBackground } from "./components/AmbientBackground";
import { TopBar } from "./components/TopBar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { WorkSection } from "./components/WorkSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { ProjectModal } from "./components/ProjectModal";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeProjectId, setActiveProjectId] = useState(null);

  const activeProject = useMemo(
    () => portfolio.featuredProjects.find((project) => project.id === activeProjectId) ?? null,
    [activeProjectId],
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <AmbientBackground />
      <TopBar
        navigation={portfolio.navigation}
        contactHref={`mailto:${portfolio.contact.email}`}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <motion.main
        className="relative z-10"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroSection hero={portfolio.hero} socialLinks={portfolio.socialLinks} />
        <AboutSection about={portfolio.about} education={portfolio.education} />
        <WorkSection
          featuredProjects={portfolio.featuredProjects}
          secondaryProjects={portfolio.secondaryProjects}
          onProjectSelect={setActiveProjectId}
        />
        <ExperienceSection experience={portfolio.experience} />
        <LeadershipSection leadership={portfolio.leadership} awards={portfolio.awards} />
        <SkillsSection skillGroups={portfolio.skillGroups} />
        <ContactSection contact={portfolio.contact} socialLinks={portfolio.socialLinks} />
      </motion.main>

      <AnimatePresence>
        {activeProject ? (
          <ProjectModal project={activeProject} onClose={() => setActiveProjectId(null)} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
