import './App.css';
import Cards from "./Components/Cards/Cards";
import data from "./card-data.json";
import Footer from './Components/Footer/Footer';
import React, { useState } from 'react';
import Categories from './Components/Navbar/Categories';
import Nav from './Components/Header/Header';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [displayBeforeTaxes, setDisplayBeforeTaxes] = useState<boolean>(false);
  const [filterAnyState, setFilterAnyState] = useState<[]>([])
  const [ navFilterData, setNavFilterData] = useState<[]>([])
 

  return (
    
   <>
   
   <Nav setFilterAnyState={setFilterAnyState}/>
   <Categories setSelectedCategory={setSelectedCategory}
       setDisplayBeforeTaxes={setDisplayBeforeTaxes}
       cardsList={data} 
       setNavFilterData = {setNavFilterData}
      
        />
   <Cards data={data}
   selectedCategory={selectedCategory} 
   displayBeforeTaxes={displayBeforeTaxes}
   filterAnyState={filterAnyState}
   navFilterData= {navFilterData}
   />
   <Footer />
   </>
  );
}

export default App;
