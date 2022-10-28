import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import style from './EditData.module.css'

const EditData = ({show, setShow}) => {
    const handleClose = () => {
        setShow(false)
    }
    return(
        <div>
        <Modal show={show} onHide={handleClose} className="editDataModal">
          <Modal.Header closeButton>
            <h5>Edit Metadata</h5>
          </Modal.Header>
          <form>
            <Modal.Body className={style.editBody}>
                <label>Name</label>
              <input type="text" className="form-control" placeholder='Your Collection'/>
                <label>Symbol of your Collection</label>
              <input type="text" className="form-control" placeholder='Ex: AMB'/>
                <label>Collection Size</label>
              <input type="text" className="form-control" placeholder='Enter Number'/>
                <label>Wallet Address</label>
              <input type="text" className="form-control" placeholder='address'/>
            </Modal.Body>
            <Modal.Footer className={style.editFooter}>
              <Button variant="primary" className={style.btn}>
                Save
              </Button>
              <Button variant="light" type="submit" onClick={handleClose} className={style.btn}>
                Cancel
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    )
}

export default EditData