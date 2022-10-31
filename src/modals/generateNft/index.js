import React,{useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import style from './generateNft.module.css';
import { useLayer } from '../../context/LayerContext';
import axios from "axios";
import { toast } from 'react-toastify';

export const NftGenerator = ({setToggle, toggle}) =>{
    const handleClose = () => {
        setToggle(false)
    }
    const handleCloseGenerate = () => {
      setGenerate(false)
    }

    const [generate, setGenerate] = useState(false)
    const [downloadData, setDownloadData] = useState(false)
    const [copy, setCopy] = useState("")
    const handleCreate = () => {
      handleClose()
      setGenerate(true)
    }
    const {collectionId} = useLayer()

    const editions = parseInt(copy)

    console.log(collectionId, "Collection54687584")
    const token = localStorage.getItem("token");
    const data ={ 
      editions,
      collectionId

    }
    const download = () => {
      axios
      .post("https://nftsgenerator.herokuapp.com/api/user/generateNFT", data,{headers: {Authorization: `Bearer ${token}`}})
      .then((res) => {
        setDownloadData(res)
        console.log(res)
      })
      .catch((err) => {
        toast.error("Try again")
      })
    }

    return (
      <>
        <div>
        <Modal  show ={toggle} onHide ={handleClose} className="nftGenerateModal">
          <Modal.Header closeButton className={style.generateHeader}>
            <h5>Generate NFT</h5>
          </Modal.Header>
            <Modal.Footer className={style.generateFooter}>
              <Button variant="primary" className={style.Btn}>
                Connect Wallet to Create Smart Contract
              </Button>
              <Button variant="light" className={style.Btn} onClick={handleCreate}>
                Generate NFT Only
              </Button>
            </Modal.Footer>
        </Modal>
      </div>
 
      <div>
        <Modal  show ={generate} onHide ={handleCloseGenerate} className="nftGenerateModal">
          <Modal.Header closeButton className={style.generateHeader}>
          </Modal.Header>
            <Modal.Footer className={style.generateFooter}>
              <input 
                className='form-control'
                placeholder='Enter the number of you want to generate'
                value={copy}
                onChange={(e) => setCopy(e.target.value)}
                type="number"
              />
              <Button variant="primary" className={style.Btn} onClick={download}>
                Download NFt 
              </Button>
            </Modal.Footer>
        </Modal>
      </div>
      </>
    )
}

// export default NftGenerator