import React, { useState } from "react";
import { headerData } from "./headerData";
import "./styles.scss";


export default function App() {
    // state variable declaration
    const {
      title,
      menuDetails: { menuList, margin },
      fontColor,
      bgColor
    } = headerData;
    const [titlePosition, setTitlePosition] = useState(title.position);
  
    let titlePlacementOrder = 1,
      menuPlacementOrder = 2,
      flexDirection = "row";
    let menuItemsGroupA = [],
      menuItemsGroupB = [],
      groupAMenuPlacementOrder = 1,
      groupBMenuPlacementOrder = 2;
  
    // condition based value assignment
    if (titlePosition === "right") {
      titlePlacementOrder = 2;
      menuPlacementOrder = 1;
    } else if (titlePosition === "top") {
      flexDirection = "column";
    } else if (titlePosition === "bottom") {
      flexDirection = "column";
      titlePlacementOrder = 2;
      menuPlacementOrder = 1;
    } else if (titlePosition === "center") {
      titlePlacementOrder = 2;
      const midValue = Math.round(menuList.length / 2);
      menuItemsGroupA = menuList.slice(0, midValue);
      menuItemsGroupB = menuList.slice(midValue, menuList.length);
    }
    // rendering menu items
    const renderMenuItems = (menuItems, menuPlacementOrder) => {
      return (
        <div
          className="menu-container"
          style={{ order: menuPlacementOrder, margin: margin }}
        >
          {menuItems &&
            menuItems.map((menuItem, index) => {
              return (
                <div
                  key={`m-${menuItem.name.toLowerCase()}`}
                  className={`m-${menuItem.name.toLowerCase()} menu-item`}
                  style={{
                    order: menuItem.order
                  }}
                >
                  {menuItem?.name || `${menuItem}_${index}`}
                </div>
              );
            })}
        </div>
      );
    };
    // rendering radio button for position selection
    const renderRadioButton = () => {
      const positions = ["left", "right", "top", "bottom", "center"];
      return positions.map((pos) => {
        return (
          <div key={`position_${pos}`} className="radio-btn">
            <input
              type="radio"
              id="HeaderPosition"
              name="HeaderPosition"
              value={pos}
              checked={pos === titlePosition ? "checked" : ""}
              onChange={(e) => handleClick(e)}
            />
            <label className="radio-label" htmlFor="HeaderPosition">
              {pos}
            </label>
          </div>
        );
      });
    };
    // change position event
    const handleClick = (event) => {
      setTitlePosition(event.target.value);
    };
    // rendering components
    return (
      <>
        <div
          className="header-container"
          style={{ flexDirection, backgroundColor: bgColor }}
        >
          <div
            className="title-container"
            style={{
              order: titlePlacementOrder,
              backgroundColor: title.bgColor || "transparent",
              color: title.fontColor || fontColor,
              margin: title.margin
            }}
          >
            {title?.name || "Company Name"}
          </div>
          {titlePosition === "center" ? (
            <>
              {renderMenuItems(menuItemsGroupA, groupAMenuPlacementOrder)}
              {renderMenuItems(menuItemsGroupB, groupBMenuPlacementOrder)}
            </>
          ) : (
            <>{renderMenuItems(menuList, menuPlacementOrder)}</>
          )}
        </div>
        <div className="content-container">{renderRadioButton()}</div>
      </>
    );
  }
  