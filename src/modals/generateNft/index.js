import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import style from './generateNft.module.css'

export const NftGenerator = ({setToggle, toggle}) =>{
  // console.log(toggle,"togllee")
    const handleClose = () => {
        setToggle(false)
    }
    return(
        <div>
        <Modal  show ={toggle} onHide ={handleClose} className="nftGenerateModal">

          <Modal.Header closeButton className={style.generateHeader}>
            <h5>Generate NFT</h5>
          </Modal.Header>
            <Modal.Footer className={style.generateFooter}>
              <Button variant="primary" className={style.Btn}>
                Connect Wallet to Create Smart Contract
              </Button>
              <Button variant="light" className={style.Btn}>
                Generate NFT Only
              </Button>
            </Modal.Footer>
        </Modal>
      </div>
    )
}

// export default NftGenerator