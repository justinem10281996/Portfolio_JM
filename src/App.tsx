import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { GithubActivity } from './components/GithubActivity';
import { Technologies } from './components/Technologies';
import { PersonalProjects } from './components/PersonalProjects';
import { SupportingProjects } from './components/SupportingProjects';
import { Career } from './components/Career';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <Hero />
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
