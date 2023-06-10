import * as React from "react";

export const MenuIcon = (props: any) => {
  return (
    <div className="menu-icon">
      <input
        type="checkbox"
        id="menu-toggle"
        className="peer"
      />
      <div>Testing this</div>
      <label htmlFor="menu-toggle">
        <div className="icon-container">
          <div className="w-1/2"></div>
          <div className="w-full"></div>
          <div className="w-3/4"></div>
        </div>
      </label>
    </div>
  );
}