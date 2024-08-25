import { useState } from 'react';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import NewsNavBar from './components/NewsNavbar';
import Footer from './components/Footer';

const App = () => {
  const [category, setCategory] = useState("general");
  const [country, setCountryCode] = useState("us");
  const [source, setSource] = useState("");

  const handleSourceChange = (newSource) => {
    setSource(newSource);
    setCategory(""); // Clear category when source is selected
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSource(""); // Clear source when category is selected
  };

  const handleCountryChange = (newCountry) => {
    setCountryCode(newCountry);
    setSource(""); // Clear source when country is selected
    setCategory("general"); // Reset category to default
  };

  return (
    <>
      <Navbar setCountryCode={handleCountryChange} setCategory={handleCategoryChange} setCurrentCategory={category} />
      <NewsNavBar setSource={handleSourceChange} />
      <NewsBoard category={category} country={country} source={source} />
      <Footer/>
    </>
  );
};

export default App;

