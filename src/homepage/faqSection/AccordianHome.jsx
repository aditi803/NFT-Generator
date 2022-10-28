import React from "react";
import style from "./AccordianHome.module.css";
import {
  PEOPLE_ASK_QUESTIONS,
  MOCK_DATA_ACCORDIAN,
} from "../../mockdata/Constants";


export default function AccordianHome () {
  return (
    <div className={style.section}>
      <div className="container">
        <div className={`row ${style.row}`}>

          <div className={`col-md-4 ${style.leftColumn}`}>
            <h1 className={style.leftHeading}>
              {PEOPLE_ASK_QUESTIONS.heading}
            </h1>
            <p className={style.leftText}>
              {PEOPLE_ASK_QUESTIONS.subheading}
            </p>
          </div>
         
          <div className="col-md-8">

            <div className="accordion" id="accordionExample">
              <div className="row">
                {MOCK_DATA_ACCORDIAN.map((item, i) => (
                  <React.Fragment key={item.id}>
                    <div className={`col-md-12 col-sm-12 ${style.content}`}>
                      {/* <div className="accordion-item"> */}
                      <h5
                        className={`accordion-header ${style.title}`}
                        id="headingOne"
                      >
                        <button
                          className={`accordion-button ${style.button} ${i !== 0 ? 'collapsed' : ''}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseOne${i}`}
                          aria-expanded={i === 0 ? true : false}
                          aria-controls={`collapseOne${i}`}
                        >
                          {item.title}
                        </button>
                      </h5>
                      <div
                        id={`collapseOne${i}`}
                        className={`accordion-collapse collapse ${i === 0 ? "show" : null
                          }`}
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div>
                          <p className={style.text}>{item.para}</p>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}

                  </React.Fragment>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
