import React, {Component} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import PlaceGrid from "../../components/places/PlaceGrid";
import Button from "../../components/common/Button";
import {FiRefreshCw} from "react-icons/fi";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import GenericHeader from "../../components/common/GenericHeader";

class ListingGrid extends Component {
    state = {
        bdimg: require('../../assets/images/bread-bg.jpg'),
    }
    render() {
        return (
            <main className="listing-grid">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Listing Grid" MenuPgTitle="Listings" img={this.state.bdimg}/>

                {/* Place Grid */}
                <section className="card-area padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <GenericHeader />
                            </div>
                        </div>

                        <div className="row">
                        <PlaceGrid />
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

                {/* Newsletter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />
            </main>
        );
    }
}

export default ListingGrid;