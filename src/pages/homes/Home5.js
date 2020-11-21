import React, {Component} from 'react';
import HeaderTwo from "../../components/common/HeaderTwo";
import BannerOneSearchInput from "../../components/banner/banner1/BannerOneSearchInput";
import PopularCategoriesTwo from "../../components/other/categories/PopularCategoriesTwo";
import SectionsHeading from "../../components/common/SectionsHeading";
import BrowseCategoriesTwo from "../../components/other/categories/BrowseCategoriesTwo";
import IconBoxTwo from "../../components/other/iconboxes/IconBoxTwo";
import PlaceOne from "../../components/places/PlaceOne";
import FunFactsOne from "../../components/other/funfacts/funfacts1/FunFactsOne";
import Testimonial from "../../components/sliders/Testimonial";
import SectionDivider from "../../components/common/SectionDivider";
import LatestBlog from "../../components/blogs/LatestBlog";
import CtaOne from "../../components/other/cta/CtaOne";
import ClientLogo from "../../components/sliders/ClientLogo";
import Button from "../../components/common/Button";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import MapViewCluster from "../../components/contact/MapViewCluster";

class Home5 extends Component {
    state = {
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
            <main className="home-5">
                {/* Header */}
                <HeaderTwo />

                {/* Mapview */}
                <MapViewCluster />

                {/* Popular Categories */}
                <section className="hero-wrapper5 section-bg padding-top-50px padding-bottom-40px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BannerOneSearchInput />

                                <div className="hero-catagory after-none text-center mt-4">
                                    <PopularCategoriesTwo />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Browse Categories */}
                <section className="cat-area padding-top-100px padding-bottom-90px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Browse by Categories" titleClass=" before-none pt-0" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>

                        <BrowseCategoriesTwo />
                    </div>
                </section>

                {/* How it work */}
                <section className="hiw-area text-center padding-top-100px padding-bottom-80px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="How Dirto Works" titleClass=" before-none pt-0" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>

                        <IconBoxTwo />
                    </div>
                </section>

                {/* Most Visited Place */}
                <section className="card-area text-center padding-top-100px padding-bottom-100px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Most Visited Places" titleClass=" before-none pt-0" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>

                        <PlaceOne />
                    </div>
                </section>

                {/* FunFacts */}
                <section className="funfact-area section-bg-2 padding-top-100px padding-bottom-50px text-center">
                    <div className="container">
                        <div className="row section-title-width">
                            <SectionsHeading title="Numbers Say Everything" titleClass=" text-white before-none pt-0" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>

                        <FunFactsOne />
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
                            <SectionsHeading title="What Our Users Said" titleClass=" before-none pt-0" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
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
                            <SectionsHeading title="Latest Tips & Articles" titleClass=" before-none pt-0" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
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

                {/* Cta Two */}
                <section className="cta-area cta-area3 column-sm-center section-bg-2 padding-top-70px padding-bottom-70px">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-9 text-left">
                                <SectionsHeading title="Dirto is the best way to find & discover great local businesses" titleClass=" before-none pt-0 mb-3 text-white font-size-28" descClass=" font-size-17" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero" />
                            </div>

                            <div className="col-lg-3">
                                <div className="btn-box">
                                    <Button text="Create Account" className=" bg-white color-text-2" url="/sign-up" />
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

export default Home5;