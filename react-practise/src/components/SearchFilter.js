import React, { useState } from "react";

const SearchFilter = () => {
  const list = ["Apple", "Banana", "Mango", "Watermelon"];
  const [filtervalue, setFiltervalue] = useState(list);
  const inputHandler = (event) => {
    if (event.target.value == "") {
      setFiltervalue(list);
      return;
    }
    const filterItems = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFiltervalue(filterItems);
  };
  return (
    <center>
      <h1> Hello form the search filter</h1>
      Search :<input type="text" onChange={inputHandler} />
      {filtervalue &&
        filtervalue.map((item) => {
          return <h1>{item}</h1>;
        })}
    </center>
  );
};

export default SearchFilter;
