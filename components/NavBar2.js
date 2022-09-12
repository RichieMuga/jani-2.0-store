import React from 'react'
import { navBar2 } from '../utils/NavBar'
import styles from '../styles/NavBar.module.css'
import styles2 from '../styles/NavBarSecond.module.css'


const NavBar2 = () => {
    return (
        <div className='background_fullWidth'>
            <section>
                <div className={styles2.line_line_1}></div>
                <div className={styles2.line_line_2}></div>
                <div className={styles2.line_line_3}></div>
            </section>
            <section className={`flex_kidogo ${styles.sectionLinks}`}>

                {navBar2.map((individualLink) => {
                    return (
                        <div key={individualLink.id} className='dispFlex_aside'>
                            <span className='marginTop'> {individualLink.icon}</span>
                            <p>{individualLink.text}</p>
                        </div>
                    )
                })}
            </section>
        </div >
    )
}

export default NavBar2