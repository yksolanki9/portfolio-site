import * as React from "react";
import { MenuIcon } from "./MenuIcon";
import { NavBar } from "./NavBar";
import { useInView } from "react-intersection-observer";

export const Home = (props: any) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { inView, ref } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`pt-12 min-[1100px]:px-16 md:px-8 px-4 h-screen ${
        isMenuOpen ? "touch-none" : ""
      }`}
    >
      <div
        className={`float-right mr-2 sm:hidden transition-opacity duration-500 delay-[2700ms] ease-in ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
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
          <h3
            className={`min-[1000px]:text-8xl min-[700px]:text-7xl text-5xl font-medium transition-opacity duration-1000 delay-300 ease-in ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          >
            Hello,
          </h3>
          <h1
            className={`min-[1000px]:text-8xl min-[700px]:text-7xl text-5xl leading-tight pt-4 font-bold transition-opacity duration-1000 delay-[1500ms] ease-in ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          >
            I'm {props.name}
            <span className="text-custom-cyan animate-color">.</span>
          </h1>
          <div className={`inline-block sm:text-2xl text-md font-extralight sm:mt-4 mt-10 lowercase transition-opacity delay-[2700ms] ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <h5 className="inline-block pr-[6px] overflow-hidden whitespace-nowrap border-r-[2px] border-custom-cyan animate-typing">
              {props.title}
            </h5>
          </div>
        </div>
      )}
    </div>
  );
};
