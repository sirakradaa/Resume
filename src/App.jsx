import Intro from './components/intro/Intro';
import Arrival from './components/arrival/Arrival';
import BugTracker from './components/bugTracker/BugTracker';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    document.title = "Sirak Radaa Resume"
 }, []);

  return (
    <div>
      <Intro/>
      <Arrival/>
      <BugTracker/>
      <ProductList/>
      <Contact/>
    </div>
  );
};

export default App;