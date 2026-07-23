import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Overview } from './components/Overview';
import { GithubActivity } from './components/GithubActivity';
import { Technologies } from './components/Technologies';
import { PersonalProjects } from './components/PersonalProjects';
import { SupportingProjects } from './components/SupportingProjects';
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
      <Hero />
      <About />
      <Overview />
      <GithubActivity />
      <Technologies />
      <PersonalProjects />
      <SupportingProjects />
      <Career />
      <Footer />
    </div>
  );
}

export default App;
