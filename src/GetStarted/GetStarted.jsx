import React, { useState } from "react";
import style from "./GetStarted.module.css";
import Mask from '../assets/Mask.png';
// import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import StartProject from "../modals/createNft/StartProject";
// import NftGenerator from '../modals/generateNft'
import NftGenerate from '../layoutsNft/NftGenerate';
import plus from '../assets/asse/plus.png';
import album from '../assets/asse/album.png';
import search from '../assets/asse/search.png';
import template from '../assets/asse/template.png';
import AddLayer from "../Form/AddLayer/AddLayer";
// import NftGenerator from '../modals/generateNft';
// import NftGenerate from '../layoutsNft/NftGenerate';
// import NftGenerate from "../layoutsNft/NftGenerate";

const GetStarted = () => {

  // const [show, setShow] = useState(false);
  const [uploadImage, setUploadImage] = useState(false)
  const [startProject, setStartProject] = useState(false)
  // const [nftGenerate, setNftGenerate] = useState(false)
  // const [toggle, setToggle] = useState("1");
  // const [open, setOpen] = useState(false)
  // const navigate = useNavigate();

  const nftImages = [{
    id: 1,
    images: Mask
  },
  {
    id: 2,
    images: Mask
  },
  {
    id: 3,
    images: Mask
  }, {
    id: 4,
    images: Mask
  },
  {
    id: 5,
    images: Mask
  },
  {
    id: 6,
    images: Mask
  },
  {
    id: 7,
    images: Mask
  },
  {
    id: 8,
    images: Mask
  },

  ]
  // const nftImages2 = [
  // ]
  return (
    <div className={`container-fluid m-0 ${style.getStarted}`}>
      <AddLayer show={uploadImage} setShow={setUploadImage} />
      <StartProject show={startProject} setShow={setStartProject} />

      <Navbar />
      <div className={`row m-0 g-0 ${style.customCols} `}>
        <div className={`${style.sideBar}`}>
          <div className={style.sideButtom}>
            <div className={style.ActiveButton}>
              <img src={template} alt="template" />
              <p>Custom NFT</p>
            </div>
            <div className={style.customButton}>
              <img src={album} alt="album" />
              <p>Image</p>
            </div>
          </div>
        </div>
        <div className={`${style.bottomBar}`}>

          <div className={style.inputContainer}>
            <img src={search} alt="search" className="mx-3" />
            <input type="Search" className={`form-control ${style.inputField} mx-3`} placeholder="Search" style={{ width: "83%" }} />
          </div>
          <h6 className={style.heading}>Collections</h6>
          <div className={style.bottomRow}>
            <ul className={`${style.leftSection} `}>
              <div onClick={() => setStartProject(true)}>
                <li>
                  <span className={style.customLayer}>
                    <img src={plus} className='' alt="design" />
                    <span className={style.addPhoto}>Create your Own NFT</span>
                  </span>
                </li>
              </div>
              {nftImages.map((content, i) => (
                <li key={i}>
                  <span className={style.imageWrapper}>
                    <a href='/'>
                      <img src={content.images} className={style.mainImg} alt="content" />
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.rightBar}>
          <NftGenerate />
        </div>
      </div>

    </div>

  );
};

export default GetStarted;
