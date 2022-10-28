import React from 'react'
import styles from './TabList.module.css'
import { BsDiamond } from "react-icons/bs"
import { MdWindow } from 'react-icons/md'
import { SiEditorconfig } from 'react-icons/si'
import { MdOutlineDesignServices } from "react-icons/md"
import { BsCameraVideoFill } from 'react-icons/bs'
import {Link} from 'react-router-dom'

const TabList = ({toggle, openMenu}) => {    
    return (
        <div className={styles.tabList}>
            {/* <Link to='/collections'> */}
                <button className={styles.tabLast} onClick={openMenu}>
                    <div className={styles.tabBox}>
                        <BsDiamond className={styles.icon} size={30} />
                        <span>NFT</span>
                    </div>
                </button>
            {/* </Link> */}
            <div className={styles.verticalTabs}>
                <div className={styles.verticaltabBox}>
                    <MdWindow className={styles.icon} size={30} />
                    <span>Dashboard</span>
                </div>
            </div>
            <div className={styles.verticalTabs}>
                <div className={styles.verticaltabBox}>
                    <SiEditorconfig className={styles.icon} size={30} />
                    <span>Photo Editors</span>
                </div>
            </div>
            <div className={styles.verticalTabs}>
                <div className={styles.verticaltabBox}>
                    <MdOutlineDesignServices className={styles.icon} size={30} />
                    <span>My designs</span>
                </div>
            </div>
            <a className={styles.videoOption}>
                <span> <BsCameraVideoFill size={30} />Tutorial</span>
            </a>
        </div>
    )
}

export default TabList