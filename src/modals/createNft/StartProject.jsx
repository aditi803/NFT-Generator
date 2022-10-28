import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import style from './StartProject.module.css'
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddLayer from '../../Form/AddLayer/AddLayer';
// import UploadImage from '../../modals/UploadImage/UploadImage';
const StartProject = ({ show, setShow , getLayer, setLayerData, layerData}) => {

    const [layer, setLayer] = useState(true);
    const [name, setName] = useState("")
    const [height, setHeight] = useState("")
    const [width, setWidth] = useState("")

    const handleClose = () => setShow(false);

    const data = { name, height, width }
    const handleSize = (e) => {
        setHeight(e.target.value)
        setWidth(e.target.value)
    }
    const token = localStorage.getItem('token');
    localStorage.setItem('Name', name)
    const createProject = () => {

        axios
            .post("https://nftsgenerator.herokuapp.com/api/user/createCollection", data, { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => {
                // console.log(res, "Create Collection")
                // console.log(res.data.data.collection._id, "IDDDDD")
                localStorage.setItem('collectionId', res.data.data.collection._id)
                setLayer(false)
            })
            .catch((err) => {
                console.log(err, '>>>>>>>>>>>>>>>>>>>')
            })
    }


    return (
        <div>
            {layer ?
                <Modal className="CreateNft" show={show} onHide={handleClose}>
                    <Modal.Header closeButton >
                        <Modal.Title>Start Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={style.startProjectBody}>
                        <div>
                            <input autoComplete='off' type="text" value={name} onChange={(e) => setName(e.target.value)}
                                placeholder="Add Project Name"
                                className='form-control' />
                        </div>
                        <div>
                            <select name="size" onChange={(e) => handleSize(e)}
                                value={height}
                                className={style.selectInput}
                                id=''
                            >
                                <option label="Select Size" />
                                <option value='512'>  512px * 512px </option>
                                <option value='1024'> 1024px * 1024px </option>
                            </select>
                        </div>
                        <Modal.Footer className={style.startProjectFooter}>
                            <Button variant="light" onClick={handleClose} className={style.Btn}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={createProject} className={style.Btn}>
                                Create
                            </Button>
                        </Modal.Footer>
                    </Modal.Body>
                </Modal>
                :
                <>
                    <AddLayer setShow={setShow} show={show} getLayer={getLayer}  />
                </>
            }
        </div>

    )
}

export default StartProject