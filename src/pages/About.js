import React, {Component} from 'react';
import GeneralHeader from "../components/common/GeneralHeader";
import Banner5 from "../components/banner/banner5/Banner5";
import ImageBox from "../components/about/ImageBox";
import About2 from "../components/about/About2";
import FunFactsThree from "../components/other/funfacts/FunFactsThree";
import {Link} from "react-router-dom";
import { FiPlus } from 'react-icons/fi'
import SectionsHeading from "../components/common/SectionsHeading";
import Testimonial from "../components/sliders/Testimonial";
import HowItWork4 from "../components/hiw/HowItWork4";
import TeamOne from "../components/team/TeamOne";
import Button from "../components/common/Button";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";

class About extends Component {
    state = {
        tmimage: [
            {
                tmimg: require('../assets/images/testi-img1.jpg')
            },
            {
                tmimg: require('../assets/images/testi-img2.jpg')
            },
            {
                tmimg: require('../assets/images/testi-img3.jpg')
            },
            {
                tmimg: require('../assets/images/testi-img4.jpg')
            },
            {
                tmimg: require('../assets/images/testi-img5.jpg')
            },
            {
                tmimg: require('../assets/images/testi-img6.jpg')
            }
        ]
    }
    render() {
        return (
            <main className="about-page">
                {/* Header */}
                <GeneralHeader />

                {/* Banner */}
                <Banner5 />

                <section className="blog-area padding-top-50px padding-bottom-80px before-none after-none">
                    <div className="container">
                        <ImageBox />
                    </div>
                </section>

                <section className="about-area padding-bottom-100px">
                    <div className="container">
                        <About2 />
                    </div>
                </section>

                <section className="funfact-area section-bg before-none after-none padding-top-100px padding-bottom-100px text-center">
                    <div className="container">
                        <div className="row">
                            <FunFactsThree />
                        </div>
                        <div className="row">
                            <div className="col-lg-3 column-td-6 mx-auto">
                                <div className="cta-text-box mt-4">
                                    <Link to="/add-listing" className="d-flex justify-content-center align-items-center">
                                        <i className="la"><FiPlus /></i> Add Your Business
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial */}
                <section className="testimonial-area padding-top-100px padding-bottom-100px text-center">
                    {this.state.tmimage.map((tmimg, index) => {
                        return (
                            <img key={index} src={tmimg.tmimg} alt="testimonial" className="random-img" />
                        )
                    })}
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="What Our Users Said" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto mt-4">
                                <Testimonial />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="hiw-area padding-top-100px padding-bottom-90px after-none text-center section-bg">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Why Choose Us" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>
                        <div className="row mt-5">
                            <HowItWork4 />
                        </div>
                    </div>
                </section>

                {/* Team Area */}
                <section className="team-area padding-top-100px padding-bottom-70px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Our Expert Team Members" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>

                        <div className="row mt-5">
                            <TeamOne />
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-area padding-bottom-100px text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-width text-center">
                                    <SectionsHeading title="Want to Join with us?" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                                    <div className="btn-box mt-4 text-center">
                                        <Button text="join now" url="#" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NewsLetter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}

export default About;