import React, { useState } from "react";
import "../../asset/header.css";
import { FaBars } from "react-icons/fa";

export default function HeadMe() {
  const [disBar, setDisbar] = useState(false);
  return (
    <div className="holdAllHead">
      <div>
        <a href="http://" className="comName">
          MedonCall
        </a>
        <div className="holdSmallCircle">
          <div className="smallCircle"></div>
          <div className="smallCircle"></div>
          <div className="smallCircle"></div>
        </div>
      </div>
      <div>
        <ul className="holdNav">
          <li className="list listDrop">
            <a href="http://" className="holdRowG">
              features
              <div className="rowG">
                <span>{">"}</span>
              </div>
            </a>
            <ul className="subChild">
              <li>
                <a href="http://">Book Consultation</a>
              </li>
              <li>
                <a href="http://">Drug Store</a>
              </li>
            </ul>
          </li>
          <li className="list">
            <a href="http://">FAQ</a>
          </li>
          <li className="list">
            <a href="http://">Contact</a>
          </li>
          <li className="lists">
            <a href="http://" className="getNow">
              Get it Now
            </a>
          </li>
        </ul>
      </div>
      <div className="holdBar">
        <FaBars
          className="barMe"
          onClick={() => {
            setDisbar(!disBar);
            let holdRowG = document.getElementById("holdNav3");
            if (disBar) {
              holdRowG.classList.add("disStlye2");
            } else {
              holdRowG.classList.remove("disStlye2");
            }
          }}
        />
        <ul className="holdNav2 disStlye" id="holdNav3">
          <li className="list listDrop">
            <a href="http://" className="holdRowG">
              features
              <div className="rowG">
                <span>{">"}</span>
              </div>
            </a>
            <ul className="subChild">
              <li>
                <a href="http://">Book Consultation</a>
              </li>
              <li>
                <a href="http://">Drug Store</a>
              </li>
            </ul>
          </li>
          <li className="list">
            <a href="http://">FAQ</a>
          </li>
          <li className="list">
            <a href="http://">Contact</a>
          </li>
          <li className="lists">
            <a href="http://" className="getNow">
              Get it Now
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
