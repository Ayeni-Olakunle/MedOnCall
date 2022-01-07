import React from "react";
import "../../asset/mobileResponsive.css";
import "../../asset/body.css";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function PickService(props) {
  return (
    <div className="firstPro1">
      <div className="firstPro">
        <div className="secondService">
          <h2 className="aPick">{props.titleMe}</h2>
          <FaLongArrowAltRight />
        </div>
        <div className="holdLenght">
          <div className="holdSmallLenght"></div>
        </div>
        <div>
          <p className="choose">{props.descript}</p>
        </div>
      </div>
    </div>
  );
}
