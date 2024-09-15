import Link from "next/link"
import { useState } from 'react'

export default function Services1({t_service_1_title, t_service_2_title,t_service_3_title, t_service_1_tile_body, t_service_2_tile_body, t_service_3_tile_body}) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <section className="services-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">What We Do</span>
                                <h2 className="title tg-element-title">Our Services Areas</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".2s" data-background="/assets/img/services/services_item01.jpg" onMouseEnter={() => handleToggle(1)} onMouseLeave={() => handleToggle(1)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 1 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/services_icon01.svg" alt="" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 1 ? "none" : "block"}` }}><Link href="/services-details">{t_service_1_title}</Link></h2>
                                    <h2 className="number">01</h2>
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                    <h2 className="title"><Link href="/services-details">{t_service_1_title}</Link></h2>
                                    <p>{t_service_1_tile_body}</p>
                                    <Link href="/services-details" className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".4s" data-background="/assets/img/services/services_item02.jpg" onMouseEnter={() => handleToggle(2)} onMouseLeave={() => handleToggle(2)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 2 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/services_icon02.svg" alt="" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 2 ? "none" : "block"}` }}><Link href="/services-details">{t_service_2_title}</Link></h2>
                                    <h2 className="number">02</h2>
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                    <h2 className="title"><Link href="/services-details">{t_service_2_title}</Link></h2>
                                    <p>{t_service_2_tile_body}</p>
                                    <Link href="/services-details" className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".6s" data-background="/assets/img/services/services_item03.jpg" onMouseEnter={() => handleToggle(3)} onMouseLeave={() => handleToggle(3)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 3 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/services_icon03.svg" alt="" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 3 ? "none" : "block"}` }}><Link href="/services-details">{t_service_1_title}</Link></h2>
                                    <h2 className="number">03</h2>
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                    <h2 className="title"><Link href="/services-details">{t_service_3_title}</Link></h2>
                                    <p>{t_service_3_tile_body}</p>
                                    <Link href="/services-details" className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
