import './App.css';
import {Header, Faq, Feature, Testimonials, WhyChooseUs,Footer} from './pages';
import {CTA, Brand, Navbar} from './components';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <WhyChooseUs />
      <Brand />
      <Testimonials />
      {/* <Faq /> */}
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
