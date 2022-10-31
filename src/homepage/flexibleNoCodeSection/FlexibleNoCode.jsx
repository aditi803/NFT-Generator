import React from 'react'
import style from './FlexibleNoCode.module.css'
import Art from '../../assets/Art1.png';
import {MOCK_TEXTS} from '../../mockdata/Constants';
import {useNavigate} from "react-router-dom"
const FlexibleNoCode = () => {
  const navigate = useNavigate();
  return (
    <div className={style.section}>
    <div className="container ">
      <div className={`row  m-0 ${style.row}`}>
        <div className={`col-md-6  ${style.leftContent}`}>
          <div className={style.line}></div>
          <img alt="flexibleImage" className={style.flexibleImage}
            width={400}
            height={454}
            src={Art}
          />
          <div className={style.content}>
            <div className={style.emptyContainer}></div>
            <h5 className={style.text1}>Bored Ape</h5>
            <h5 className={style.text2}>0.088 ETH</h5>
          </div>
        </div>
        <div className={`col-md-6  ${style.rightContent}`}>
          <h1>The most flexible no-code NFT Generator</h1>
          <p className={style.paragraph}>
           {MOCK_TEXTS.MOST_FLEXIBLE_NFT_GENERATOR}
          </p>
          <p className={style.paragraph}>
           {MOCK_TEXTS.MOST_FLEXIBLE_NFT_GENERATOR}
          </p>
          <button type="button"  
            onClick={()=>navigate("/CreateNft")}
          className={style.button}>Learn More</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default FlexibleNoCode