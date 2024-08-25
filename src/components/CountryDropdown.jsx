import React from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";

const CountryDropdown = ({ setCountryCode, setSelectedCountry }) => {
  const setCountry = (code, country, flag) => {
    setSelectedCountry({ name: country, flag });
    setCountryCode(code);
  };

  return (
    <ul className="dropdown-menu " style={{ maxHeight: '450px', overflowY: 'auto' }}>
      {[
        { code: "ar", name: "Argentina", flag: "fi fi-ar" },
        { code: "au", name: "Australia", flag: "fi fi-au" },
        { code: "at", name: "Austria", flag: "fi fi-at" },
        { code: "be", name: "Belgium", flag: "fi fi-be" },
        { code: "br", name: "Brazil", flag: "fi fi-br" },
        { code: "bg", name: "Bulgaria", flag: "fi fi-bg" },
        { code: "ca", name: "Canada", flag: "fi fi-ca" },
        { code: "cn", name: "China", flag: "fi fi-cn" },
        { code: "co", name: "Colombia", flag: "fi fi-co" },
        { code: "cu", name: "Cuba", flag: "fi fi-cu" },
        { code: "cz", name: "Czech Republic", flag: "fi fi-cz" },
        { code: "eg", name: "Egypt", flag: "fi fi-eg" },
        { code: "fr", name: "France", flag: "fi fi-fr" },
        { code: "de", name: "Germany", flag: "fi fi-de" },
        { code: "gr", name: "Greece", flag: "fi fi-gr" },
        { code: "hk", name: "Hong Kong", flag: "fi fi-hk" },
        { code: "hu", name: "Hungary", flag: "fi fi-hu" },
        { code: "in", name: "India", flag: "fi fi-in" },
        { code: "id", name: "Indonesia", flag: "fi fi-id" },
        { code: "ie", name: "Ireland", flag: "fi fi-ie" },
        { code: "il", name: "Israel", flag: "fi fi-il" },
        { code: "it", name: "Italy", flag: "fi fi-it" },
        { code: "jp", name: "Japan", flag: "fi fi-jp" },
        { code: "lv", name: "Latvia", flag: "fi fi-lv" },
        { code: "lt", name: "Lithuania", flag: "fi fi-lt" },
        { code: "my", name: "Malaysia", flag: "fi fi-my" },
        { code: "mx", name: "Mexico", flag: "fi fi-mx" },
        { code: "ma", name: "Morocco", flag: "fi fi-ma" },
        { code: "nl", name: "Netherlands", flag: "fi fi-nl" },
        { code: "nz", name: "New Zealand", flag: "fi fi-nz" },
        { code: "ng", name: "Nigeria", flag: "fi fi-ng" },
        { code: "no", name: "Norway", flag: "fi fi-no" },
        { code: "ph", name: "Philippines", flag: "fi fi-ph" },
        { code: "pl", name: "Poland", flag: "fi fi-pl" },
        { code: "pt", name: "Portugal", flag: "fi fi-pt" },
        { code: "ro", name: "Romania", flag: "fi fi-ro" },
        { code: "ru", name: "Russia", flag: "fi fi-ru" },
        { code: "sa", name: "Saudi Arabia", flag: "fi fi-sa" },
        { code: "rs", name: "Serbia", flag: "fi fi-rs" },
        { code: "sg", name: "Singapore", flag: "fi fi-sg" },
        { code: "sk", name: "Slovakia", flag: "fi fi-sk" },
        { code: "si", name: "Slovenia", flag: "fi fi-si" },
        { code: "za", name: "South Africa", flag: "fi fi-za" },
        { code: "kr", name: "South Korea", flag: "fi fi-kr" },
        { code: "se", name: "Sweden", flag: "fi fi-se" },
        { code: "ch", name: "Switzerland", flag: "fi fi-ch" },
        { code: "tw", name: "Taiwan", flag: "fi fi-tw" },
        { code: "th", name: "Thailand", flag: "fi fi-th" },
        { code: "tr", name: "Turkey", flag: "fi fi-tr" },
        { code: "ae", name: "United Arab Emirates", flag: "fi fi-ae" },
        { code: "ua", name: "Ukraine", flag: "fi fi-ua" },
        { code: "gb", name: "United Kingdom", flag: "fi fi-gb" },
        { code: "us", name: "United States", flag: "fi fi-us" },
        { code: "ve", name: "Venezuela", flag: "fi fi-ve" }
       ].map((country) => (
        <li key={country.code}>
          <a className="dropdown-item " href="#"
             onClick={() => setCountry(country.code, country.name, country.flag)}
          >
            <span className={country.flag}> </span> {country.name}

          </a>
        </li>
      ))
    }
    </ul>
  );
};

export default CountryDropdown;