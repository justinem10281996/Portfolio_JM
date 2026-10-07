import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { PersonalProjects } from './components/PersonalProjects';
import { SupportingProjects } from './components/SupportingProjects';
import { Process } from './components/Process';
import { GithubActivity } from './components/GithubActivity';
import { Career } from './components/Career';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { PageLoader } from './components/PageLoader';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <PageLoader />
      <ScrollProgress />
      <Navbar />

      <main>
        {/* 00 — Intro */}
        <Hero />

        {/* 01 — About */}
        <About />

        {/* 02 — GitHub Activity */}
        <GithubActivity />

        {/* 03 — Career */}
        <Career />

        {/* 04 — Technologies */}
        <Technologies />

        {/* 05 — Personal Projects */}
        <PersonalProjects />

        {/* 06  — Supporting Projects */}
        <SupportingProjects />

        {/* 07 — Process */}
        <Process />

      </main>

      {/* 08 — Contact */}
      <Footer />
    </div>
  );
}

export default App;