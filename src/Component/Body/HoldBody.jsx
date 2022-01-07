import React from "react";
import "../../asset/body.css";
import "../../asset/mobileResponsive.css";
import { GoDeviceCameraVideo } from "react-icons/go";
import { IoMdChatbubbles } from "react-icons/io";

export default function HoldBody(props) {
  return (
    <div>
      <div className="holdLayout1">
        <div className="zipIndex">
          <h1 className="head">{props.head}</h1>
          <div className="headtextMe">
            <p className="pTag">
              Get connected with highly experienced medical health care
              <br />
              practitioners at your own time. No waits, no commuting delays.
              <br />
              Professionals anywhere,anytime
              <br />
            </p>
            <span className="howEasy">How easy can that be!</span>
          </div>
          <div className="holdButtonTwo2">
            <div className="holdButton">
              <button className="butin">Download Now</button>
              <button className="butin">Explore features</button>
            </div>
          </div>
        </div>
      </div>
      <div className="holdIcon">
        <div>
          <div className="videoIcon">
            <GoDeviceCameraVideo />
          </div>
          <div className="cameraBorder"></div>
        </div>
        <div>
          <div className="chatIcon">
            <IoMdChatbubbles />
          </div>
          <div className="cameraBorder2"></div>
        </div>
      </div>
    </div>
  );
}
