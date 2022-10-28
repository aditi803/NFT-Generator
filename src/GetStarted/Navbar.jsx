import React from "react";
import Logo from '../assets/Logo.png';
import style from './Navbar.module.css'
import {RiArrowDropDownFill} from 'react-icons/ri'

const Navbar = () => {
    return (
        <div style={{marginTop:"14px"}} className={style.navbar}>
            <div className={`row ${style.row}`}>
                <div className="col-3">
                    <ul className={style.leftSide}>
                        <li><img src={Logo} alt="logo" /></li>
                        <li style={{marginLeft:"81px"}} className={style.liSection}>Home</li>
                        <li style={{marginLeft:"40px"}} className={style.liSection}>My Projects</li>
                    </ul>
                </div>
                <div className="col-5">
                    <div className={style.bottom}>  
                        <p>NFT Generator</p>
                    </div>
                </div>
                <div className="col-3" style={{marginLeft: "41px"}}>
                    <div className={style.rightSide}>
                        <div className={style.profile}></div>
                        <p>admin@gmail.com</p>
                        <RiArrowDropDownFill  size={30}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;