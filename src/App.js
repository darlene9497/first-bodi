import './App.css';
import Hero from './components/hero/Hero';
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
    </div>
  );
}

export default App;
