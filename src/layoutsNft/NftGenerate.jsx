import React, { useState, useEffect } from 'react';
import style from './NftGenerate.module.css';
import { AiOutlinePlus } from 'react-icons/ai';
import UploadImage from '../modals/UploadImage/UploadImage';
import backgroundImage from '../assets/0background.png';
import { Slider } from '@mui/material'
import plus from '../assets/asse/plus.png';
import setting from '../assets/asse/settings.png';
import { NftGenerator } from '../modals/generateNft';
import EditData from '../modals/EditData'
import AddLayer from '../Form/AddLayer/AddLayer';
import cross from '../assets/cross.png';
import axios from "axios"
import { responseApi } from '../Form/AddLayer/AddLayer';

import { useLayer } from '../context/LayerContext';


const NftGenerate = ({ getLayer, setLayerData, layerData }) => {
    // let responseMapp = []


    // Layer Id data from layer context
    const {layerId, setLayerId} = useLayer();


    useEffect(() => {
        // Fetching other layer images when LayerId changes
        if(layerId){
            getImages()
        }
    }, [layerId])


    const token = localStorage.getItem('token')
    // if (layerGetApi !== undefined) {
    //     responseMapp.push(layerGetApi)
    // }
    // console.log(layerGetApi[0].n," layer get api")

    // console.log(layerGetApi, "LAyer Get api data")

    const [show, setShow] = useState(false)
    // const [val, setVal] = useState([0,100])
    const [toggle, setToggle] = useState(false);
    const [layer, setLayer] = useState(false)
    const [edit, setEdit] = useState(false)

    const [uploadData, setUploadData] = useState([])
    const handleShow = () => {
        setToggle(true);
    }

    const [getImageData, setGetImageData] = useState([])

    const getImages = () => {
        // const layerId = localStorage.getItem('LayerId')
        axios.get(`https://nftsgenerator.herokuapp.com/api/user/getImages/${layerId}`, { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => {
                setGetImageData(res.data.data.Images)
                console.log(res.data.data.Images, "Image get data")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const submitHandler = (e, setUpload, handleClose, setLoader) => {
        e.preventDefault()
        let formData = new FormData(e.target);
        // console.log(formData, "Form Data images")
        // const layerId = localStorage.getItem('LayerId')
        axios.post(`https://nftsgenerator.herokuapp.com/api/user/uploadImages/${layerId}`, formData, { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => {
                // console.log(res, "Upload Image response horns side ")
                setUploadData(res)
                setUpload(false)
                getImages()
                handleClose()
                setLoader(false)
                // localStorage.removeItem('LayerId')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className={style.nftGenerate}>
            <UploadImage submitHandler={submitHandler} setShow={setShow} show={show} />
            <NftGenerator toggle={toggle} setToggle={setToggle} />
            <AddLayer getLayer={getLayer} show={layer} setShow={setLayer}/>
            <EditData show={edit} setShow={setEdit} />
            <div className='container p-0 h-100'>
                <div className='row p-0'>
                    <div className={style.bottom}>
                        <div className={style.displaySetting}>
                            <ul className={style.categoryList}>
                                {getImageData.map((layerImg, i) => (
                                    <>
                                        <li key={i}>
                                            <div className={style.hidenft}>
                                                <span className={style.layerImages}>
                                                    <img src={`https://nftsgenerator.herokuapp.com${layerImg.imageUrl}`} alt="plus" />
                                                </span>
                                            </div>
                                        </li>
                                    </>
                                ))}
                                <li>
                                    <div className={style.hidenft} onClick={() => { setShow(true) }}>
                                        <label className={style.nftCursor}>
                                            <span className={style.uploadImage}>
                                                <img src={plus} alt="plus" />
                                                <span className={style.photoNft} >
                                                    Upload Layer Image
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                            <div className={style.LayerSettingBottom}>
                                <div className={style.layerSetting}>
                                    <div className={style.saveDraft}>
                                        <img className={` mt-1 ${style.arrowImage}`} src={setting} alt="arrow" onClick={() => { setEdit(true) }} />
                                        <button className={` btn btn-primary ${style.generateBtn}`} type='button' onClick={() => handleShow()}>
                                            <span className={style.topBtn}>Generate NFT collection</span>
                                        </button>
                                    </div>
                                </div>
                                <div className={style.layerBottomSection}>
                                    <div className={style.setting}>
                                        <h2>Layer Settings</h2>
                                    </div>
                                    <div className={style.currentLayer}>
                                        <label className={style.labelLayer}>Layer Name</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                    <div className={style.raritySetting}>
                                        <h2>
                                            Rarity Settings
                                            <span title="reset">
                                                <a className={style.resetBtn}>
                                                    Reset
                                                </a>
                                            </span>
                                        </h2>
                                    </div>
                                    <hr className={style.bottomRight}></hr>
                                    <div className={style.raritySettingSet}>
                                        <img src={backgroundImage} alt="background-image" />
                                        <div style={{ width: "310px", marginRight: "30px" }}>
                                            <Slider
                                                size="small"
                                                defaultValue={70}
                                                max={200}
                                                aria-label="Small"
                                                className='mx-3'
                                            // onChange={updateVal}
                                            />
                                        </div>
                                        <button className="btn btn-light">25.00</button>
                                    </div>
                                    <hr className={style.bottomRight}></hr>
                                    <div className={style.raritySettingSet}>
                                        <img src={backgroundImage} alt="background-image" />
                                        <div style={{ width: "310px", marginRight: "30px" }}>
                                            <Slider
                                                size="small"
                                                defaultValue={70}
                                                max={200}
                                                aria-label="Small"
                                                className='mx-3'
                                            // onChange={updateVal}
                                            />
                                        </div>
                                        <button className="btn btn-light">25.00</button>
                                    </div>
                                    <hr className={style.bottomRight}></hr>
                                    <div className={style.raritySettingSet}>
                                        <img src={backgroundImage} alt="background-image" />
                                        <div style={{ width: "310px", marginRight: "30px" }}>
                                            <Slider
                                                size="small"
                                                defaultValue={70}
                                                max={200}
                                                aria-label="Small"
                                                className='mx-3'
                                            // onChange={updateVal}
                                            />
                                        </div>
                                        <button className="btn btn-light">25.00</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.nftFooter}>
                    <div className={style.image}>
                        <div className={style.outterDiv}>
                            <div className={style.inside}>
                                <div className={`col-8 ${style.nftColBottom}`}>
                                    <div className={style.parent}>
                                        <div className={style.rectangle1}>
                                            <div className={style.bitmap3}>
                                                <img src={backgroundImage} alt="" />
                                            </div>
                                        </div>
                                        <div className={style.preview}>
                                            <p>Preview</p>
                                        </div>
                                    </div>

                                    <div className={style.baby}>
                                        <div className={style.shape}>
                                            <img src="red_close.png" alt="" />
                                        </div>
                                        <div className={style.rectangle}>
                                            <div className={style.bitmap1}>
                                                <img src={backgroundImage} alt="" />
                                            </div>
                                        </div>
                                        <div className={style.preview} style={{ marginRight: "18px" }}>
                                            <p>Background</p>
                                        </div>
                                    </div>
                                    {layerData.map((layerData) => (
                                        <div className={style.baby} key={layerData._id} onClick={() => {
                                            setLayerId(layerData._id)
                                        }}>
                                            <div className={style.rectangle}>
                                                <div className={style.shape}>
                                                    <img src={cross} alt="" />
                                                </div>
                                                <div className={style.bitmap3}>
                                                    <img src={backgroundImage} alt="" />
                                                </div>
                                            </div>
                                            <div className={style.preview}>
                                                <p>{layerData.name}</p>
                                            </div>
                                        </div>
                                    ))}

                                    {/* <div className={style.baby}>
                                        <div className={style.rectangle}>
                                            <div className={style.shape}>
                                                <img src={cross} alt="" />
                                            </div>
                                            <div className={style.bitmap3}>
                                                <img src={backgroundImage} alt="" />
                                            </div>
                                        </div>
                                        <div className={style.preview}>
                                            <p>Horns</p>
                                        </div>
                                    </div> */}
                                    {/* <div className={style.baby}>
                                        <div className={style.rectangle}>
                                            <div className={style.shape}>
                                                <img src={cross} alt="" />
                                            </div>
                                            <div className={style.bitmap3}>
                                                <img src={backgroundImage} alt="" />
                                            </div>
                                        </div>
                                        <div className={style.preview}>
                                            <p>Body</p>
                                        </div>
                                    </div> */}
                                    {/* <div className={style.baby}>
                                        <div className={style.rectangle}>
                                            <div className={style.shape}>
                                                <img src={cross} alt="" />
                                            </div>
                                            <div className={style.bitmap3}>
                                                <img src={backgroundImage} alt="" />
                                            </div>
                                        </div>
                                        <div className={style.preview}>
                                            <p>Body</p>
                                        </div>
                                    </div> */}
                                </div>


                                <div className='col-4'>
                                    <div className={style.layerBaby}>
                                        <div className={style.addLayer}>
                                            <div className={style.moreDiv} onClick={() => { setLayer(true) }}>
                                                <div className={style.oval}>
                                                    <div className={style.path}>
                                                        <img src={plus} alt="" />
                                                    </div>
                                                </div>
                                                <div className={style.addLayerP1}>
                                                    <p>Add Layer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default NftGenerate