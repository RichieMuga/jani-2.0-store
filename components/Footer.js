import styles from '../styles/Footer.module.css'
import { getToKnowUslinks, quickLinks, makeMoneyWithUs, letUsHelpYou } from '../utils/FooterLinks'
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import Image from 'next/image'
import smallLogo from '../public/small_Logo.svg'

// BsTwitter

const Footer = () => {
    return (
        <div className={styles.footer}>
            <button className={styles.btn_top} type="submit">Back to top</button>
            {/* newsletter section */}
            <section className={styles.newsLetter}>
                <div className={styles.newsLetterTitle}>
                    <h4>NewsLetter</h4>
                </div>
                <div className={styles.textNsubscribe}>
                    <p>Subscribe to keep up with our great deals.</p>
                    <section className={styles.btnNinput}>
                        <input type="text" className={styles.nws_form_input} placeholder='Your Email' />
                        <button className={styles.nws_btn} type="submit">Subscribe</button>
                    </section>
                </div>
            </section>
            {/* links section */}
            <section className={styles.links_heading}>
                <div className={styles.links_individual}>
                    <h4>Get to know us</h4>
                    {getToKnowUslinks.map((individualLinks) => {
                        return (
                            <>
                                <p>{individualLinks.text}</p>
                            </>
                        )
                    })}
                </div>
                <div className={styles.links_individual}>
                    <h4>Quick Links</h4>
                    {quickLinks.map((individualLinks) => {
                        return (
                            <>
                                <p>{individualLinks.text}</p>
                            </>
                        )
                    })}
                </div>
                <div className={styles.links_individual}>
                    <h4>Make money with us</h4>
                    {makeMoneyWithUs.map((individualLinks) => {
                        return (
                            <>
                                <p>{individualLinks.text}</p>
                            </>
                        )
                    })}
                </div>
                <div className={styles.links_individual}>
                    <h4>Let us help you</h4>
                    {letUsHelpYou.map((individualLinks) => {
                        return (
                            <>
                                <p>{individualLinks.text}</p>
                            </>
                        )
                    })}
                </div>
            </section>
            {/* socials section */}
            <section className="flex_kidogo">
                <BsTwitter size={22} />
                <BsFacebook size={22} />
                <BsInstagram size={22} />
            </section>
            {/* final footer section */}
            <section className='flex_kidogo'>
                <Image src={smallLogo}></Image>
                <p className='smallP'>	©  2022 jani.com</p>
            </section>

        </div>
    )
}

export default Footer