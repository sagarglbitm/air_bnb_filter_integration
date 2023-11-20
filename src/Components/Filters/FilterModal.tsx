//====== WORKING CODE ======//

// FilterModal.tsx
import React, { useEffect, useState } from "react";
// import './FilterModal.scss'; // Import your SCSS file
import "./Filter.scss";
// import "./BarGraph.scss";

import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHotel,
  faHouse,
  faTreeCity,
} from "@fortawesome/free-solid-svg-icons";
import dbjson from "../../card-data.json";



interface FilterType {
  selectedEssentials: string[];
  selectedFeatures: string[];
  selectedLocation: string[];
  selectedSafety: string[];
  selectedGuestEntrance : string[];
  selectedBedroomsFeatures : string[];
  selectedBathroomFeatures : string[];
  selectedEquipement: string[];
  selectedBookingOption : string[];
  selectedLanguage : string[];
  selectedFilter : string[];
}
interface FilterModalProps {
  onClose: () => void;
  data: number[];
  header: string;
  heading1: string;
  heading2: string;
  setNavFilterData: any
  // onApplyFilter : (filters : FilterType) => void
}

const FilterModal: React.FC<FilterModalProps> = ({
  onClose,
  data,
  header,
  heading1,
  heading2,
  setNavFilterData
  // onApplyFilter
}) => {

// const [resultFilters, setResultFilters] = useState([])

  const allEssentialsCheckboxOptions = [
    "Wifi",
    "Kitchen",
    "Washing Machine",
    "Dryer",
    "Air Conditioning",
    "Heating",
    "Dedicated workspace",
    "TV",
    "Hair dryer",
    "Iron",
  ];

  const allFeaturesCheckboxOptions = [
    "Pool",
    "Hot tub",
    "Free parking",
    "EV charger",
    "Cot",
    "King bed",
    "Gym",
    "BBQ grill",
    "Breakfast",
    "Indoor fireplace",
    "Smoking allowed",
  ];

  const allLocationCheckboxOptions = ["Waterfront"];

  const allSafetyCheckboxOptions = ["Smoke alarm", "Carbon monoxide alarm"];

  const [visibleEssentialsCheckboxes, setVisibleEssentialsCheckboxes] =
    useState<number>(6); // Number of checkboxes to initially display
  const [visibleFeaturesCheckboxes, setVisibleFeaturesCheckboxes] =
    useState<number>(0);
  const [visibleLocationCheckboxes, setVisibleLocationCheckboxes] =
    useState<number>(0);
  const [visibleSafetyCheckboxes, setVisibleSafetyCheckboxes] =
    useState<number>(0);
  const [showMoreAmenities, setShowMoreAmenities] = useState<boolean>(true);

  const allGuestEntranceCheckboxOptions = [
    "Step-free guest entrance",
    "Guest entrance wider than 32 inches (81 centimetres)",
    "Accessible parking spot",
    "Step-free path to the guest entrance",
  ];

  const allBedroomFeatureCheckboxOptions = [
    "Step-free bedroom access",
    "Bedroom entrance wider than 32 inches (81 centimetres)",
  ];

  const allBathroomFeatureCheckboxOptions = [
    "Step-free bathroom access",
    "Bathroom entrance wider than 32 inches (81 centimetres)",
    "Shower grab bar",
    "Toilet grab bar",
    "Step-free shower",
    "Shower or bath chair",
  ];

  const allEquipementCheckboxOptions = ["Ceiling or mobile hoist"];

  const [visibleGuestEntranceCheckboxes, setVisibleGuestEntranceCheckboxes] =
    useState<number>(6); // Number of checkboxes to initially display
  const [visibleBedroomFeatureCheckboxes, setVisibleBedroomFeatureCheckboxes] =
    useState<number>(0);
  const [
    visibleBathroomFeatureCheckboxes,
    setVisibleBathroomFeatureCheckboxes,
  ] = useState<number>(0);
  const [visibleEquipementCheckboxes, setVisibleEquipementCheckboxes] =
    useState<number>(0);
  const [showMoreAccessibility, setShowMoreAccessibility] =
    useState<boolean>(true);

  const allLanguageCheckboxOptions = [
    "English",
    "French",
    "German",
    "Japanese",
    "Russian",
    "Spanish",
    "Chinese (Simplified)",
    "Arabic",
    "Hindi",
    "Portuguese",
    "Indonesian",
    "Dutch",
    "Bengali",
    "Thai",
    "Punjabi",
    "Greek",
    "Hebrew",
    "Polish",
    "Danish",
    "Swedish",
    "Ukrainian",
  ];

  const [visibleLanguageCheckboxes, setVisibleLanguageCheckboxes] =
    useState<number>(6);

  const [showMoreLanguages, setShowMoreLanguages] = useState<boolean>(true);

  const [minPrice, setMinPrice] = useState('830');
  const [maxPrice, setMaxPrice] = useState('25000');
  // const [beds, setBeds] = useState(0);
  // const [bedroom, setBedroom] = useState(0);
  // const [bathrooms, setBathrooms] = useState(0);

  const [selectedBedCount, setSelectedBedCount] = useState<
    number | string | null
  >(null);

  // const handleBedButtonClick = (
  //   count: string | null,
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setSelectedBedCount(count);
  //   setBeds(Number(e.target.value));
  // };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value);
  };

  const handlePriceRangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = e.target;

    if (e.target.name === "minPrice") {
      setMinPrice(e.target.value);
    } else if (e.target.name === "maxPrice") {
      setMaxPrice(e.target.value);
    }

    console.log(e.target.name, e.target.value)
    // setMaxPrice(e.target.value);
  };

  // const handleBedroomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setBedroom(Number(e.target.value));
  // };

  // const handleBathroomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setBathrooms(Number(e.target.value));
  // };

  const handleAmenitiesShowMore = () => {
    setVisibleEssentialsCheckboxes(allEssentialsCheckboxOptions.length); // Increase the number of visible checkboxes
    setVisibleFeaturesCheckboxes(allFeaturesCheckboxOptions.length);
    setVisibleLocationCheckboxes(allLocationCheckboxOptions.length);
    setVisibleSafetyCheckboxes(allSafetyCheckboxOptions.length);
    setShowMoreAmenities(false);
  };

  const handleAmenitiesShowLess = () => {
    setVisibleEssentialsCheckboxes(6);
    setVisibleFeaturesCheckboxes(0);
    setVisibleLocationCheckboxes(0);
    setVisibleSafetyCheckboxes(0);
    setShowMoreAmenities(true);
  };

  const handleAccessibiltyShowMore = () => {
    setVisibleGuestEntranceCheckboxes(allGuestEntranceCheckboxOptions.length); // Increase the number of visible checkboxes
    setVisibleBedroomFeatureCheckboxes(allBedroomFeatureCheckboxOptions.length);
    setVisibleBathroomFeatureCheckboxes(
      allBathroomFeatureCheckboxOptions.length
    );
    setVisibleEquipementCheckboxes(allEquipementCheckboxOptions.length);
    setShowMoreAccessibility(false);
  };

  const handleAccessibiltyShowLess = () => {
    setVisibleGuestEntranceCheckboxes(6); // Increase the number of visible checkboxes
    setVisibleBedroomFeatureCheckboxes(0);
    setVisibleBathroomFeatureCheckboxes(0);
    setVisibleEquipementCheckboxes(0);
    setShowMoreAccessibility(true);
  };

  const handleLanguageShowMore = () => {
    setVisibleLanguageCheckboxes(allLanguageCheckboxOptions.length); // Increase the number of visible checkboxes

    setShowMoreLanguages(false);
  };

  const handleLanguageShowLess = () => {
    setVisibleLanguageCheckboxes(6);

    setShowMoreLanguages(true);
  };

  const essentialsColums1 = allEssentialsCheckboxOptions.slice(
    0,
    visibleEssentialsCheckboxes
  );

  const guestColums1 = allGuestEntranceCheckboxOptions.slice(
    0,
    visibleGuestEntranceCheckboxes
  );

  const [selectedEssentials, setSelectedEssentials] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [selectedSafety, setSelectedSafety] = useState<string[]>([]);

  const [selectedGuestEntrance, setSelectedGuestEntrance] = useState<string[]>(
    []
  );
  const [selectedBedroomFeatures, setSelectedBedroomFeatures] = useState<
    string[]
  >([]);
  const [selectedEquipement, setSelectedEquipement] = useState<string[]>([]);
  const [selectedBathroomFeature, setSelectedBathroomFeature] = useState<
    string[]
  >([]);

  const [selectedPlace, setSelectedPlace] = useState<string[]>([]);
  const [selectedBedroomCount, setSelectedBedroomCount] = useState<string[]>(
    []
  );
  const [selectedBedsNoCount, setSelectedBedsNoCount] = useState<string[]>([]);

  const [selectedTypeOfProperty, setSelectedTypeOfProperty] = useState<
    string[]
  >([]);
  const [selectedBathroomNoCount, setSelectedBathroomNoCount] = useState<
    string[]
  >([]);
  const [selectedBookingOption, setSelectedBookingOption] = useState<string[]>(
    []
  );
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);

  const handleCheckboxChange1 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedEssentials((prevSelectedEssentials) => {
      if (isChecked) {
        return [...prevSelectedEssentials, value];
      } else {
        return prevSelectedEssentials.filter((item) => item !== value);
      }
    });
  };

  const handleCheckboxChange2 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedFeatures((prevSelectedFeatures) => {
      if (isChecked) {
        return [...prevSelectedFeatures, value];
      } else {
        return prevSelectedFeatures.filter((item) => item !== value);
      }
    });
  };

  const handleCheckboxChange3 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedLocation((prevSelectedLocation) => {
      if (isChecked) {
        return [...prevSelectedLocation, value];
      } else {
        return prevSelectedLocation.filter((item) => item !== value);
      }
    });
  };

  const handleCheckboxChange4 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedSafety((prevSelectedSafety) => {
      if (isChecked) {
        return [...prevSelectedSafety, value];
      } else {
        return prevSelectedSafety.filter((item) => item !== value);
      }
    });
  };

  const handleCheckboxChange5 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedGuestEntrance((prevSelectedGuestEntrance) => {
      if (isChecked) {
        return [...prevSelectedGuestEntrance, value];
      } else {
        return prevSelectedGuestEntrance.filter((item) => item !== value);
      }
    });
  };

  const handleCheckboxChange6 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedBedroomFeatures((prevSelectedBedroomFeatures) => {
      if (isChecked) {
        return [...prevSelectedBedroomFeatures, value];
      } else {
        return prevSelectedBedroomFeatures.filter((item) => item !== value);
      }
    });
  };

  const handleCheckboxChange7 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedEquipement((prevSelectedEquipement) => {
      if (isChecked) {
        return [...prevSelectedEquipement, value];
      } else {
        return prevSelectedEquipement.filter((item) => item !== value);
      }
    });
  };

  const handleCheckboxChange8 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedBathroomFeature((prevSelectedBathroomFeature) => {
      if (isChecked) {
        return [...prevSelectedBathroomFeature, value];
      } else {
        return prevSelectedBathroomFeature.filter((item) => item !== value);
      }
    });
  };

  const [selectedFilter, setSelectedFilter] = useState<string[] | string>([]);

  const handleButtonChangeEvent = (selectedLabel: string) => {
    // setSelectedFilter(selectedLabel)
    // const prevSelectedFilter :string
    setSelectedFilter((prevSelectedFilter: string[] | string) => {
      if (typeof prevSelectedFilter === "string") {
        return [selectedLabel];
      }

      if (prevSelectedFilter && prevSelectedFilter.includes(selectedLabel)) {
        return prevSelectedFilter.filter((item) => item !== selectedLabel);
      } else {
        return [...(prevSelectedFilter || []), selectedLabel];
      }
    });

    console.log(selectedLabel);

    console.log("COunt");
  };

  const handleCheckboxChange10 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedBedsNoCount((prevSelectedBedsNoCount) => {
      if (isChecked) {
        return [...prevSelectedBedsNoCount, value];
      } else {
        return prevSelectedBedsNoCount.filter((item) => item !== value);
      }
    });
  };

  const handleCheckboxChange11 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedBedroomCount((prevSelectedBedroomCount) => {
      if (isChecked) {
        return [...prevSelectedBedroomCount, value];
      } else {
        return prevSelectedBedroomCount.filter((item) => item !== value);
      }
    });
  };

  const handleCheckboxChange12 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedBathroomNoCount((prevSelectedBathroomNoCount) => {
      if (isChecked) {
        return [...prevSelectedBathroomNoCount, value];
      } else {
        return prevSelectedBathroomNoCount.filter((item) => item !== value);
      }
    });
  };

  const handleCheckboxChange13 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedTypeOfProperty((prevSelectedTypeOfProperty) => {
      if (isChecked) {
        return [...prevSelectedTypeOfProperty, value];
      } else {
        return prevSelectedTypeOfProperty.filter((item) => item !== value);
      }
    });
  };

  const handleCheckboxChange14 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedBookingOption((prevSelectedBookingOption) => {
      if (isChecked) {
        return [...prevSelectedBookingOption, value];
      } else {
        return prevSelectedBookingOption.filter((item) => item !== value);
      }
    });
  };

  const handleCheckboxChange15 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedLanguage((prevSelectedLanguage) => {
      if (isChecked) {
        return [...prevSelectedLanguage, value];
      } else {
        return prevSelectedLanguage.filter((item) => item !== value);
      }
    });
  };

  const applyFilters = () => {
    const filteredData = dbjson.filter((item) => {
      const filter1 = selectedEssentials.every((essential) =>
        item.essentials.includes(essential)
      );

      const filter2 = selectedFeatures.every((feature) =>
        item.features.includes(feature)
      );

      const filter3 = selectedLocation.every((location) =>
        item.view.includes(location)
      );

      const filter4 = selectedSafety.every((safety) =>
        item.safety.includes(safety)
      );

      const filter5 = selectedGuestEntrance.every((guestEntrance) =>
        item.guestAccessibility.includes(guestEntrance)
      );

      const filter6 = selectedBedroomFeatures.every((bedroomFeature) =>
        item.bedroomFeatures.includes(bedroomFeature)
      );

      const filter7 = selectedBathroomFeature.every((bathroomFeature) =>
        item.bathroomFeatures.includes(bathroomFeature)
      );

      const filter8 = selectedEquipement.every((equipement) =>
        item.equipement.includes(equipement)
      );

      const filter14 = selectedBookingOption.every((bookingOption) =>
        item.bookingOptions.includes(bookingOption)
      );

      const filter15 = selectedLanguage.every((language) =>
        item.language.includes(language)
      );

      const itemPrice = parseInt(item.price, 10);
      const min = parseInt(minPrice, 10);
      const max = parseInt(maxPrice, 10);

      const result = itemPrice >= min && itemPrice <= max;

      let combine =
        filter1 &&
        filter2 &&
        filter3 &&
        filter4 &&
        filter5 &&
        filter6 &&
        filter7 &&
        filter8 &&
        filter14 &&
        filter15;

      if (typeof selectedFilter === "string") {
        item.place.includes(selectedFilter) ||
          item.typeOfProperty.includes(selectedFilter) ||
          item.beds.includes(selectedFilter) ||
          item.bedrooms.includes(selectedFilter) ||
          item.bathrooms.includes(selectedFilter);
      } else if (Array.isArray(selectedFilter) && selectedFilter.length > 0) {
        const filter9 = selectedFilter.every(
          (selectedLabel) =>
            item.place.includes(selectedLabel) ||
            item.typeOfProperty.includes(selectedLabel) ||
            item.beds.includes(selectedLabel) ||
            item.bedrooms.includes(selectedLabel) ||
            item.bathrooms.includes(selectedLabel)
        );
        combine = combine && filter9;
        // return filter9
      }
      
      return result && combine;
    });

    

    console.log(filteredData);
    // onApplyFilter(filteredData)
    setNavFilterData(filteredData);
    onClose()
    
    return filteredData;
    
    
  };

  return (
    <div className="filter-modal">
      <div className="filter-content">
        <div className="modal-header">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h4>{header}</h4>
        </div>
        <div className="body">
          <div className="places">
            <h3>Type of Place</h3>
            <p>Search rooms, entire homes or any type of place.</p>
            <div className="place-button">
            
            <Button count="Anytype" onClick={handleButtonChangeEvent} />
            
            <Button count="Rooms" onClick={handleButtonChangeEvent} />
            <Button count="Entire home" onClick={handleButtonChangeEvent} />
            </div>
            
          </div>
          <div className="price-range">
            <h3>{heading1}</h3>

              {/* <div>
              {data.map((value, index) => (
                <div
                  key={index}
                  className="bar"
                  style={{ height: `${value}px` }}
                ></div>
              ))}
            </div> */}

            <div className="filter-options">
              <div className="graph-bar">
                <input
                name="minPrice"
                  type="range"
                  min="830"
                  max="25000"
                  value={minPrice}
                  onChange={handlePriceRangeValue}
                  step={1}
                />
                <input
                  name="maxPrice"
                  type="range"
                  min="830"
                  max="25000"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}

                  // checked={selectedLocation.includes(maxPrice)}
                  // onChange={handlePriceRangeValue}
                  step={1}
                />
              </div>
              <div className="range-values">
                <p>Min: {minPrice}</p>
                <p>Max: {maxPrice}</p>
                <input
                  type="text"
                  name="minPrice"
                  // type="range"
                  min="830"
                  max="25000"
                  value={minPrice}
                  onChange={handlePriceRangeValue}
                ></input>
              </div>
            </div>
          </div>

          <div className="rooms">
            <h3>{heading2}</h3>
            <div className="bathrooms-filter">
              <span>Bedrooms</span>
              <Button
                className="bedroom-button"
                count="Any"
                selected={selectedBedCount === "Any"}
                // onClick={() => handleBedroomChange}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bedroom-button"
                count="1"
                selected={selectedBedCount === "1"}
                // onClick={() => handleBedroomChange}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bedroom-button"
                count="2"
                selected={selectedBedCount === "2"}
                // onClick={() => handleBedroomChange}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bedroom-button"
                count="3"
                selected={selectedBedCount === "3"}
                // onClick={() => handleBedroomChange}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bedroom-button"
                count="4"
                selected={selectedBedCount === "4"}
                // onClick={() => handleBedroomChange}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bedroom-button"
                count="5"
                selected={selectedBedCount === "5"}
                // onClick={() => handleBedroomChange}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bedroom-button"
                count="6"
                selected={selectedBedCount === "6"}
                // onClick={() => handleBedroomChange}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bedroom-button"
                count="7"
                selected={selectedBedCount === "7"}
                // onClick={() => handleBedroomChange}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bedroom-button"
                count="8+"
                selected={selectedBedCount === "8+"}
                // onClick={() => handleBedroomChange}
                onClick={handleButtonChangeEvent}
              />
            </div>
            <div className="beds-filter">
              <span>Beds</span>
              <Button
                className="bed-button"
                count="Any"
                selected={selectedBedCount === "Any"}
                // onClick={() => handleBedButtonClick}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bed-button"
                count="1"
                selected={selectedBedCount === "1"}
                // onClick={() => handleBedButtonClick}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bed-button"
                count="2"
                selected={selectedBedCount === "2"}
                // onClick={() => handleBedButtonClick}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bed-button"
                count="3"
                selected={selectedBedCount === "3"}
                // onClick={() => handleBedButtonClick}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bed-button"
                count="4"
                selected={selectedBedCount === "4"}
                // onClick={() => handleBedButtonClick}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bed-button"
                count="5"
                selected={selectedBedCount === "5"}
                // onClick={() => handleBedButtonClick}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bed-button"
                count="6"
                selected={selectedBedCount === "6"}
                // onClick={() => handleBedButtonClick}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bed-button"
                count="7"
                selected={selectedBedCount === "7"}
                // onClick={() => handleBedButtonClick}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bed-button"
                count="8+"
                selected={selectedBedCount === "8+"}
                // onClick={() => handleBedButtonClick}
                onClick={handleButtonChangeEvent}
              />
            </div>
            <div className="bathrooms-filter">
              <span>Bathrooms</span>
              <Button
                className="bathroom-button"
                count="Any"
                selected={selectedBedCount === "Any"}
                // onClick={() => handleBathroomsChange}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bathroom-button"
                count="1"
                selected={selectedBedCount === "1"}
                // onClick={() => handleBathroomsChange}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bathroom-button"
                count="2"
                selected={selectedBedCount === "2"}
                // onClick={() => handleBathroomsChange}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bathroom-button"
                count="3"
                selected={selectedBedCount === "3"}
                // onClick={() => handleBathroomsChange}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bathroom-button"
                count="4"
                selected={selectedBedCount === "4"}
                // onClick={() => handleBathroomsChange}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bathroom-button"
                count="5"
                selected={selectedBedCount === "5"}
                // onClick={() => handleBathroomsChange}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bathroom-button"
                count="6"
                selected={selectedBedCount === "6"}
                // onClick={() => handleBathroomsChange}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bathroom-button"
                count="7"
                selected={selectedBedCount === "7"}
                // onClick={() => handleBathroomsChange}
                onClick={handleButtonChangeEvent}
              />
              <Button
                className="bathroom-button"
                count="8+"
                selected={selectedBedCount === "8+"}
                // onClick={() => handleBathroomsChange}
                onClick={handleButtonChangeEvent}
              />
            </div>
          </div>
          <div className="property-type">
            <h3>Property-type</h3>
            <div className="property">
            <div className="property-div">
              <FontAwesomeIcon className="icon" icon={faHouse} style={{ color: "#050505" }} />
              <Button count="House" onClick={handleButtonChangeEvent} />
            </div>
            <div className="property-div">
              <FontAwesomeIcon className="icon" icon={faBuilding} style={{ color: "#000000" }} />
              {/* <FontAwesomeIcon icon={faApartment} style={{color: "#000000",}} /> */}
              <Button count="Flat" onClick={handleButtonChangeEvent} />
            </div>
            <div className="property-div">
              <FontAwesomeIcon className="icon" icon={faTreeCity} style={{ color: "#000000" }} />
              {/* <FontAwesomeIcon icon={faHouseBuilding} style={{color: "#000000",}} /> */}
              <Button count="Guest house" onClick={handleButtonChangeEvent} />
            </div>
            <div className="property-div">
              <FontAwesomeIcon className="icon" icon={faHotel} style={{ color: "#000000" }} />
              <Button count="Hotel" onClick={handleButtonChangeEvent} />
            </div>
            </div>
          </div>
          <div className="amenities">
            <h3>Amenities</h3>
            <h5>Essentials</h5>
            <div className="amenities-body">
              <div className="essentials">
                <div className="grid-columns">
                  {essentialsColums1.map((option, index) => (
                    <label key={index} className="container">
                      {option}
                      <input
                        type="checkbox"
                        value={option}
                        checked={selectedEssentials.includes(option)}
                        onChange={handleCheckboxChange1}
                      />
                      <span className="checkmark"></span>
                      {/* <input type="checkbox" />
                      <span className="checkmark"></span> */}
                    </label>
                  ))}
                </div>
                {!showMoreAmenities && (
                  <>
                    <div className="features">
                      <h5>Features</h5>
                      <div className="grid-columns">
                        {allFeaturesCheckboxOptions
                          .slice(0, visibleFeaturesCheckboxes)
                          .map((option, index) => (
                            <label key={index} className="container">
                              {option}
                              <input
                                type="checkbox"
                                value={option}
                                checked={selectedFeatures.includes(option)}
                                onChange={handleCheckboxChange2}
                              />
                              <span className="checkmark"></span>
                            </label>
                          ))}
                      </div>
                    </div>
                    <div className="location">
                      <h5>Location</h5>
                      <div className="grid-columns">
                        {allLocationCheckboxOptions
                          .slice(0, visibleLocationCheckboxes)
                          .map((option, index) => (
                            <label key={index} className="container">
                              {option}
                              <input
                                type="checkbox"
                                value={option}
                                checked={selectedLocation.includes(option)}
                                onChange={handleCheckboxChange3}
                              />
                              <span className="checkmark"></span>
                            </label>
                          ))}
                      </div>
                    </div>
                    <div className="safety">
                      <h5>Safety</h5>
                      <div className="grid-columns">
                        {allSafetyCheckboxOptions
                          .slice(0, visibleSafetyCheckboxes)
                          .map((option, index) => (
                            <label key={index} className="container">
                              {option}
                              <input
                                type="checkbox"
                                value={option}
                                checked={selectedSafety.includes(option)}
                                onChange={handleCheckboxChange4}
                              />
                              <span className="checkmark"></span>
                            </label>
                          ))}
                      </div>
                    </div>
                  </>
                )}

                <div className="buttons-container">
                  {showMoreAmenities && (
                    <button
                      className="show-more"
                      onClick={handleAmenitiesShowMore}
                    >
                      Show More
                    </button>
                  )}

                  {!showMoreAmenities && (
                    <button
                      className="show-less"
                      onClick={handleAmenitiesShowLess}
                    >
                      Show Less
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="booking-options">
              <h3>Booking Options</h3>
              <div className="options">
                <div>
                  <p>Instant Book</p>
                  <p>Listings you can book without waiting for host approval</p>
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    value={"Instant Booking"}
                    checked={selectedBookingOption.includes("Instant Booking")}
                    onChange={handleCheckboxChange14}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="options">
                <div>
                  <p>Self check-in</p>
                  <p>Easy access to the property once you arrive</p>
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    value={"Self check-in"}
                    checked={selectedBookingOption.includes("Self check-in")}
                    onChange={handleCheckboxChange14}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="options">
                <div>
                  <p>Allows pets</p>
                  <p>Bringing a service animal?</p>
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    value={"Allows pets"}
                    checked={selectedBookingOption.includes("Allows pets")}
                    onChange={handleCheckboxChange14}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className="amenities">
              <h3>Accessibility Feature</h3>
              <h5>Guest entrance and parking</h5>
              <div className="amenities-body">
                <div className="essentials">
                  <div className="grid-columns">
                    {guestColums1.map((option, index) => (
                      <label key={index} className="container">
                        {option}
                        <input
                          type="checkbox"
                          value={option}
                          checked={selectedGuestEntrance.includes(option)}
                          onChange={handleCheckboxChange5}
                        />
                        <span className="checkmark"></span>
                      </label>
                    ))}
                  </div>
                </div>
                {!showMoreAccessibility && (
                  <>
                    <div className="features">
                      <h5>Bedroom</h5>
                      <div className="grid-columns">
                        {allBedroomFeatureCheckboxOptions
                          .slice(0, visibleBedroomFeatureCheckboxes)
                          .map((option, index) => (
                            <label key={index} className="container">
                              {option}
                              <input
                                type="checkbox"
                                value={option}
                                checked={selectedBedroomFeatures.includes(
                                  option
                                )}
                                onChange={handleCheckboxChange6}
                              />
                              <span className="checkmark"></span>
                            </label>
                          ))}
                      </div>
                    </div>
                    <div className="location">
                      <h5>Bathroom</h5>
                      <div className="grid-columns">
                        {allBathroomFeatureCheckboxOptions
                          .slice(0, visibleBathroomFeatureCheckboxes)
                          .map((option, index) => (
                            <label key={index} className="container">
                              {option}
                              <input
                                type="checkbox"
                                value={option}
                                checked={selectedBathroomFeature.includes(
                                  option
                                )}
                                onChange={handleCheckboxChange7}
                              />
                              <span className="checkmark"></span>
                            </label>
                          ))}
                      </div>
                    </div>
                    <div className="safety">
                      <h5>Adaptive equipment</h5>
                      <div className="grid-columns">
                        {allEquipementCheckboxOptions
                          .slice(0, visibleEquipementCheckboxes)
                          .map((option, index) => (
                            <label key={index} className="container">
                              {option}
                              <input
                                type="checkbox"
                                value={option}
                                checked={selectedEquipement.includes(option)}
                                onChange={handleCheckboxChange8}
                              />
                              <span className="checkmark"></span>
                            </label>
                          ))}
                      </div>
                    </div>
                  </>
                )}

                <div className="buttons-container">
                  {showMoreAccessibility && (
                    <button
                      className="show-more"
                      onClick={handleAccessibiltyShowMore}
                    >
                      Show More
                    </button>
                  )}

                  {!showMoreAccessibility && (
                    <button
                      className="show-less"
                      onClick={handleAccessibiltyShowLess}
                    >
                      Show Less
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="amenities">
              <h3>Host Languages</h3>
              <div className="grid-columns">
                {allLanguageCheckboxOptions
                  .slice(0, visibleLanguageCheckboxes)
                  .map((option, index) => (
                    <label key={index} className="container">
                      {option}
                      <input
                        type="checkbox"
                        value={option}
                        checked={selectedLanguage.includes(option)}
                        onChange={handleCheckboxChange15}
                      />
                      <span className="checkmark"></span>
                    </label>
                  ))}
              </div>
              <div className="buttons-container">
                {showMoreLanguages && (
                  <button
                    className="show-more"
                    onClick={handleLanguageShowMore}
                  >
                    Show More
                  </button>
                )}

                {!showMoreLanguages && (
                  <button
                    className="show-less"
                    onClick={handleLanguageShowLess}
                  >
                    Show Less
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          {/* <button className="apply" onClick={onClose}> */}
          <button className="apply" onClick={applyFilters}>
            Apply Filters
          </button>
          <button className="apply" onClick={onClose}>
            Close
          </button>
          {/* <button className="apply" onClick={applyFilters}> */}
          {/* <button onClick={handleApplyFilters}>Apply</button> */}
          {/* <button onClick={handleClearFilters}>Clear</button> */}
          {/* Apply
            </button> */}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default FilterModal;


//====== WORKING CODE ENDS ======//