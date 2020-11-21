import React, {Component} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import PopularDestination from "../../components/places/PopularDestination";
import Button from "../../components/common/Button";
import {FiRefreshCw} from "react-icons/fi";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";

class TopPlaces extends  Component {
    state = {
        breadcrumbImg: require('../../assets/images/bread-bg.jpg'),
    }
    render() {
        return (
            <main className="top-places">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Top Places" MenuPgTitle="Categories" img={this.state.breadcrumbImg} />

                {/* Top Places */}
                <section className="cat-area destination-area padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <PopularDestination />
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="button-shared mt-4 text-center">
                                    <Button text="Load More" url="#">
                                    <span className="la">
                                        <FiRefreshCw />
                                    </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cta */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}

export default TopPlaces;