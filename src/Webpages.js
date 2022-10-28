import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from "react-router-dom";

// import { EditingPage } from "./EditingPage/EditingPage";
// import { Error } from "./ErrorPage/Error.js";
// import { Fluidity } from "./LoadingPage/Fluidity";
import Homepage from './homepage/Homepage'
import './style/styles.css'
import  GetStarted  from './GetStarted/GetStarted';
import Layout from '../src/nftGeneratorPages/Layout';
import Collections from '../src/nftGeneratorPages/Collections';
import NftGenerate from "./layoutsNft/NftGenerate";
// import {Page} from '../src/EditingPage/Page'
// import { EditingPage } from "./EditingPage/EditingPage";

export const Webpages = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/getStarted/*" element={<GetStarted />} />
        {/* <Route path="/editing" element={<EditingPage />} /> */}
        {/* <Route path="/loading" element={<Fluidity />} /> */}
        {/* <Route path="/error" element={<Error />} /> */}
        <Route path='/generate' element={<Layout />} />
        <Route path='/collections' element={<Collections />} />
        <Route path="/nftGenerate" element={<NftGenerate />} />        
      </Routes>
    </Router>
  );
};
export default Webpages;
