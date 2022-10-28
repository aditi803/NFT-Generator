import React, { useState } from 'react'
import style from './AddLayer.module.css'
import { useFormik } from "formik";
// import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import UploadImage from '../../modals/UploadImage/UploadImage';

export let responseApi

// export let layerGetApi

const AddLayer = ({ getLayer , setShow, show, name }) => {
    const token = localStorage.getItem('token')


    const [layer, setLayer] = useState('')
    const [upload, setUpload] = useState(false)
    const [resApi,setResApi] = useState()
    
    const initialValues = {
        layer: ''
    }
    const validationSchema = Yup.object({
        layer: Yup.string()
            .required("*Required")
    })
    // const [layerData, setLayerData] = useState([])
    // console.log(layerData, "LAyer DFasta kjhhjgfhds")
    // layerGetApi = layerData
    // console.log(layerGetApi,"kljhgfdsadfghjkl;kjgfdzXcvbnm,.")
    // const getLayer = () => {
    //     const collectionId = localStorage.getItem('collectionId')
    //     axios.get(`https://nftsgenerator.herokuapp.com/api/user/getLayers/${collectionId}`,{ headers: { Authorization: `Bearer ${token}` } })
    //     .then(res => {
    //         setLayerData(res.data.data.layers[0], "Get layer data")
    //         // console.log(res.data.data.layers[0],"LayerData")
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }
    //  getLayer()

    const onSubmit = () => {
        const collectionId = localStorage.getItem('collectionId')
        const data = {
            name: formik.values.layer,
            collectionId
        }
        axios
            .post("https://nftsgenerator.herokuapp.com/api/user/addLayer", data, { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => {
                // console.log(res, "Add layer response")
                setResApi(res)
                // console.log("meeeeeee");
                // console.log(res.data.data.layer._id, "Layer id")
                localStorage.setItem('LayerId', res.data.data.layer._id)
                setShow(false)
                formik.resetForm()
                getLayer()
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })
  
    const handleClose = () => {
        setShow(false)
    }

    return (

        <div>
            {/* {console.log('layerName', formik.values.layer)} */}
            <Modal onHide={handleClose} show={show}>
                <UploadImage show={upload} setShow={setUpload} />
                <form className={style.form} onSubmit={formik.handleSubmit}>
                    <Modal.Header closeButton className={style.addHeader}>
                        <h5>Add Layer</h5>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <input autoComplete='off' type="text"
                                className="form-control"
                                placeholder="Add Layer"
                                name="layer"
                                value={layer}
                                // onChange={(e) => setLayer(e.target.value)} 
                                {...formik.getFieldProps('layer')}
                            />
                            {formik.touched.layer && formik.errors.layer ?
                                <p className='text-danger error pl-2'>{formik.errors.layer}</p> : null}
                        </div>

                    </Modal.Body>
                    <Modal.Footer className={style.addFooter}>
                        <Button variant="light" onClick={handleClose} className={style.Btn}>
                            Cancel
                        </Button>
                        <Button variant="primary" className={style.Btn} type='submit'>
                            Add Layer
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

        </div>
    )
}

export default AddLayer