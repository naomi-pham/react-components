import React from "react";
import { Cards, Count, Favorites, Nav } from "../components/neumorphism";

const Neumorphism = () => {
  return (
    <div className="py-16">
      <div className="space-y-[30px] px-5">
        <Nav />
        <Count />
      </div>

      <section className="mt-7 space-y-10 border-t border-light-neutral-600/50 py-[30px] px-5">
        <Cards />
        <Favorites />
      </section>
    </div>
  );
};

export default Neumorphism;
