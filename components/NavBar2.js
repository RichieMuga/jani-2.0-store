import React from 'react'
import { navBar2 } from '../utils/NavBar'
import styles from '../styles/NavBar.module.css'
import styles2 from '../styles/NavBarSecond.module.css'
import SideBar from './SideBar'


const NavBar2 = () => {
    return (
        <div className='background_fullWidth'>
            <div>
                <SideBar />
            </div>
            <section className={`flex_kidogo`}>

                {navBar2.map((individualLink) => {
                    return (
                        <div key={individualLink.id} className='dispFlex_aside'>
                            <span className='marginTop'> {individualLink.icon}</span>
                            <p className={`${styles.sectionLinks}`}>{individualLink.text}</p>
                        </div>
                    )
                })}
            </section>
        </div >
    )
}

export default NavBar2