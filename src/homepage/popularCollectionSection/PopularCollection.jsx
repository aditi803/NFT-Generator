import React from "react";
import style from "./PopularCollection.module.css";
import {POPULAR_COLLECTION,MOCK_TEXTS} from '../../mockdata/Constants'
import {AiFillHeart} from "react-icons/ai";

const PopularCollection = () => {
  return (
    <div>
       <div className={style.PopularCollection}>
  <div className={`container pt-5 pb-5 ${style.container}`} >
      <div className={`row  ${style.upperHeading}`}>
        <div className={`col-md-6 col-sm-6 col-xs-6 ${style.columnHeading}`}>
          <h1 className={style.heading}>
            {MOCK_TEXTS.POPULAR_COLLECTION_HEADING}
          </h1>
          <p className={style.text}>
            {MOCK_TEXTS.POPULAR_COLLECTION_SUBHEADING}
          </p>
        </div>
        <div className={`col-md-6 col-sm-6 col-xs-6  ${style.columnHeading}`}>
          <h4 className={style.headingExplore}>
            {MOCK_TEXTS.EXPLORE_HEADING}
          </h4>
        </div>
      </div>

      <div className="row">
        {POPULAR_COLLECTION.map((item) => (
          <div key={item.id} className={`col-md-6 col-sm-12  ${style.Content}`}>
              <img alt="popularImage" className={style.popularCollectionImage}  src={item.image} />
              <div className={style.likeContainer}>
                <AiFillHeart />
                <span>150</span>
              </div>
              <div className={style.emptyContainer}></div>
              <div className={style.cardHeading}>
                <h3 className={style.title}>{item.title}</h3>
                <h5 className={style.Columntext}>{item.text}</h5>
              </div>
            </div>
          
        ))}
      </div>
    </div>
  </div>
    </div>
  )
}

export default PopularCollection