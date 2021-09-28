import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    /*Spread operator= "..." help to get main data directly*/ Menu.map(
      (curElem) => {
        return curElem.category;
      }
    )
  ),
  "all",
];
// console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuUpdatedList, setmenuUpdatedList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "all") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category ? curElem : "";
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuUpdatedList={menuUpdatedList} />
      {/* Using props */}
      <MenuCard
        menuData /*Attribute name */={menuData} /*Value of attribure */
      />
    </>
  );
};

export default Restaurant;
