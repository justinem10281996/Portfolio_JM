import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { PersonalProjects } from './components/PersonalProjects';
import { SupportingProjects } from './components/SupportingProjects';
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

        {/* 01 — Technologies */}
        <Technologies />

        {/* 02 — GitHub Activity */}
        <GithubActivity />

        {/* 03 — Personal Projects */}
        <PersonalProjects />

        {/* 04 — Supporting Projects */}
        <SupportingProjects />

        {/* 05 — Career */}
        <Career />

        {/* 06 — About */}
        <About />
      </main>

      {/* 07 — Contact */}
      <Footer />
    </div>
  );
}

export default App;