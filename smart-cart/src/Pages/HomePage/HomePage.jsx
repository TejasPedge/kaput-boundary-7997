import React from "react";
import { BodyFour } from "./BodyFour";
import { BodyThree } from "./BodyThree";
import Bodytwo from "./Bodytwo";
import Carousel from "./Carousel";
import Footer from "./Footer";
import { HotDeals } from "./HotDeals";
import { UpperNavbar } from "./UpperNavbar";

export const HomePage = () => {
  return (
    <div>
      {/* <UpperNavbar /> */}
      <Carousel />
      <HotDeals />
      <Bodytwo />
      <BodyThree />
      <BodyFour />
      <Footer />
    </div>
  );
};
