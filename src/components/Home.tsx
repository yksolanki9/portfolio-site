import * as React from "react";
import { MenuIcon } from "./MenuIcon";
import { NavBar } from "./NavBar";

export const Home = (props: any) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="pt-12 min-[1100px]:px-16 md:px-8 px-4 h-screen">
      <div className="hidden sm:block">
        <NavBar isMobileView={false} />
      </div>
      {isMenuOpen && <NavBar isMobileView={true} />}
      <div className="absolute right-5 sm:hidden">
        <MenuIcon setIsMenuOpen={setIsMenuOpen} />
      </div>
      {!isMenuOpen && (
        <div className="relative top-1/3 lg:mx-12 mx-4">
          <h3 className="min-[1000px]:text-8xl min-[700px]:text-7xl min-[500px]:text-5xl text-3xl font-bold">
            Hello,
          </h3>
          <h1 className="min-[1000px]:text-8xl min-[700px]:text-7xl min-[500px]:text-5xl text-3xl pt-4 font-bold">
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
