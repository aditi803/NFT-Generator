import React from 'react'
import style from "./HomePageCreate.module.css"
import { MdOutlineExplore } from "react-icons/md";
import { MOCK_TEXTS } from "../../mockdata/Constants"
import GroupImg from "../../assets/Group.png";

 export default function HomePageCreate ()  {
  return (
    <div className={style.container}>
    <div className={style.background}>
      <div className="container w-100">
        <div className={`row m-0  ${style.headingSection}`}>
          <div className="col-md-6 col-sm-6 col-xs-6 pt-5 ">
            <span className={style.heading}>
              A New Way to Create your{" "}
              <span className={style.title}> Artworks.</span>
            </span>
            <h3 className={style.subheading}>{MOCK_TEXTS.NFT_COLLECTION}</h3>
            <button className={style.button} onClick={(e) => { window.location.href = "/selection" }}>
              <MdOutlineExplore className={style.icon} />
              Explore
            </button>
          </div>
          <div
            className={` col-md-6 col-sm-6 text-center col-xs-6   my-2 ${style.head}`}
          >
            <img  alt="groupImage" className={style.HomePageCreate} src={GroupImg} />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

