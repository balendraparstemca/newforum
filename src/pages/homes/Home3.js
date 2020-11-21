import React, {Component} from 'react';
import HeaderTwo from "../../components/common/HeaderTwo";
import Banner3 from "../../components/banner/banner3/Banner3";
import SectionsHeading from "../../components/common/SectionsHeading";
import BrowseCategories from "../../components/other/categories/BrowseCategories";
import PlaceOne from "../../components/places/PlaceOne";
import SectionDivider from "../../components/common/SectionDivider";
import DreamPlaces from "../../components/places/DreamPlaces";
import Button from "../../components/common/Button";
import { RiRefreshLine } from 'react-icons/ri';
import InfoBox5 from "../../components/other/infoboxes/InfoBox5";
import HowItWork3 from "../../components/hiw/HowItWork3";
import CtaOne from "../../components/other/cta/CtaOne";
import Testimonial from "../../components/sliders/Testimonial";
import LatestBlog from "../../components/blogs/LatestBlog";
import ClientLogo from "../../components/sliders/ClientLogo";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";

class Home3 extends Component {
    state = {
        bannerImg: require('../../assets/images/hero-bg3.jpg'),
        tmimage: [
            {
                tmimg: require('../../assets/images/testi-img1.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img2.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img3.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img4.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img5.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img6.jpg')
            }
        ]
    }
    render() {
        return (
            <main className="home-3">
                {/* Header */}
                <HeaderTwo />

                {/* Banner Three */}
                <Banner3 bgImg={this.state.bannerImg} />

                {/* Browse Categories */}
                <section className="hero-catagory section-bg padding-top-100px padding-bottom-80px text-center">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="What do you need to find?" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>

                        <BrowseCategories />
                    </div>
                </section>

                {/* Most Visited Place */}
                <section className="card-area text-center padding-top-100px padding-bottom-100px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Most Visited Places" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>

                        <PlaceOne />
                    </div>
                </section>

                <SectionDivider />

                {/* Dream Places */}
                <section className="cat-area destination-area padding-top-100px padding-bottom-100px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Explore Your Dream Places" desc="Explore most popular destination and places, Morbi convallis bibendum urna ut viverra. Maecenas," />
                        </div>

                        <DreamPlaces />

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="button-shared mt-4 text-center">
                                    <Button text="load more" url="#">
                                        <RiRefreshLine />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SectionDivider />

                {/* How it work 1 */}
                <section className="hiw-area choose-area padding-top-100px padding-bottom-80px after-none">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Why Choose Us" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>

                        <InfoBox5 />
                    </div>
                </section>

                {/* How it work 2 */}
                <HowItWork3 />

                {/* CTA 2 */}
                <section className="cta-area cta-area3 padding-top-60px padding-bottom-100px">
                    <CtaOne />
                </section>

                <SectionDivider />

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

                <SectionDivider />

                {/* Blog */}
                <section className="blog-area padding-top-100px padding-bottom-80px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                                <SectionsHeading title="Latest Tips & Articles" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>

                        <LatestBlog />

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="btn-box text-center mt-4">
                                    <Button text="browse posts" url="/blog-grid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SectionDivider />

                {/* Client Logo */}
                <ClientLogo />

                {/* Cta Two */}
                <section className="cta-area cta-area3 column-sm-center section-bg-2 padding-top-70px padding-bottom-70px">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-9 text-left">
                                <SectionsHeading title="Dirto is the best way to find & discover great local businesses" titleClass=" mb-3 text-white font-size-28" descClass=" font-size-17" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero" />
                            </div>

                            <div className="col-lg-3">
                                <div className="btn-box">
                                    <Button text="Create Account" url="/sign-up" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}

export default Home3;