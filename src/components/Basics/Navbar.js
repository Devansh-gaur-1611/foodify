import React from "react";

const Navbar = ({ filterItem, menuUpdatedList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuUpdatedList.map((currentItem, index, arr) => {
            return (
              <>
                <button
                  className="btn-group__item"
                  onClick={() => filterItem(currentItem)}
                >
                  {currentItem}
                </button>
              </>
            );
          })}

          {/* <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            All
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
