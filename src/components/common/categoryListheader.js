import React, { Component } from 'react';
import { BsBookmark, BsGrid, BsListCheck, BsListUl } from "react-icons/bs";
import Select from "react-select";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom";
import ListingList from '../../pages/listings/ListingList';
import ListingGrid from '../../pages/listings/ListingGrid';
import GeneralHeader from './GeneralHeader';
import Breadcrumb from './Breadcrumb';
import NewsLetter from '../other/cta/NewsLetter';
import Footer from './footer/Footer';
import ScrollTopBtn from './ScrollTopBtn';


const shortby = [
    {
        value: 0,
        label: 'Short by'
    },
    {
        value: 1,
        label: 'Short by default'
    },
    {
        value: 2,
        label: 'High Rated'
    },
    {
        value: 3,
        label: 'Most Reviewed'
    },
    {
        value: 4,
        label: 'Popular Listing'
    },
    {
        value: 5,
        label: 'Newest Listing'
    },
    {
        value: 6,
        label: 'Older Listing'
    },
    {
        value: 7,
        label: 'Price: low to high'
    },
    {
        value: 8,
        label: 'Price: high to low'
    },
    {
        value: 9,
        label: 'Price: high to low'
    },
    {
        value: 10,
        label: 'Random listing'
    }
]

class CategoryListHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isloading: false,
            community: '',
            reporttext: "",
            img: require('../../assets/images/post.png'),
            userimg: require('../../assets/images/testi-img2.jpg')
        }

    }



    render() {
        return (
            <>
                <main className="listing-list">
                    {/* Header */}
                    <GeneralHeader />

                    {/* Breadcrumb */}
                    <Breadcrumb CurrentPgTitle="Category List" MenuPgTitle="Listings" />


                    <div className="container">
                        <Tabs>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="generic-header margin-bottom-30px">
                                        <p className="showing__text text-left">
                                            {this.state.title}
                                        </p>
                                        <div className="short-option mr-3">
                                            <Select
                                                value={this.selectedShortby}
                                                onChange={this.handleChangeshortby}
                                                placeholder="Short by"
                                                options={shortby}
                                            />
                                        </div>
                                        <TabList className="nav nav-tabs border-0" id="nav-tab">


                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><BsListUl /></span>
                                                </Link>
                                            </Tab>

                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><BsGrid /></span>
                                                </Link>
                                            </Tab>



                                        </TabList>

                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="tab-content" id="nav-tabContent">
                                        <TabPanel>
                                            <ListingList />
                                        </TabPanel>

                                        <TabPanel>

                                            <ListingGrid />
                                        </TabPanel>
                                    </div>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </main>
                {/* Newsletter */}
             

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

            </>
        );
    }
}

export default CategoryListHeader;
