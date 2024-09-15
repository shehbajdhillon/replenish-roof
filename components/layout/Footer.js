import Link from "next/link"

export default function Footer1({t_service_1_title, t_service_2_title, t_service_3_title, t_phone_number, t_footer_about_text_1}) {
    return (
        <>
            <footer>
                <div className="footer-area footer-bg" data-background="/assets/img/bg/footer_bg.jpg">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-7">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">About Us</h2>
                                        <div className="footer-content">
                                            <p>{t_footer_about_text_1}</p>
                                            <div className="footer-newsletter">
                                                <h4 className="title">Subscribe to Our Newsletter</h4>
                                                <form action="#">
                                                    <input type="text" placeholder="Enter your email" />
                                                    <button type="submit" className="btn btn-two">Subscribe</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Our Services</h2>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/project"><i className="fas fa-angle-double-right" />{t_service_1_title}</Link></li>
                                                <li><Link href="/project"><i className="fas fa-angle-double-right" />{t_service_2_title}</Link></li>
                                                <li><Link href="/project"><i className="fas fa-angle-double-right" />{t_service_3_title}</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-logo-area">
                                <div className="row align-items-center">
                                    <div className="col-xl-3 col-lg-3 col-md-12">
                                        <div className="logo">
                                            <Link href="/index"><img src="/assets/img/logo/w_logo.png" alt="" /></Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="footer-contact">
                                            <div className="icon">
                                                <i className="fas fa-phone-alt" />
                                            </div>
                                            <div className="content">
                                                <span>Phone us!</span>
                                                <Link href="/tel:t_phone_number">{t_phone_number}</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-6">
                                        <div className="footer-social">
                                            <h2 className="title">Follow Us:</h2>
                                            <ul className="list-wrap">
                                                <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="copyright-text">
                                        <p>© Copyright {new Date().getFullYear()}. All Right Reserved</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="footer-bootom-menu">
                                        <ul className="list-wrap">
                                            <li><Link href="/">Privacy Policy</Link></li>
                                            <li><Link href="/">Terms  Conditions</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
