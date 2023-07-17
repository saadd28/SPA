import './Footer.css'

import FooterLeaf from '../../img/footerleaf.png'
import EmailImage from '../../img/emailicon.png'
import PhoneImage from '../../img/phoneicon.png'
import LocationImage from '../../img/locationicon.png'

import InstagramIcon from '../../img/instagramicon.png'
import FacebookIcon from '../../img/facebookicon.png'
import WhatsappIcon from '../../img/whatsappicon.png'
import TwitterIcon from '../../img/twittericon.png'


const Footer = () => {

    return (
        <>
            <div className='footer_container'>
                {/* <div> */}
                <img src={FooterLeaf} alt="Leaf" className="footer_leaf_img" />

                {/* </div> */}


                <div className="footer_content_box">

                    <div className='footer_header'>
                        <span className='footer_header_style'>SALOON </span>
                        SERVICES
                    </div>

                    <div className="footer_para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
                            aliquid quisquam. Saepe aut vitae impedit corporis! Quae quo
                            ducimus repellat cupiditate vitae dignissimos aliquid corrupti
                            est voluptate nobis. Hic, beatae?</p>

                    </div>

                    <div className="footer_contact_container">
                        <div className="contact_template">
                            <img src={EmailImage} alt="Email Icon" />
                            <div className="contact_method_title">
                                Email Address
                            </div>

                            <div className="contact_method_info">
                                abc123@gmail.com
                            </div>


                        </div>

                        <div className="footer_vertical_divider">

                        </div>

                        <div className="contact_template">
                            <img src={PhoneImage} alt="Email Icon" />
                            <div className="contact_method_title">
                                Contact Us
                            </div>

                            <div className="contact_method_info">
                                0300-1234567
                            </div>


                        </div>

                        <div className="footer_vertical_divider">

                        </div>

                        <div className="contact_template">
                            <img src={LocationImage} alt="Email Icon" />
                            <div className="contact_method_title">
                                Location
                            </div>

                            <div className="contact_method_info">
                                Address of club here
                            </div>


                        </div>




                    </div>


                    <div className="contact_socialmedia_icons_container">
                        <img src={InstagramIcon} alt="Instagram Icon" />
                        <img src={FacebookIcon} alt="Facebook Icon" />
                        <img src={WhatsappIcon} alt="Whatsapp Icon" />
                        <img src={TwitterIcon} alt="Twitter Icon" />

                    </div>

                    <div className='footer_text'>
                        Privacy Policy
                    </div>
                </div>
            </div>

        </>


    )
}

export default Footer;