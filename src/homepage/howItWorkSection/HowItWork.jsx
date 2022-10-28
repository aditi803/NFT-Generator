import React from 'react'
import style from "./HowItWork.module.css";
import { HOW_IT_WORK } from '../../mockdata/Constants';

const HowItWork = () => {
  return (
    <div className={`container ${style.section}`}>
      <h1>How it Work</h1>
      <div className="row m-0  my-5">
        {HOW_IT_WORK.map((item) => (
          <div key={item.id} className={`${style.leftContent}`}>
            <div className={style.uppercontent}>
              <img
                alt="HowitWorkImage"
                width="50px"
                className={style.HowitWorkImage}
                height="50px"
                src={item.image}
              />
              <p className={style.numberText}>{item.id}</p>
            </div>

            <div className={style.content}>
              <button onClick={(e) => { window.location.href = "/generate" }}>
                <h3 className={style.title}>{item.title}</h3>
                <h5 className={style.text}>{item.text}</h5>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWork