import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

const DownloadNftModal = ({download, setDownload}) => {
    const handleClose = () => setDownload(false);
    
  return (
    <div>
        <Modal download={download} onHide={handleClose}>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                <p>Thank you for choosing us. Enjoy our service. </p>
                <p>Visit again.</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Download
                </Button>
              </Modal.Footer>
            </Modal>
    </div>
  )
}

export default DownloadNftModal