import React,{useState} from 'react'
import styles from "./GeneratorPage.module.css";
import StartProject from '../modals/createNft/StartProject';
import NftGenerate from '../layoutsNft/NftGenerate';
const GeneratorPage = () => {
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <>
    {!open?
    <div className={styles.canvasPanel}>
    <StartProject show={show} setShow={setShow} />
       <div className={styles.generate}>
            <div className={styles.maincontent}>
                <div className={styles.upload}>
                    <p className={styles.drag}>Create your own NFT collection.</p>
                    <button className={`${styles.getStart}`} onClick={() => setShow(true)}>Get Started</button>
                    <div className={styles.pdfImage}>
                        <img src="https://designcloud.appypie.com/dist/img/public/img/edit_img.png" alt='design'/>
                    </div>
                </div>
            </div>
       </div>
    </div> : <NftGenerate /> }
    </>
  )
}

export default GeneratorPage