import React from 'react'
import Mask from '../../assets/Mask.png';
import Mask2 from '../../assets/Mask2.png';
import {NavLink} from 'react-router-dom'
import { MOCK_TEXTS } from '../../mockdata/Constants';
import style from './CitizenDeveloper.module.css';

export default function CitizenDeveloper() {

  return (

    <div className={`container p-0 ${style.container}`}>
      <div className={`row  ${style.row}`}>
        <div className={`col-sm-6 col-md-3 ${style.firstImage}`}>
          <img className={style.mask1} width="260px" height="380px" alt="mask1" src={Mask} />
        </div>
        <div className={`col-sm-6 col-md-3  ${style.secondImage}`}>
          <img className={style.mask2} width="260px" height="380px" alt="mask2" src={Mask2} />
        </div>
        <div
          className={`col-md-6 col-xs-12 col-sm-12 ${style.columnContainer}`}
        >
          <h6 className={style.heading}>Encourage Citizen Developers</h6>
          <p className={style.paragraph}>
            {MOCK_TEXTS.MOST_FLEXIBLE_NFT_GENERATOR}
          </p>
          <p className={style.paragraph}>
            {MOCK_TEXTS.MOST_FLEXIBLE_NFT_GENERATOR}
          </p>
          

         <>
          <div className="getstartedButton">
               <button className={style.button} onClick={(e)=> window.location.href='/getStarted'}>
              Get Started
            </button>
          </div>
          </>
        </div>
      </div>
    </div>
  )
}
