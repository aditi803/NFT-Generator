import React from 'react'
import styles from "./Navbar.module.css"
import {MdKeyboardArrowLeft} from "react-icons/md"
import {FaRegUser} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.navbarCollapse}>
            <div className={styles.breadcrumbNav}>
                <ul>
                    <li>
                        <MdKeyboardArrowLeft  size={30}  className="mb-1"/> Dashboard
                    </li>
                    <li>
                       <span className='mx-1'></span> NFT Generator
                    </li>
                    <li>
                        <div className={styles.projectInput}>
                            <input 
                                type='text'
                                className={`form-control ${styles.inputText}`}
                                
                            />
                        </div>
                    </li>
                </ul>
                <div className={styles.saveProject}>
                    <img src='https://designcloud.appypie.com/dist/img/public/img/Save_Success.svg' alt='save-project' />
                </div>
            </div>   
        
            <ul className={styles.navbarNav}>
                <div>
                    <div className={styles.userSettings}>
                        <div className={styles.userDashboard}>
                            <button
                                type='button'
                                className='userInnerDashboard mt-1'
                            >
                                <span>
                                    <FaRegUser />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar