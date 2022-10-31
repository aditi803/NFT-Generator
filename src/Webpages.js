import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Homepage from "./homepage/Homepage";
import "./style/styles.css";
import GetStarted from "./GetStarted/GetStarted";
import Layout from "../src/nftGeneratorPages/Layout";
import Collections from "../src/nftGeneratorPages/Collections";
import NftGenerate from "./layoutsNft/NftGenerate";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LayerProvider } from "./context/LayerContext";

export const Webpages = () => {
  return (
    <LayerProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/getStarted/*" element={<GetStarted />} />
          <Route path="/generate" element={<Layout />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/nftGenerate" element={<NftGenerate />} />
        </Routes>
        <ToastContainer />
      </Router>
    </LayerProvider>
  );
};
export default Webpages;
