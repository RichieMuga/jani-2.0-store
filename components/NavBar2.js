import React from 'react'
import { navBar2 } from '../utils/NavBar'
import styles from '../styles/NavBar.module.css'
// import styles2 from '../styles/NavBarSecond.module.css'
// import SideBar from './SideBar'
import SearchBar from './SearchBar';


const NavBar2 = () => {
    return (
        <section className={styles.center}>
            <div className={`${styles.SearchBarPhone} flex_kidogo`}>
                <span className={styles.SearchBarPhone}><SearchBar /></span>
            </div>

            <div className={`background_fullWidth ${styles.quickLinksHeader}`}>
                <section className='flex_kidogo'>

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
        </section>
    )
}

export default NavBar2