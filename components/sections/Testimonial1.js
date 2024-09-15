import Slider from "react-slick"
const settings = {
    dots: true,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
}


export default function Testimonial1({t_testimonial_text_1, t_testimonial_text_2, t_testimonial_text_3}) {
    return (
        <>
            <section className="testimonial-area pt-115 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="testimonial-img">
                                <img src="/assets/img/images/testimonial_img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial-content">
                                <div className="section-title mb-45 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">Testimonials</span>
                                    <h2 className="title tg-element-title">Some of our happy customers say</h2>
                                </div>
                                <Slider {...settings} className="testimonial-active">
                                    <div className="testimonial-item">
                                        <div className="testimonial-icon">
                                            <i className="fas fa-quote-left" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>{t_testimonial_text_1}</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-icon">
                                            <i className="fas fa-quote-left" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>{t_testimonial_text_2}</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-icon">
                                            <i className="fas fa-quote-left" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>{t_testimonial_text_3}</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
