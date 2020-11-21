import React, {Component} from 'react';
import {FiRefreshCw} from "react-icons/fi";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import PlaceListing from "../../components/places/PlaceListing";
import ListingListSidebar from "../../components/sidebars/ListingListSidebar";
import Button from "../../components/common/Button";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import GenericHeader from "../../components/common/GenericHeader";

class ListingList extends Component {
    state = {
        breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
    }
    render() {
        return (
            <main className="listing-list">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Listing List" MenuPgTitle="Listings" img={this.state.breadcrumbimg} />

                {/* Place List */}
                <section className="card-area padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <GenericHeader />
                            </div>

                            <div className="col-lg-8">
                                <PlaceListing />
                            </div>

                            <div className="col-lg-4">
                                <ListingListSidebar />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="button-shared text-center">
                                    <Button text="load more" url="#" className="border-0">
                                        <span className="d-inline-block">
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

export default ListingList;