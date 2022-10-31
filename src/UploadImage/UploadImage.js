import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import style from './UploadImage.module.css';
import Loader from '../loader/index'

const UploadImage = ({ show, setShow,submitHandler}) => {
  const [downloadUrl, setDownloadUrl] = useState()
  const [loader, setLoader] = useState(false);
  // const [file, setFile] = useState(null);
  const [upload, setUpload] = useState(false);
  // const [download, setDownload] = useState(false);
  const handleClose = () => setShow(false);
 


  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'file.zip'); //set download attribute to link
    document.body.appendChild(link);
    link.click(); // this will download file.zip
    link.parentNode.removeChild(link);
  }

  return loader ? <Loader /> : (
    <>
      <div>
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton className={style.uploadHeader}>
            <h5>Upload Image</h5>
          </Modal.Header>
          <form encType='multipart/form-data' onSubmit={(e)=>{
            submitHandler(e,setUpload,handleClose, setLoader)
          }}>
            <Modal.Body className={style.uploadBody}>
              <input type="file" name="name" />
            </Modal.Body>
            <Modal.Footer className={style.uploadFooter}>
              <Button variant="light" onClick={handleClose} className={style.Btn}>
                Close
              </Button>
              <Button variant="primary" type="submit" className={style.Btn} onClick={() => {setLoader(true)}}>
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
