import React, { useState } from 'react'
import styles from './collections.module.css'
// import Router, { useRouter } from 'next/router'
import {useNavigate} from 'react-router-dom'
import img1 from '../assets/Collections/image1.png'
import img2 from '../assets/Collections/image2.png'
import img3 from '../assets/Collections/image3.png'
import img4 from '../assets/Collections/image4.png'
import img5 from '../assets/Collections/image5.png'
import StartProject from '../modals/createNft/StartProject'

const Collections = ({toggle, openMenu}) => {

    const [show, setShow] = useState(false)

    const data = [
        {
            id: 1,
            image:img1,
            text: "Pixel Punks"
        },
        {
            id: 2,
            image: img2,
            text: "Cool Skeleton"
        },
        {
            id: 3,
            image:img3,
            text: "Classic Pencil"
        },
        {
            id: 4,
            image:img4,
            text: "Hippo Goddess"
        },
        {
            id: 5,
            image:img5,
            text: "Crypto Legoman"
        },
    ]
    //eslint-disable-next-line
    const navigate = useNavigate()

   

    return (
        !toggle &&
        <div className={styles.leftPanel}>
            <h2>Collections</h2>
            <div className={styles.backButton}>
                <button type='button mb-2'>
                    <img className={styles.arrowImage} src="https://designcloud.appypie.com/dist/img/public/img/canva.svg" alt="arrow" />
                </button>
            </div>

            <div className='container'>
                <StartProject show={show} setShow={setShow} />
                <div className='row p-0'>
                    <div className='col-sm-12 p-0'>
                        <div className="scroller">
                            <div className={styles.scrollerSection}>
                                <ul className={`${styles.leftSection} `} >
                                    <li onClick={() => setShow(true)}>
                                        <span className={styles.customLayer}>
                                            <img src='https://designcloud.appypie.com/dist/img/public/img/plus.png' className='mx-5 my-4' alt="design"/>
                                            <span className={styles.addPhoto}>Create your own NFT collection</span>
                                        </span>
                                    </li>
                                    {data.map((content, i) => (
                                        <li key={i}>
                                            <span className={styles.imageWrapper}>
                                                <a href='/'>
                                                    <img src={content.image} className={styles.mainImg} alt="content"/>
                                                    <div className={styles.name}>{content.text}</div>
                                                </a>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Collections