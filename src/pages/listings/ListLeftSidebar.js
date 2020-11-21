import React, {Component} from 'react';
import {FiRefreshCw} from "react-icons/fi";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import ListingListSidebar from "../../components/sidebars/ListingListSidebar";
import Button from "../../components/common/Button";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import PlaceTwoColumn from "../../components/places/PlaceTwoColumn";
import GenericHeader from "../../components/common/GenericHeader";

class ListLeftSidebar extends Component {
    state = {
        breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
    }
    render() {
        return (
            <main className="list-left-sidebar">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="List Left Sidebar" MenuPgTitle="Listings" img={this.state.breadcrumbimg} />

                {/* Place List */}
                <section className="card-area padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-12">
                                <GenericHeader />
                            </div>

                            <div className="col-lg-4">
                                <ListingListSidebar />
                            </div>

                            <div className="col-lg-8 row align-items-start">
                                <PlaceTwoColumn />
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

export default ListLeftSidebar;