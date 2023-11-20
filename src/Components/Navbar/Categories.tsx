// import React, { useState } from "react";
// import CategoryBox from "./CategoryBox";
// import { categories } from "../Utils/Label";
// import "./Category.css";
// import { IoIosArrowDropleft , IoIosArrowDropright} from "react-icons/io";

// interface CategoriesProps {
//   setSelectedCategory: (category: string | null) => void;
//   setDisplayBeforeTaxes: React.Dispatch<React.SetStateAction<boolean>>;
//   cardsList: any[];
// }

// const Categories = ({
//   setSelectedCategory,
//   setDisplayBeforeTaxes,
//   cardsList,
// }: CategoriesProps) => {
//   // const [selectedCategory, setSelected] = useState<string | null>(null);
//   const [displayBeforeTaxes, setDisplayBeforeTaxesLocal] =
//     useState<boolean>(false);

//     const [visibleIconsStart, setVisibleIconsStart] = useState<number>(0);

//   // const handleCategorySelect = (category: string) => {
//   //   setSelected(category);
//   //   setSelectedCategory(category);
//   // };

//   const handleToggleBeforeTaxes = () => {
//     setDisplayBeforeTaxesLocal(!displayBeforeTaxes);
//     setDisplayBeforeTaxes(!displayBeforeTaxes);
//   };

//   const handleMoveIconsLeft = () => {
//     setVisibleIconsStart((prevStart) => Math.max(0, prevStart - 1));
//   };


//   const handleMoveIconsRight = () => {
//     setVisibleIconsStart((prevStart) =>
//       Math.min(categories.length - 1, prevStart + 1)
//     );
//   };

//   return (
//     <>
     
//       <div className="main-div-filter-styling">
//       <IoIosArrowDropleft className="arrow-slider-styling" onClick={handleMoveIconsLeft}/>
//         {categories.map((item) => (
//           <CategoryBox
//             key={item.label}
//             label={item.label}
//             src={item.src}
//             onClick={() => {
//               // const filteredCards = cardsList.filter((card) =>
//               //   card.property_type.includes(item.label)
//               // );
//               setSelectedCategory(item.label);
//               // Optionally, you can pass the filtered cards to the parent component if needed
//               // handleFilteredCards(filteredCards);
//             }}
//             // selected={item.label === selectedCategory}
//           />
//         ))}
//         <IoIosArrowDropright className="arrow-slider-styling" onClick={handleMoveIconsRight}/>
//       </div>
      
//       <div className="toggle-before-taxes">
//         <label>
//           Display Before Taxes
//           <input
//             type="checkbox"
//             checked={displayBeforeTaxes}
//             onChange={handleToggleBeforeTaxes}
//           />
//         </label>
//       </div>
    
//     </>
//   );
// };

// // export default Categories;

import React, { useState } from "react";
import CategoryBox from "./CategoryBox";
import { categories } from "../Utils/Label";
import "./Category.css";
import { CiCircleChevLeft,CiCircleChevRight } from "react-icons/ci";
import { CiSliderHorizontal } from "react-icons/ci";
import FilterModal from "../Filters/FilterModal";
import data from "../../card-data.json"

interface CategoriesProps {
  setSelectedCategory: (category: string | null) => void;
  setDisplayBeforeTaxes: React.Dispatch<React.SetStateAction<boolean>>;
  cardsList: any[];
  setNavFilterData: any;
  
}

const Categories = ({
  setSelectedCategory,
  setDisplayBeforeTaxes,
  cardsList,
  setNavFilterData
}: CategoriesProps) => {
  const [displayBeforeTaxes, setDisplayBeforeTaxesLocal] =
    useState<boolean>(false);
  const [visibleIconsStart, setVisibleIconsStart] = useState<number>(0);
  const [selectedCategory, setSelectedCategoryLocal] = useState<string | null>(
    null
  );

  const data = [
    0, 0, 5, 5, 0, 10, 20, 0, 0, 40, 20, 50, 90, 60, 0, 0, 10, 70, 100, 120, 150, 95, 60, 105,75, 100, 70, 10, 0, 0, 20, 40, 20, 10, 5, 5,
    0, 0, 5, 0, 0,
  ]; // Example data array
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const handleToggleBeforeTaxes = () => {
    setDisplayBeforeTaxesLocal(!displayBeforeTaxes);
    setDisplayBeforeTaxes(!displayBeforeTaxes);
  };

  const handleMoveIconsLeft = () => {
    setVisibleIconsStart((prevStart) => Math.max(0, prevStart - 1));
  };

  const handleMoveIconsRight = () => {
    setVisibleIconsStart((prevStart) =>
      Math.min(categories.length - 1, prevStart + 1)
    );
  };
  const handleCategorySelect = (category: string) => {
    setSelectedCategoryLocal(category);
    setSelectedCategory(category);
  };

  const handleFilterButtonClick = () => {
    setIsFilterModalOpen(true);
  };
 
  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  };
  
  return (
    <div className="categories-container">
      <div className="slider-icons-container">
        <CiCircleChevLeft
          className={`arrow-slider-styling left-arrow ${visibleIconsStart === 0 ? 'hidden' : ''}`}
          onClick={handleMoveIconsLeft}
        />
        <div className="slider-bar">
          <div
            className="slider-icons"
            style={{
              transform: `translateX(-${visibleIconsStart * 100}%)`,
              display: "flex",
              width: "70%",
            }}
          >
            {categories.map((item) => (
              <CategoryBox
                key={item.label}
                label={item.label}
                src={item.src}
                onClick={() => handleCategorySelect(item.label)}
                selected={item.label === selectedCategory}
              />
            ))}
          </div>
        </div>
        <CiCircleChevRight
          className="arrow-slider-styling right-arrow"
          onClick={handleMoveIconsRight}
        />
      </div>

     

      <div className="filters-button">
          {/* Add your filter button here */}
          <button className="filters-button-styling" onClick={handleFilterButtonClick}><CiSliderHorizontal/>Filters</button>
          {isFilterModalOpen && (
         <FilterModal
          onClose={closeFilterModal}
          data={data}
          header="Filters"
          heading1="Price Range"
          heading2="Rooms and beds"
          setNavFilterData={setNavFilterData}
          // onApplyFilter={}
        />
      )}
        </div>

        <div className="toggle-before-taxes">
        <div className="display-before-taxes-text-div">
          Display total before taxes
        </div>
        <div className={`slider-toggle ${displayBeforeTaxes ? 'active' : ''}`} onClick={handleToggleBeforeTaxes}>
          <div className="slider-circle"></div>
        </div>
        </div>

       
      </div>
    
  );
};

export default Categories;

