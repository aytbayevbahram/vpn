import Navbar from './Navbar';
import Hero from './Hero';
import Stats from './Stats';
import Features from './Features';
import Pricing from './Pricing';

function App() {
  return (
    <div style={globalStyle}>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
    </div>
  );
}

const globalStyle = {
  fontFamily: '"Rubik", sans-serif',
  backgroundColor: '#ffffff',
  minHeight: '100vh',
  overflowX: 'hidden'
};

export default App;
