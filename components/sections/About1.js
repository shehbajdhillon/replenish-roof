import Link from "next/link"

export default function About1({t_about_tenure_1, t_about_team_1, t_about_hype_1, t_about_hype_2, t_about_hype_3, t_about_text_1 }) {
    return (
        <>
            <section className="about-area pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                            <div className="about-img-wrap">
                                <img src="/assets/img/images/about_img01.jpg" alt="" className="wow fadeInRight" data-wow-delay=".4s" />
                                <img src="/assets/img/images/about_img02.jpg" alt="" className="wow fadeInRight" data-wow-delay=".2s" />
                                <div className="about-experiences-wrap">
                                    <div className="experiences-item">
                                        <div className="icon">
                                            <img src="/assets/img/icon/about_icon01.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h6 className="title">{t_about_tenure_1}</h6>
                                        </div>
                                    </div>
                                    <div className="experiences-item">
                                        <div className="icon">
                                            <img src="/assets/img/icon/about_icon02.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h6 className="title">{t_about_team_1}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-content">
                                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">About Our Company</span>
                                    <h2 className="title tg-element-title">We’re Committed to Plumbing Excellence</h2>
                                </div>
                                <p>{t_about_text_1}</p>
                                <div className="about-list">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-check" />{t_about_hype_1}</li>
                                        <li><i className="fas fa-check" />{t_about_hype_2}</li>
                                        <li><i className="fas fa-check" />{t_about_hype_3}</li>
                                    </ul>
                                </div>
                                <Link href="/about" className="btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
