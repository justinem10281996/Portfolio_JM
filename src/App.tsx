import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Overview } from './components/Overview';
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

        {/* 01 — About */}
        <About />

        {/* 02 — Overview */}
        <Overview />

        {/* 03 — Technologies */}
        <Technologies />

        {/* 04 — Personal Projects */}
        <PersonalProjects />

        {/* 05 — Supporting Projects */}
        <SupportingProjects />

        {/* 06 — GitHub Activity */}
        <GithubActivity />

        {/* 07 — Career */}
        <Career />
      </main>

      {/* 08 — Contact */}
      <Footer />
    </div>
  );
}

export default App;