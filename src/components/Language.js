import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import { changeLang } from "../actions/changeLang";


function Langauge() {
  const [dropdownTitle, setDropdownTitle] = useState({
    lang: "EN",
    flag: "gb-eng"
  });
  console.log(dropdownTitle);
  const dispatch = useDispatch();

  return (
    <>
      <span className={`fi fi-${dropdownTitle.flag}`}></span>
      <NavDropdown
        id="nav-dropdown-dark-example"
        title={dropdownTitle.lang}
        menuVariant="dark"
        onSelect={(eventKey) => dispatch(changeLang(eventKey))}
      >
        <NavDropdown.Item eventKey="en" onClick={() => setDropdownTitle({ lang: "EN", flag: "gb-eng" })}><span className="fi fi-gb-eng"></span> English</NavDropdown.Item>
        <NavDropdown.Item eventKey="zh" onClick={() => setDropdownTitle({ lang: "CN", flag: "cn" })}><span className="fi fi-cn"></span> Chinese</NavDropdown.Item>
        <NavDropdown.Item eventKey="ja" onClick={() => setDropdownTitle({ lang: "JP", flag: "jp" })}><span className="fi fi-jp"></span> Japanse</NavDropdown.Item>
      </NavDropdown>
    </>
  )
}

export default Langauge;