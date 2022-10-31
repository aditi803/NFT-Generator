import React, { useState, createContext } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import style from './UploadImage.module.css';
import AddLayer from '../../Form/AddLayer/AddLayer';

import { useLayer } from '../../context/LayerContext';

const UploadImage = ({ show, setShow,submitHandler}) => {
  const {layerId, setLayerId, loader, setLoader} = useLayer();
  const [downloadUrl, setDownloadUrl] = useState()
  const [file, setFile] = useState(null);
  const [upload, setUpload] = useState(false);
  const [download, setDownload] = useState(false);
  const handleClose = () => setShow(false);
  const [addLayer, setAddLayer] = useState(false)
 

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'file.zip'); //set download attribute to link
    document.body.appendChild(link);
    link.click(); // this will download file.zip
    link.parentNode.removeChild(link);
  }

  return (
    <>
      <div>
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton className={style.uploadHeader}>
            <h5>Upload Image</h5>
          </Modal.Header>
          <form encType='multipart/form-data' onSubmit={(e)=>{
            submitHandler(e,setUpload,handleClose)
          }}>
            <Modal.Body className={style.uploadBody}>
              <input type="file" name="name" />
            </Modal.Body>
            <Modal.Footer className={style.uploadFooter}>
              <Button variant="light" onClick={handleClose} className={style.Btn}>
                Close
              </Button>
              <Button variant="primary" type="submit" className={style.Btn}>
                Upload
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </>
  )
}

export default UploadImage
