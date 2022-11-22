import React from "react";
import Footer from "../../Share/Footer";
import Banner from "../Banner";
import Card from "../Card";
import CardPricing from "../CardPricing";
import Contact from "../Contact";
import SliderSection from "../SliderSection";
import About from "./About";
import CardEffect from "./CardEffect";
import CardSection from "./CardSection";
import CountSection from "./CountSection";
import ImgSlider from "./ImgSlider";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Contact></Contact>
      <Card></Card>
      <CardPricing></CardPricing>
      <CountSection></CountSection>
      <CardEffect></CardEffect>
      <CardSection></CardSection>
      <SliderSection></SliderSection>
      <ImgSlider></ImgSlider>
      <Footer></Footer>
    </div>
  );
};

export default Home;
