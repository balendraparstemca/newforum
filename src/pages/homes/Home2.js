import React, {Component} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import BannerTwo from "../../components/banner/banner2/BannerTwo";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import SectionsHeading from "../../components/common/SectionsHeading";
import PopularDestination from "../../components/places/PopularDestination";
import Button from "../../components/common/Button";
import { BsEye } from 'react-icons/bs'
import SectionDivider from "../../components/common/SectionDivider";
import HowItWorkTwo from "../../components/hiw/hiw2/HowItWorkTwo";
import RecommendedPlace from "../../components/places/RecommendedPlace";
import FunFactsTwo from "../../components/other/funfacts/FunFactsTwo";
import InfoBox4 from "../../components/other/infoboxes/InfoBox4";
import Authors from "../../components/sliders/Authors";
import Testimonial from "../../components/sliders/Testimonial";
import LatestBlog from "../../components/blogs/LatestBlog";
import CtaOne from "../../components/other/cta/CtaOne";
import ClientLogo from "../../components/sliders/ClientLogo";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";

class Home2 extends Component {
    state = {
        bannerImg: require('../../assets/images/hero-bg2.jpg'),
    }
    render() {
        return (
            <main className="home-2">
                {/* Header */}
                <GeneralHeader />

                {/* Banner */}
                <BannerTwo bgImg={this.state.bannerImg} />

                {/* Popular Destination */}
                <section className="cat-area destination-area padding-top-100px padding-bottom-100px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Discover Popular Destination" desc="Explore most popular destination and places, Morbi convallis
bibendum urna ut viverra. Maecenas," />
                        </div>

                        <div className="row mt-5">
                            <PopularDestination />
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="button-shared mt-4 text-center">
                                    <Button text="view all destination" url="/all-locations">
                                        <span className="la">
                                            <BsEye />
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SectionDivider />

                {/* How it Work */}
                <HowItWorkTwo />

                <SectionDivider />

                {/* Recommended Place */}
                <section className="card-area padding-top-100px padding-bottom-90px text-center">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Places We Recommend You Visit" desc="Handpicked places by our team,Morbi convallis bibendum urna ut viverra.
Maecenas quis consequat libero," />
                        </div>
                        <RecommendedPlace />
                    </div>
                </section>

                {/* FunFacts */}
                <section className="funfact-area section-bg-2 padding-top-100px padding-bottom-50px text-center">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Numbers Say Everything" titleClass="text-white" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>

                        <FunFactsTwo />
                    </div>
                </section>

                {/* How It Work */}
                <section className="hiw-area padding-top-100px padding-bottom-80px after-none text-center">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="What We Offer" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>

                        <InfoBox4 />
                    </div>
                </section>

                {/* Authors */}
                <section className="author-area padding-top-100px padding-bottom-100px">
                    <div className="container-fluid">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Meet Top Authors" titleClass="text-white" desc="Top 700+ famous authors on the Dirto. consectetur adipisicing elit Adipisci culpa possimus quis  voluptatibus!" />
                        </div>

                        <Authors />
                    </div>
                </section>

                {/* Testimonial */}
                <section className="testimonial-area padding-top-100px padding-bottom-100px text-center">
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

                <SectionDivider />

                {/* Blog */}
                <section className="blog-area padding-top-100px padding-bottom-80px">
                    <div className="container">
                        <div className="row section-title-width section-title-ml-mr-0">
                            <div className="col-lg-8">
                                <SectionsHeading title="Latest Tips & Articles" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                            </div>
                            <div className="col-lg-4">
                                <div className="btn-box h-100 d-flex align-items-center justify-content-end">
                                    <Button text="view all post" url="/blog-grid" className=" margin-top-100px" />
                                </div>
                            </div>
                        </div>

                        <LatestBlog />
                    </div>
                </section>

                {/* CTA 2 */}
                <section className="cta-area cta-area3 padding-top-100px padding-bottom-100px section-bg">
                    <CtaOne />
                </section>

                {/* Client Logo */}
                <ClientLogo />

                {/* NewsLetter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}

export default Home2;