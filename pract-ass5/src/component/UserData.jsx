import React from "react";
import * as Icon from "react-feather";
import Avatar from "@mui/material/Avatar";
import avtar1 from "../images/avtar1.jpg";
import avtar2 from "../images/avtar2.jpg";
import avtar3 from "../images/avtar3.jpg";
import avtar4 from "../images/avtar4.jpg";
import avtar5 from "../images/avtar5.jpg";
import avtar6 from "../images/avtar6.jpg";
import down from "../images/down.svg";

const UserData = [
  {
    imgavtar: <Avatar alt="Remy Sharp" src={avtar1} />,
    name: "peter",
    email: "peter@gmail.com",
    status: (
      <div class="dropdown">
        <p class="dropbtn">
          active <img src={down} />
        </p>
        <div class="dropdown-content">
          <a href="#"> inactive</a>
        </div>
      </div>
    ),
    Access: (
      <div class="dropdown">
        <p class="dropbtn">owner</p>
      </div>
    ),
    action: <Icon.Lock />,
    reviewd: 450,
    monthly: 5000,
    plan: "Standard",
  },
  {
    imgavtar: <Avatar alt="Remy Sharp" src={avtar2} />,
    name: "smit",
    email: "smit@gmail.com",
    status: (
      <div class="dropdown">
        <p class="dropbtn">
          inactive <img src={down} />
        </p>
        <div class="dropdown-content">
          <a href="#"> active</a>
        </div>
      </div>
    ),
    Access: (
      <div class="dropdown">
        <p class="dropbtn">
          Manager <img src={down} className="down" />
        </p>
        <div class="dropdown-content">
          <a href="#"> Read</a>
          <a href="#"> inactive</a>{" "}
        </div>
      </div>
    ),
    action: <Icon.Trash2 />,
    reviewd: 4500,
    monthly: 5000,
    plan: "Unstandard",
  },
  {
    imgavtar: <Avatar alt="Remy Sharp" src={avtar3} />,
    name: "mitul",
    email: "mitul@gmail.com",
    status: (
      <div class="dropdown">
        <p class="dropbtn">
          active <img src={down} className="down" />
        </p>
        <div class="dropdown-content">
          <a href="#"> inactive</a>
        </div>
      </div>
    ),
    Access: (
      <div class="dropdown">
        <p class="dropbtn">
          Read <img src={down} />
        </p>
        <div class="dropdown-content">
          <a href="#"> Manager</a>
          <a href="#"> inactive</a>{" "}
        </div>
      </div>
    ),
    action: <Icon.Trash2 />,
    reviewd: 1000,
    monthly: 5000,
    plan: "Standard",
  },
  {
    imgavtar: <Avatar alt="Remy Sharp" src={avtar4} />,
    name: "peter",
    email: "peter@gmail.com",
    status: (
      <div class="dropdown">
        <p class="dropbtn">
          active <img src={down} className="down" />
        </p>
        <div class="dropdown-content">
          <a href="#"> inactive</a>
        </div>
      </div>
    ),
    Access: (
      <div class="dropdown">
        <p class="dropbtn">
          owner <img src={down} />
        </p>
        <div class="dropdown-content">
          <a href="#"> Manager</a>
          <a href="#"> Read</a>
          <a href="#"> inactive</a>{" "}
        </div>
      </div>
    ),
    action: <Icon.Trash2 />,
    reviewd: 4950,
    monthly: 5000,
    plan: "Unstandard",
  },
  {
    imgavtar: <Avatar alt="Remy Sharp" src={avtar5} />,
    name: "jeet",
    email: "jeet@gmail.com",
    status: (
      <div class="dropdown">
        <p class="dropbtn">
          active <img src={down} className="down" />
        </p>
        <div class="dropdown-content">
          <a href="#"> inactive</a>
        </div>
      </div>
    ),
    Access: (
      <div class="dropdown">
        <p class="dropbtn">
          owner <img src={down} />
        </p>
        <div class="dropdown-content">
          <a href="#"> Manager</a>
          <a href="#"> Read</a>
          <a href="#"> inactive</a>{" "}
        </div>
      </div>
    ),
    action: <Icon.Trash2 />,
    reviewd: 750,
    monthly: 5000,
    plan: "Basic",
  },
  {
    imgavtar: <Avatar alt="Remy Sharp" src={avtar6} />,
    name: "adarsh",
    email: "adarsh@gmail.com",
    status: (
      <div class="dropdown">
        <p class="dropbtn">
          active <img src={down} className="down" />
        </p>
        <div class="dropdown-content">
          <a href="#"> inactive</a>
        </div>
      </div>
    ),
    Access: (
      <div class="dropdown">
        <p class="dropbtn">
          owner <img src={down} />
        </p>
        <div class="dropdown-content">
          <a href="#"> Manager</a>
          <a href="#"> Read</a>
          <a href="#"> inactive</a>{" "}
        </div>
      </div>
    ),
    action: <Icon.Trash2 />,
    reviewd: 3350,
    monthly: 5000,
    plan: "Standard",
  },
];
export default UserData;
