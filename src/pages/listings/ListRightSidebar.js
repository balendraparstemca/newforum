import React, {Component} from 'react';
import {BsGrid, BsListUl} from "react-icons/bs";
import {FiRefreshCw} from "react-icons/fi";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import {Link} from "react-router-dom";
import ListingListSidebar from "../../components/sidebars/ListingListSidebar";
import Button from "../../components/common/Button";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import PlaceTwoColumn from "../../components/places/PlaceTwoColumn";
import Select from "react-select";

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

class ListRightSidebar extends Component {
    state = {
        selectedCatOp: null,
        title: 'Showing 1 to 6 of 30 entries',
        breadImg: require('../../assets/images/bread-bg.jpg'),
        navs: [
            {
                path: '/listing-list',
                icon: <BsListUl />,
                active: false,
            },
            {
                path: '/listing-grid',
                icon: <BsGrid />,
                active: false,
            }
        ],
        shortby: [
            {
                id: 0,
                title: 'Short by'
            },
            {
                id: 1,
                title: 'Short by default'
            },
            {
                id: 2,
                title: 'High Rated'
            },
            {
                id: 3,
                title: 'Most Reviewed'
            },
            {
                id: 4,
                title: 'Popular Listing'
            },
            {
                id: 5,
                title: 'Newest Listing'
            },
            {
                id: 6,
                title: 'Older Listing'
            },
            {
                id: 7,
                title: 'Price: low to high'
            },
            {
                id: 8,
                title: 'Price: high to low'
            },
            {
                id: 9,
                title: 'Price: high to low'
            },
            {
                id: 10,
                title: 'Random listing'
            }
        ]
    }
    handleChangeshortby = () => {
        const { selectedShortby } = this.state;
        this.setState(
            { selectedShortby }
        );
    }
    render() {
        return (
            <main className="list-right-sidebar">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="List Right Sidebar" MenuPgTitle="Listings" img={this.state.breadImg} />

                {/* Place List */}
                <section className="card-area padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-12">
                                <div className="generic-header margin-bottom-30px">
                                    <ul className="generic-nav">
                                        {this.state.navs.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link to={item.path} className={ item.active ? 'active': ' '}>
                                                        <span className="d-inline-block">
                                                            {item.icon}
                                                        </span>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <div className="short-option ml-3">
                                        <Select
                                            value={this.selectedShortby}
                                            onChange={this.handleChangeshortby}
                                            placeholder="Short by"
                                            options={shortby}
                                        />
                                    </div>
                                    <p className="showing__text text-right">
                                        {this.state.title}
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-8 row align-items-start">
                                <PlaceTwoColumn />
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

export default ListRightSidebar;