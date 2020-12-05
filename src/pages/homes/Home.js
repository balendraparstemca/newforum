import React, {Component} from 'react'
import GeneralHeader from '../../components/common/GeneralHeader'
import BannerOne from '../../components/banner/banner1/BannerOne'
import SectionsHeading from "../../components/common/SectionsHeading";
import PopularCategories from "../../components/other/categories/PopularCategories";
import HowItWorkOne from "../../components/hiw/hiw1/HowItWorkOne";
import PlaceOne from "../../components/places/PlaceOne";
import FunFactsOne from "../../components/other/funfacts/funfacts1/FunFactsOne";
import InfoBox2 from "../../components/other/infoboxes/InfoBox2";
import Button from "../../components/common/Button";
import Testimonial from "../../components/sliders/Testimonial";
import SectionDivider from "../../components/common/SectionDivider";
import LatestBlog from "../../components/blogs/LatestBlog";
import CtaOne from "../../components/other/cta/CtaOne";
import ClientLogo from "../../components/sliders/ClientLogo";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import BrowseCategoriesTwo from '../../components/other/categories/BrowseCategoriesTwo';


export default class Home extends Component {
    ctaimages = {
        images: [
            {
                img: require('../../assets/images/symble1.png')
            },
            {
                img: require('../../assets/images/symble2.png')
            },
            {
                img: require('../../assets/images/symble3.png')
            },
            {
                img: require('../../assets/images/symble4.png')
            }
        ]
    }

    tmimages = {
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
            <main className="home-1">
                {/* Header */}
                <GeneralHeader />

                {/* Hero Banner */}
                <BannerOne />

                {/* Popular Categories */}
                <section className="cat-area padding-top-10px padding-bottom-10px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Browse by Categories" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>
                        <div className="row mt-5">
                          
                           <PopularCategories/>
                        </div>
                    </div>
                </section>

                {/* How It Work */}
               

                {/* Most Visited Place */}
                <section className="card-area text-center padding-bottom-10px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Most Visited Places" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>

                        <PlaceOne />
                    </div>
                </section>

              

                {/* How It Word */}
                <section className="hiw-area padding-top-10px padding-bottom-10px after-none text-center">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="What We Offer" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>

                        <InfoBox2 />
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-area section-bg column-sm-center padding-top-10px padding-bottom-10px">
                    {this.ctaimages.images.map((img, index) => {
                        return (
                            <img src={img.img} key={index} alt="Cta Symble" className="symble-img"/>
                        )
                    })}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-9 text-left">
                                <SectionsHeading title="Dirto is the best way to find & discover great local businesses" titleClass=" mb-3 font-size-28" descClass=" font-size-17" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero" />
                            </div>

                            <div className="col-lg-3">
                                <div className="btn-box">
                                    <Button text="Create Account" url="/sign-up" />
                                </div>
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

              

                {/* Client Logo */}
                <ClientLogo />

                {/* NewsLetter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />
            </main>
        )
    }
}
