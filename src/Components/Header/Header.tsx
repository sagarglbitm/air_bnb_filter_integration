import React, { useState } from "react";
import air from "../Header/Image/air.jpeg";
import world from "../Header/Image/world.jpeg";
import profile from "../Header/Image/profile.jpeg";

// import search from '../Navbar/images/search.png';

// import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Header/Header.scss";
import search from "../Header/Image/search.jpeg";
import europe from "../Header/Image/europe.jpeg";
import productJson from "../../card-data.json";
import { format } from "date-fns";
import App from "../../App";
// import Cards from "../Cards/Cards";
// import Cards from '../Cards/cards';
type Card = {
  imgSrc: string[];
  title: string;
  rating: number;
  desc: string;
  checkInDate: string;
  checkOutDate: string;
  price: number;
  location: string;
  guests: {
    adults: number;
    children: number;
    infants: number;
    pets: number;
  };
};
interface AnywhereProps {
  setFilterAnyState: any;
}

const Nav: React.FC<AnywhereProps> = ({ setFilterAnyState }: AnywhereProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnywhereOpen, setIsAnywhereOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isOnlineExperienceOpen, setIsOnlineExperienceOpen] = useState(false);
  const [isStaysOpen, setIsStaysOpen] = useState(false);
  const [isWhereClicked, setIsWhereClicked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<any | null>(null);
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [isCheckInCalendarOpen, setIsCheckInCalendarOpen] = useState(false);
  const [isCheckOutCalendarOpen, setIsCheckOutCalendarOpen] = useState(false);
  const [isMapCardOpen, setIsMapCardOpen] = useState(false);
  const [isWhoCardOpen, setIsWhoCardOpen] = useState(false);
  const [filteredCards, setFilteredCards] = useState([]);
  const [countAdults, setCountAdults] = useState(0);
  const [countChildren, setCountChildren] = useState(0);
  const [countInfants, setCountInfants] = useState(0);
  const [countPets, setCountPets] = useState(0);

  const incrementAdults = () => {
    setCountAdults(countAdults + 1);
  };

  const decrementAdults = () => {
    if (countAdults > 0) {
      setCountAdults(countAdults - 1);
    }
  };
  const incrementChildren = () => {
    setCountChildren(countChildren + 1);
  };

  const decrementChildren = () => {
    if (countChildren > 0) {
      setCountChildren(countChildren - 1);
    }
  };
  const incrementInfants = () => {
    setCountInfants(countInfants + 1);
  };

  const decrementInfants = () => {
    if (countInfants > 0) {
      setCountInfants(countInfants - 1);
    }
  };

  const incrementPets = () => {
    setCountPets(countPets + 1);
  };

  const decrementPets = () => {
    if (countPets > 0) {
      setCountPets(countPets - 1);
    }
  };

  const handleCountryClick = (country: string) => {
    setSelectedCountry(country);
    setIsMapCardOpen(false)
  };

  const closeDatePicker = ()=> {
    setIsCheckInCalendarOpen(false);
    setIsCheckOutCalendarOpen(false);
  }

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);

    if (buttonName === "experiences") {
      setIsExperienceOpen(!isExperienceOpen);
    }

    if (buttonName === "online-experiences") {
      setIsOnlineExperienceOpen(!isOnlineExperienceOpen);
    }

    if (buttonName === "stays") {
      setIsStaysOpen(!isStaysOpen);
    }

    if (buttonName === "anywhere") {
      setIsWhereClicked(!isWhereClicked);
      setIsMapCardOpen(true);
      setIsCheckInCalendarOpen(false);
      setIsCheckOutCalendarOpen(false);
      setIsWhoCardOpen(false);
    }
    if (buttonName === "checkIn") {
      setIsCheckInCalendarOpen(true);
      setIsMapCardOpen(false);
      setIsCheckOutCalendarOpen(false);
      setIsWhoCardOpen(false);
      
    }
    if (buttonName === "checkOut") {
      setIsCheckInCalendarOpen(false);
      setIsMapCardOpen(false);
      setIsCheckOutCalendarOpen(true);
      setIsWhoCardOpen(false);
     
    }
    if (buttonName === "who") {
      setIsCheckInCalendarOpen(false);
      setIsMapCardOpen(false);
      setIsCheckOutCalendarOpen(false);
      setIsWhoCardOpen(true);
    }
  };
  // console.log("pets",countPets)
  const handleSearchButtonClick = () => {
    const formattedCheckInDate = checkInDate
      ? format(checkInDate, "yyyy-MM-dd")
      : "";
    const formattedCheckOutDate = checkOutDate
      ? format(checkOutDate, "yyyy-MM-dd")
      : "";
    console.log("checkin", formattedCheckInDate);
    console.log("checkoug", formattedCheckOutDate);
    console.log("adults", countAdults);
    console.log("children", countChildren);
    console.log("infants", countInfants);
    console.log("pets", countPets);

    const filteredData = productJson.filter((item) => {
      if (
        selectedCountry &&
        checkInDate &&
        checkOutDate &&
        countAdults &&
        countChildren &&
        countInfants &&
        countPets
      ) {
        return (
          item.location === selectedCountry &&
          item.checkInDate === formattedCheckInDate &&
          item.checkOutDate === formattedCheckOutDate &&
          item.guests.adults === countAdults &&
          item.guests.children === countChildren &&
          item.guests.infants === countInfants &&
          item.guests.pets === countPets
        );
      } else if (
        selectedCountry &&
        checkInDate &&
        countAdults &&
        countChildren &&
        countInfants &&
        countPets
      ) {
        return (
          item.location === selectedCountry &&
          item.checkInDate === formattedCheckInDate &&
          item.guests.adults === countAdults &&
          item.guests.children === countChildren &&
          item.guests.infants === countInfants &&
          item.guests.pets === countPets
        );
      } else if (selectedCountry && checkInDate && checkOutDate) {
        return (
          item.location === selectedCountry &&
          item.checkInDate === formattedCheckInDate &&
          item.checkOutDate === formattedCheckOutDate
        );
      } else if (
        selectedCountry &&
        checkOutDate &&
        countAdults &&
        countChildren &&
        countInfants &&
        countPets
      ) {
        return (
          item.location === selectedCountry &&
          item.checkOutDate === formattedCheckOutDate &&
          item.guests.adults === countAdults &&
          item.guests.children === countChildren &&
          item.guests.infants === countInfants &&
          item.guests.pets === countPets
        );
      } else if (
        checkInDate &&
        checkOutDate &&
        countAdults &&
        countChildren &&
        countInfants &&
        countPets
      ) {
        return (
          item.checkInDate === formattedCheckInDate &&
          item.checkOutDate === formattedCheckOutDate &&
          item.guests.adults === countAdults &&
          item.guests.children === countChildren &&
          item.guests.infants === countInfants &&
          item.guests.pets === countPets
        );
      } else if (selectedCountry) {
        return item.location === selectedCountry;
      } else if (checkInDate) {
        return item.checkInDate === formattedCheckInDate;
      } else if (checkOutDate) {
        return item.checkOutDate === formattedCheckOutDate;
      } else if (countAdults) {
        return item.guests.adults === countAdults;
      } else if (countChildren) {
        return item.guests.children === countChildren;
      } else if (countInfants) {
        return item.guests.infants === countInfants;
      } else if (countPets) {
        return item.guests.pets === countPets;
      }

      return false;
    });

    // setFilteredCards(filteredData);
    console.log(filteredData);
    setFilterAnyState(filteredData);
  };

  const toggleLoginCard = () => {
    setIsOpen(!isOpen);
  };

  const anywhere = () => {
    setIsAnywhereOpen((prevIsAnywhereOpen) => !prevIsAnywhereOpen);
  };

  return (
    <div className="nav">
      <div className="nav-main">
        <div className="nav-img">
          <img src={air} alt="My Image" />
        </div>

        <div className="nav-last">
          <div>
            <button className="round-button-left">Airbnb your home</button>
          </div>
          <div>
            <button className="round-button-middle">
              <img src={world} className="world" alt="My Image" />
            </button>
          </div>
          <div>
            <button className="round-button-last" onClick={toggleLoginCard}>
              <img src={profile} className="profile" alt="My Image" />
            </button>
          </div>
        </div>
      </div>
      {isAnywhereOpen ? (
        <div>
          <div className="nav-middle-second">
            <div className="anywhere-expand-field">
              <button
                className={`stays-button ${
                  activeButton === "stays" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("stays")}
              >
                Stays
              </button>
              <button
                className={`experiences-button ${
                  activeButton === "experiences" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("experiences")}
              >
                Experiences
              </button>
              <button
                className={`online-experiences-button ${
                  activeButton === "online-experiences" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("online-experiences")}
              >
                Online Experiences
              </button>
            </div>

            <div className="nav-stays">
              <div className="nav-stays-middle-button">
                <div className="where-button-div">
                  <button
                    className={`stays-anywhere-button ${
                      activeButton === "anywhere" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("anywhere")}
                  >
                    where
                  </button>
                </div>
                <div className="checkIn-button-div">
                  <button
                    className={`stays-checkIn-button ${
                      activeButton === "checkIn" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("checkIn")}
                  >
                    check-in
                  </button>
                  {isCheckInCalendarOpen && (
                    <div className="calendar-card">
                      <DatePicker
                        selected={checkInDate}
                        onChange={(date: Date | null) => {setCheckInDate(date);
                        closeDatePicker();
                        }}
                        // dateFormat="dd/MM/yyyy"
                        dateFormat="yyyy-MM-dd"
                        inline
                      />
                    </div>
                  )}
                </div>
                <div className="checkOut-button-div">
                  <button
                    className={`stays-checkOut-button ${
                      activeButton === "checkOut" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("checkOut")}
                  >
                    check-out
                  </button>
                  {isCheckOutCalendarOpen && (
                    <div className="calendar-card">
                      <DatePicker
                        selected={checkOutDate}
                        onChange={(date: Date | null) => {setCheckOutDate(date);
                        closeDatePicker();
                        }}
                        dateFormat="yyyy-MM-dd"
                        inline
                      />
                    </div>
                  )}
                </div>
                <div className="who-button-div">
                  <button
                    className={`stays-guests-button ${
                      activeButton === "who" ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick("who")}
                  >
                    who
                  </button>
                  <div>
                    <button
                      className="stays-add-guests-button"
                      onClick={handleSearchButtonClick}
                    >
                      <img src={search} className="search" alt="My Image" />
                      <span style={{ color: "white", marginLeft: "-40px" }}>
                        search
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isMapCardOpen && (
            <div >
              <div className="map-card">
                <div className="map-card-first-img">
                  <button
                    className="map-card-first-button"
                    onClick={() => handleCountryClick("india")}
                  >
                    <img src={europe} className="first-europe" alt="My Image" />
                    <span className="europe-tag">India</span>
                  </button>
                </div>
                <div className="map-card-second-img">
                  <button
                    className="map-card-second-button"
                    onClick={() => handleCountryClick("europe")}
                  >
                    <img
                      src={europe}
                      className="second-europe"
                      alt="My Image"
                    />
                    <span className="second-europe-tag">Europe</span>
                  </button>
                </div>
              </div>

              {/* <div >
                <div className="map-card-third-img">
                  <button
                    className="map-card-third-button"
                    onClick={() => handleCountryClick("canada")}
                  >
                    <img src={europe} className="third-europe" alt="My Image" />
                    <span className="third-europe-tag">Canada</span>
                  </button>
                </div>
                <div className="map-card-fourth-img">
                  <button
                    className="map-card-fourth-button"
                    onClick={() => handleCountryClick("southeast-asia")}
                  >
                    <img
                      src={europe}
                      className="fourth-europe"
                      alt="My Image"
                    />
                    <span className="fourth-europe-tag">East-Asia</span>
                  </button>
                </div>
              </div> */}
            </div>
          )}

          {isWhoCardOpen && (
            <div className="who-card">
              <div className="who-card-details">
                <div className="adults">
                  <div className="adults-tag">
                    <p className="adults-para">Adults</p>
                    <p className="adult-ages">Ages 13 or above</p>
                  </div>
                  <div className="button-circle-adults">
                    <button
                      className="button-circle__decrement"
                      onClick={decrementAdults}
                    >
                      -
                    </button>
                    <div className="button-circle__value">
                      &nbsp;{countAdults}&nbsp;
                    </div>
                    <button
                      className="button-circle__increment"
                      onClick={incrementAdults}
                    >
                      +
                    </button>
                  </div>
                </div>
                <hr />
                <div className="children">
                  <div className="children-tag">
                    <p className="children-para">Children</p>
                    <p className="children-ages">Ages 2-12</p>
                  </div>
                  <div className="button-circle-children">
                    <button
                      className="button-circle__decrement"
                      onClick={decrementChildren}
                    >
                      -
                    </button>
                    <div className="button-circle__value">
                      &nbsp;{countChildren}&nbsp;
                    </div>
                    <button
                      className="button-circle__increment"
                      onClick={incrementChildren}
                    >
                      +
                    </button>
                  </div>
                </div>
                <hr />

                <div className="infants">
                  <div className="infants-tag">
                    <p className="infants-para">Infants</p>
                    <p className="infants-ages">Under 2</p>
                  </div>
                  <div className="button-circle-infants">
                    <button
                      className="button-circle__decrement"
                      onClick={decrementInfants}
                    >
                      -
                    </button>
                    <div className="button-circle__value">
                      &nbsp;{countInfants}&nbsp;
                    </div>
                    <button
                      className="button-circle__increment"
                      onClick={incrementInfants}
                    >
                      +
                    </button>
                  </div>
                </div>
                <hr />

                <div className="pets">
                  <div className="pets-tag">
                    <p className="pets-para">Pets</p>
                    <p className="pets-ages">Bringing a service animal?</p>
                  </div>
                  <div className="button-circle-pets">
                    <button
                      className="button-circle__decrement"
                      onClick={decrementPets}
                    >
                      -
                    </button>
                    <div className="button-circle__value">
                      &nbsp;{countPets}&nbsp;
                    </div>
                    <button
                      className="button-circle__increment"
                      onClick={incrementPets}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="nav-middle">
          <div className="nav-middle-button">
            <div className="anywhere-button-div">
              <button className="anywhere-button" onClick={anywhere}>
                Anywhere
              </button>
            </div>
            <div className="anyweek-button-div">
            
              <button className="any-week-button">
              <span  style={{ color: "grey" }}> |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                Any week
                <span style={{ color: "grey" }}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
              </button>
              
            </div>
            <div className="add-guests-button-div">
              <button className="add-guests-button">Add guests</button>
            </div>
            <div className="search-div">
              <button className="add-guests-button">
                <img src={search} className="search" alt="My Image" />
              </button>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="login-card">
          <div className="login-card-fields">
            <button className="signup-button">Signup</button>
            <button className="login-button">Login</button>
            <hr />
            <button className="air-button">Airbnb your home</button>
            <button className="help-button">Help Center</button>
          </div>
        </div>
      )}
      {/* <Cards datafilter={filteredCards} /> */}
    </div>
  );
};

export default Nav;
