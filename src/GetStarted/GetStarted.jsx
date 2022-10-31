import React, { useState, useEffect } from "react";
import style from "./GetStarted.module.css";
import Mask from "../assets/Mask.png";
import Navbar from "./Navbar";
import StartProject from "../modals/createNft/StartProject";
import NftGenerate from "../layoutsNft/NftGenerate";
import plus from "../assets/asse/plus.png";
import album from "../assets/asse/album.png";
import search from "../assets/asse/search.png";
import template from "../assets/asse/template.png";
import AddLayer from "../Form/AddLayer/AddLayer";

import axios from "axios";
import useLoader from "../hooks/useLoader";
import Spinner from "react-bootstrap/Spinner";

// PROVIDER FOR PROVIDING LAYER DATA
import { LayerProvider, useLayer } from "../context/LayerContext";

const GetStarted = () => {

  const token = localStorage.getItem("token");
  const [uploadImage, setUploadImage] = useState(false);
  const [startProject, setStartProject] = useState(false);
  

  const [collectionData, setCollectionData] = useState();

  const { collectionId, setCollectionId, setLayerId, loader, setLoader } = useLayer();


  useEffect(() => {
    axios
      .get(`https://nftsgenerator.herokuapp.com/api/user/getCollections`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCollectionData(res.data.data.collections);
      })
      .catch((err) => {
        console.log(err);
      });
      //eslint-disable-next-line
  }, [collectionId]);

  const [layerData, setLayerData] = useState([]);

  const getLayer = (collectionId) => {
    setLoader(true)
    axios
      .get(
        `https://nftsgenerator.herokuapp.com/api/user/getLayers/${collectionId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setLayerData(res.data.data.layers, "Get layer data nft gen side");
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        setLoader(false)
      })
  };

  const handleCollectionHandler = (collectionId) => {
    setCollectionId(collectionId);
    getLayer(collectionId);
    setLayerId('')
  };

  return (
    <div
      className={`container-fluid m-0 ${style.getStarted} position-relative`}
    >
      <div>
        <AddLayer show={uploadImage} setShow={setUploadImage} />
        <StartProject
          show={startProject}
          setShow={setStartProject}
          getLayer={getLayer}
          setLayerData={setLayerData}
          layerData={layerData}
        />

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
              <input
                type="Search"
                className={`form-control ${style.inputField} mx-3`}
                placeholder="Search"
                style={{ width: "83%" }}
              />
            </div>
            <h6 className={style.heading}>Collections</h6>
            <div className={style.bottomRow}>
              <ul className={`${style.leftSection} `}>
                <div onClick={() => setStartProject(true)}>
                  <li>
                    <span className={style.customLayer}>
                      <img src={plus} className="" alt="design" />
                      <span className={style.addPhoto}>
                        Create your Own NFT
                      </span>
                    </span>
                  </li>
                </div>
                {collectionData?.map((content, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => handleCollectionHandler(content._id)}
                    >
                      <span className={style.imageWrapper}>
                        <a href="#">
                          <img
                            src={Mask}
                            className={`${style.mainImg} ${content._id === collectionId ? style.active : ''}`}
                            alt="content"
                          />
                        </a>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={style.rightBar}>
            <NftGenerate
              getLayer={getLayer}
              setLayerData={setLayerData}
              layerData={layerData}
            />
          </div>
        </div>
      </div>

      {loader && (
        <div className={style["spinner-outer"]}>
          <Spinner
            animation="border"
            className={style["cust-spinner"]}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
};

export default GetStarted;
