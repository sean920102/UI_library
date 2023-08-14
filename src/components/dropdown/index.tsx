import React, { useState,useRef,useEffect } from "react";
import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Dropdown: React.FC = () => {
  const optionsArr = [
    "India",
    "United States",
    "United Kingdom",
    "japan",
    "Canada",
    "Germany",
  ];

  const [openSelect, setOpenSelect] = useState(false);
  const [value, setValue] = useState("");

  const leagueInput:any = useRef();

  function selectValue(e) {
    setValue(e.target.outerText);
    setOpenSelect(false);
    leagueInput.current.value = e.target.outerText;
  }
  useEffect(()=>{
    console.log(value)
  },[value])

  return (
    <div className="app">
      <div className="selectOption">
        <input
          onClick={()=>{setOpenSelect(true);}}
          onBlur={()=>{setOpenSelect(false);}}
          ref={leagueInput}
          id = "league"
          type="text"
          placeholder="Select Your Country"
          readOnly
        />
        <span className={openSelect ? "icon action" : "icon"}>
          <FontAwesomeIcon icon={faAngleDown} />
        </span>

        <div className={openSelect ? "options active":"options"}>
          {optionsArr.map((item, index) => {
            return (
              <li onClick={selectValue} key={index}>
                {item}
              </li>
            )
          })} 
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
