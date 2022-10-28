import React from 'react'
import style from "./Footer.module.css";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <div className={` ${style.footer}`}>
    <div className={`row m-0 ${style.row}`}>
    <div className="col-md-3">
        <div className={style.NftGeneratorHeading}>
        <img alt='logoImage' className={style.logo} width="39px" height="38px" src={Logo} />
        <p className={style.span}>NFT generator</p>
        </div>
        <p>Loreum Ipsum dolar sit amet consectetuor</p>
      </div>
      <div className="col-md-2 col-sm-6">
        <h4 className={style.footerheading}>About Us</h4>
        <p className={style.footerText}>About</p>
        <p className={style.footerText}>Contact</p>
      </div>
      <div className="col-md-2 col-sm-6">
        <h4 className={style.footerheading}>Links</h4>
        <p className={style.footerText}>Blogs</p>
        <p className={style.footerText}>Help Center</p>
      </div>
      <div className="col-md-3 col-sm-12">
        <h4 className={style.footerheading}>Social Media</h4>
        <div className={style.IconSection}>
          <div className={style.iconContainer}>
            <BsInstagram className={style.iconStyle} />
          </div>
          <div className={style.iconContainer}>
            <BsTwitter className={style.iconStyle} />
          </div>
          <div className={style.iconContainer}>
            <BsFacebook className={style.iconStyle} />
          </div>
          <div className={style.iconContainer}>
            <TbBrandTelegram className={style.iconStyle} />
          </div>
        </div>
      </div>
    </div>
    <hr />
    <p className={style.paragraph}>
      CopyRight @2022 NFT Generator. All right reserved{" "}
    </p>
  </div>
  )
}

export default Footer