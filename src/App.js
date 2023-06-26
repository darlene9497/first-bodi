import './App.css';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Join from './components/join/Join';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reason from './components/reason/Reason';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
