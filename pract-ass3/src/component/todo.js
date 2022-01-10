import React, { useEffect, useState } from "react";
import todo from "../images/todo.png";

import "../App.css";
import { useCookies } from "react-cookie";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [isadd, setisAdd] = useState(false);
  const [error, setError] = useState("");
  const [listcookies, setlistCookie, removeCookie] = useCookies(["list"]);
//for add item
  const addItem = () => {
    if (!inputData) {
      setError("please enter a value");
    } else {
      setItems([...items, inputData]);
      setInputData("");
      setisAdd(false);
      setError("");
      cokkie([...items, inputData]);
    }
  };
  const cokkie = (value) => {
    let d = new Date();
    let date =
      d.getDate() +
      "/" +
      d.getMonth() +
      1 +
      "/" +
      d.getFullYear() +
      "@" +
      d.getHours() +
      ":" +
      d.getMinutes() +
      ":" +
      d.getSeconds();

    setlistCookie("list", value, { path: "/" });
    setlistCookie("date", `${d.getDate()}-${d.getMonth()}`);
    setlistCookie("lastupdated", date);
    console.log(d.getDate());
  };
  const deleteItem = (id) => {
    const updateditems = items.filter((ele, index) => {
      return index !== id;
    });
    setItems(updateditems);
    cokkie(updateditems);
  };
  useEffect(() => {
    let d = new Date();
    if (
      listcookies.date &&
      `${d.getDate()}-${d.getMonth()}` !== listcookies.date
    ) {
      removeCookie("list");
      removeCookie("lastupdated");
      removeCookie("date");
    }

    if (listcookies.list) setItems(listcookies.list);
  }, []);
  return (
    <>
      <figure>
        <img src={todo} alt="todosvg" />
      </figure>
      <div className="main-div">
        <div className="child-div">
          {error && <span>{error}</span>}
          {listcookies.lastupdated && (
            <h1>Last Updated on: {listcookies.lastupdated}!</h1>
          )}{" "}
          <br />
          {/* <span>{listcookies.lastupdated}</span> */}
          {/* <h4>Add Your List</h4> */}
          {!isadd && (
            <h1>
              add items
              <button>
                {" "}
                <i
                  className="fa fa-plus add-btn"
                  title="Add Item"
                  onClick={() => {
                    setisAdd(true);
                  }}
                ></i>
              </button>{" "}
            </h1>
          )}
          {isadd && (
            <div className="addItems">
              <input
                type="text"
                placeholder="add items"
                value={inputData}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addItem();
                  } else if (e.key == "Escape") {
                    setisAdd(false);
                  }
                }}
                onChange={(e) => {
                  setInputData(e.target.value);
                }}
              />
            </div>
          )}
          <div className="showItems">
            <ul>
              {items.map((elem, index) => {
                return (
                  <div className="eachitem" key={index}>
                    <h3>
                      <li>
                        {" "}
                        <h3 className="abc">
                          {elem}{" "}
                          <i
                            className="far fa-trash-alt add-btn"
                            title="Delete Item"
                            onClick={() => deleteItem(index)}
                          ></i>{" "}
                        </h3>
                      </li>
                    </h3>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
