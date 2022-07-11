import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import FollowBar from '../FollowBar/FollowBar';
import MenuBar from "../MenuBar/MenuBar";
export function MainContainer({ children }) {
  return (
    <div>
      <MenuBar />
      <div>
        {/* <SearchBar /> */}
        <div>{children}</div>
      </div>
      {/* <FollowBar /> */}
    </div>
  );
}