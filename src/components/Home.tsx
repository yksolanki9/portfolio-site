import * as React from "react";
import { MenuIcon } from "./MenuIcon";
import { NavBar } from "./NavBar";

export const Home = (props: any) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div
      className={`pt-12 min-[1100px]:px-16 md:px-8 px-4 h-screen ${
        isMenuOpen ? "touch-none" : ""
      }`}
    >
      <div className="float-right mr-2 sm:hidden">
        <MenuIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <div className="hidden sm:block">
        <NavBar isMobileView={false} setIsMenuOpen={setIsMenuOpen} />
      </div>
      {isMenuOpen && (
        <NavBar isMobileView={true} setIsMenuOpen={setIsMenuOpen} />
      )}
      {!isMenuOpen && (
        <div className="relative top-1/3 lg:mx-12 mx-4">
          <h3 className="min-[1000px]:text-8xl min-[700px]:text-7xl text-5xl font-medium">
            Hello,
          </h3>
          <h1 className="min-[1000px]:text-8xl min-[700px]:text-7xl text-5xl leading-tight pt-4 font-bold">
            I'm {props.name}
            <span>.</span>
          </h1>
          <h5 className="sm:text-2xl text-md font-extralight sm:pt-4 pt-10 lowercase">
            {props.title}
          </h5>
        </div>
      )}
    </div>
  );
};
