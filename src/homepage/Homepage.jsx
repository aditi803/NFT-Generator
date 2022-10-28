import React from "react";
import Header from "../header/Header";
import HomePageCreate from "./createFirstSection/HomePageCreate";
import FlexibleNoCode from "./flexibleNoCodeSection/FlexibleNoCode";
import HowItWork from "./howItWorkSection/HowItWork";
import PopularCollection from "./popularCollectionSection/PopularCollection";
import CitizenDeveloper from "./citizenDeveloperSection/CitizenDeveloper";
import AccordianHome from "./faqSection/AccordianHome";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
    <Header/>
     <HomePageCreate /> 
      <FlexibleNoCode />
      <HowItWork />
      <PopularCollection />
      <CitizenDeveloper />
      <AccordianHome /> 
      <Footer/>
    </>
  );
};

export default Home;
