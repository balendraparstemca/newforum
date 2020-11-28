import React, { Component } from 'react';
import { BsGrid, BsListUl } from "react-icons/bs";
import Select from "react-select";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom";
import ListingGrid from '../../pages/listings/ListingGrid';
import GeneralHeader from './GeneralHeader';
import Breadcrumb from './Breadcrumb';
import Footer from './footer/Footer';
import ScrollTopBtn from './ScrollTopBtn';
import WidgetSearch from '../sidebars/widgets/WidgetSearch';
import { FiRefreshCw } from "react-icons/fi";
import { IoIosCheckmarkCircle, IoIosLink, IoMdStar, IoMdStarHalf } from "react-icons/io";
import { FiHeart, FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import $ from 'jquery'
import Button from "../../components/common/Button";
import moment from 'moment';
import { fetchAmenties } from '../../services/action/common';
import { getCategorylist, gethomeList, likeList } from '../../services/action/list';
import { connect } from "react-redux";
import { BsEye } from 'react-icons/bs';
import WidgetFilterPrice from '../sidebars/widgets/WidgetFilterPrice';
import WidgetFilterTags from '../sidebars/widgets/WidgetFilterTags';
import WidgetFilterFeatures from '../sidebars/widgets/WidgetFilterFeatures';
import WidgetSortBy from '../sidebars/widgets/WidgetSortBy';
import WidgetFilterRatings from '../sidebars/widgets/WidgetFilterRatings';

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

class ListHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isloading: false,
            alllists: [],
            author: require('../../assets/images/testi-img2.jpg'),
            listimage: require('../../assets/images/bread-bg.jpg'),
            bdimg: require('../../assets/images/bread-bg.jpg'),
            bedge: 'New Open',
            category: [],
            amentieslist: [],
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.5',
            filter: [],
            mainlists: [],
            paramid: null,
            features:[]
        }

    }

    componentDidMount() {
        if (this.props.match.params.category) {
            this.setState({ paramid: this.props.match.params.category });
            this.fetchCategorylists(this.props.match.params.category)
        } else {
            this.fetchHomelists();

        }


        $(document).ready(function () {
            let catbox = document.querySelector('.sidebar-widget .filter-by-category');
            let height = catbox.offsetHeight
            $(".sidebar-widget .filter-by-category").css({ height: '244px', overflow: 'hidden' })

            $(document).on('click', '#showfilterbycategory', function () {
                $(".sidebar-widget .filter-by-category").css({ height: height, overflow: 'hidden' })
                $(this).addClass('lessfilterbyfeature');
            })
            $(document).on('click', '.lessfilterbyfeature', function () {
                $(".sidebar-widget .filter-by-category").css({ height: '244px', overflow: 'hidden' })
                $(this).removeClass('lessfilterbyfeature');
            })

            
        })

       

    }

    componentDidUpdate(prevProps) {
        if (this.state.paramid !== this.props.match.params.category) {
            this.setState({ paramid: this.props.match.params.category });
            if (this.props.match.params.category) {

                this.fetchCategorylists(this.props.match.params.category)
            } else {
                this.fetchHomelists();

            }


        }

    }


    category() {
        const array = this.state.alllists;
        const result = [];
        const map = new Map();
        let count = 0;
        for (const item of array) {
            if (map.has(item.categoryname)) {
                let objIndex = result.findIndex((obj => obj.cat == item.categoryname));
                result[objIndex].catNum = result[objIndex].catNum + 1;

            }
            else {
                map.set(item.categoryname, true);    // set any value to Map
                result.push({
                    id: item.categoryid,
                    cat: item.categoryname,
                    catNum: 1

                });
            }
        }


        this.setState({ category: result })

    }

    allfeatures() {
      console.log(this.state.amentieslist);
            const array =this.state.amentieslist && this.state.amentieslist;
            const result = [];
            const map = new Map();
            for (const item of array) {
                if(!map.has(item.amenties_name)){
                    map.set(item.amenties_name, true);    // set any value to Map
                    result.push({
                        id:item.amenties_id,
                        text: item.amenties_name
                    });
                }
            }
    
            console.log(result);
            this.setState({features:result})
        }
    



    like = (listingid) => {
        if (this.props.userdetails) {
            const obj = {
                listing_id: listingid,
                like_by: this.props.userdetails.id
            }
            this.props.dispatch(likeList(obj)).then(() => {
                if (this.props.category) {
                    this.fetchCategorylists(this.props.category)
                } else {
                    this.fetchHomelists();

                }

            })
        }
        else {
            alert("login first")
        }
    }

    fetchHomelists = () => {
        this.props.dispatch(gethomeList()).then(() => {
            this.setState({
                alllists: this.props.lists, mainlists: this.props.lists
            })
            this.category();
        });
    }

    handleChange = (e) => {
        if (e.currentTarget.checked) {
            this.state.filter.push(e.currentTarget.value)
        }
        else {
            let index = this.state.filter.indexOf(e.currentTarget.value);
            if (index > -1) {
                this.state.filter.splice(index, 1);
            }
        }

        console.log(this.state.filter);
        this.filter()
    }

    filter() {
        let lists = this.state.mainlists;

        let filterarr = this.state.filter;
        if (filterarr.length > 0) {

            let arr = lists.filter(function (item) {
                return filterarr.includes(item.categoryname);
            });

            this.setState({ alllists: arr })
        }

        else {
            this.setState({ alllists: lists })

        }


    }

    fetchCategorylists = (id) => {
        this.props.dispatch(getCategorylist(id)).then(() => {
            this.setState({
                alllists: this.props.categorylists, mainlists: this.props.categorylists
            })
            this.props.dispatch(fetchAmenties(id)).then(() => {
                this.setState({ amentieslist: this.props.amenties  })
                this.allfeatures();
            })
            this.category();
        });
    
    }



    render() {
       
       
        return (
            <>
                <main className="listing-list">
                    {/* Header */}
                    <GeneralHeader />

                    {/* Breadcrumb */}
                    <Breadcrumb CurrentPgTitle="Listing List" MenuPgTitle="Listings" />


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

                                            <div className="row">


                                                <div className="col-lg-8">
                                                    {this.state.alllists && this.state.alllists.length === 0 ?
                                                        (
                                                            <div className="btn-box text-center padding-top-30px">
                                                                <Button url="#" text="there is no  list " className=" d-block">
                                                                    <span><BsEye /></span>
                                                                </Button>
                                                            </div>
                                                        ) : this.state.alllists.map((item, index) => {
                                                            return (
                                                                <div className="card-item card-listing d-flex" key={index}>
                                                                    <Link to={`/listing-details/${item.canonicalurl}`} className="card-image-wrap">
                                                                        <div className="card-image">
                                                                            <img src={item.bannerimg ? `http://localhost:7999/api/v1/utilities/${item.bannerimg}` : this.state.listimage} className="card__img" alt={item.list_title} />
                                                                            <span className='badge'>{this.state.bedge}</span>
                                                                            <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                                                <FiHeart />
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                    <div className="card-content-wrap">
                                                                        <div className="card-content">
                                                                            <Link to={`/listing-list/${item.categoryid}`}>
                                                                                <h5 className="card-meta">
                                                                                    <span></span> {item.categoryname}
                                                                                </h5>
                                                                            </Link>
                                                                            <Link to={`/listing-details/${item.canonicalurl}`}>

                                                                                <h4 className="card-title">{item.list_title}
                                                                                    <i><IoIosCheckmarkCircle /></i>
                                                                                </h4>
                                                                                <p className="card-sub">
                                                                                    {item.address}
                                                                                </p>
                                                                            </Link>
                                                                            <Link to={`/user-profile/${item.username}`} className="author-img" >
                                                                                <img src={item.profileimg ? `http://localhost:7999/api/v1/utilities/${item.profileimg}` : this.state.author} alt="author-img" />
                                                                            </Link>
                                                                            <ul className="info-list padding-top-20px">
                                                                                <li><span className="la d-inline-block"><FiPhone /></span> {item.phone}</li>
                                                                                <li><span className="la d-inline-block"><IoIosLink /></span>  <a href={item.website}>
                                                                                    {item.website.replace(/^https:\/\//, '')}
                                                                                </a>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="la d-inline-block"><FaRegCalendarCheck /></span>posted {moment(Number(item.creating_time)).fromNow()}
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="rating-row">
                                                                            <div className="rating-rating">
                                                                                {this.state.ratings.map((rating, index) => {
                                                                                    return (
                                                                                        <span key={index}>{rating}</span>
                                                                                    )
                                                                                })}
                                                                                <span className="rating-count">{this.state.ratingNum}</span>
                                                                            </div>
                                                                            <div className="listing-info">
                                                                                <ul>
                                                                                    <li onClick={() => this.like(item.listing_id)}>
                                                                                        <span className="info__count">   <FiHeart /></span> {item.likes}
                                                                                    </li>

                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
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

                                                <div className="col-lg-4">
                                                    <div className="sidebar">
                                                        <WidgetSearch />
                                                        {<div className="sidebar-widget">
                                                            <h3 className="widget-title">
                                                                {this.state.title}
                                                            </h3>
                                                            <div className="title-shape"></div>
                                                            <div className="check-box-list show-more-item filter-by-category mt-4 mb-4">

                                                                {this.state.category && this.state.category.map(item => {
                                                                    return (
                                                                        <div className="custom-checkbox" key={item.id}>
                                                                            <input type="checkbox" id={'chb' + item.id} value={item.cat} onChange={(e) => this.handleChange(e)} />
                                                                            <label htmlFor={'chb' + item.id}>
                                                                                {item.cat} <span>{item.catNum}</span>
                                                                            </label>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                            <Link to="#" id="showfilterbycategory" className="showmore-btn font-weight-semi-bold text-capitalize d-block ml-auto mr-auto text-center radius-rounded p-0">
                                                                <span className="showmore-txt ">Show More</span>
                                                                <span className="lessmore-txt d-none">Show Less</span>
                                                            </Link>
                                                        </div>}
                                                        <WidgetFilterPrice />

                                                        <div className="sidebar-widget">
                                                            <h3 className="widget-title">
                                                                Filter By Feature
                                                            </h3>
                                                            <div className="title-shape"></div>
                                                            <div className="check-box-list show-more-item filter-by-feature mt-4 mb-4">
                                                                {this.state.features.map(item => {
                                                                    return (
                                                                        <div className="custom-checkbox" key={item.id}>
                                                                            <input type="checkbox" id={'chb2-' + item.id} />
                                                                            <label htmlFor={'chb2-' + item.id}>
                                                                                {item.text}
                                                                            </label>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                            <Link to="#" id="showfilterbyfeature" className="showmore-btn font-weight-semi-bold text-capitalize d-block ml-auto mr-auto text-center  radius-rounded p-0">
                                                                <span className="showmore-txt ">Show More</span>
                                                                <span className="lessmore-txt d-none">Show Less</span>
                                                            </Link>
                                                        </div>
                                                        <WidgetSortBy />
                                                        <WidgetFilterRatings />


                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>

                                        <TabPanel>

                                            <div className="row">
                                                {this.state.alllists && this.state.alllists.length === 0 ?
                                                    (
                                                        <div className="btn-box text-center padding-top-30px">
                                                            <Button url="#" text="there is no  list " className=" d-block">
                                                                <span><BsEye /></span>
                                                            </Button>
                                                        </div>
                                                    ) : this.state.alllists.map((item, index) => {
                                                        return (
                                                            <div className="col-lg-4 column-td-6" key={index}>
                                                                <div className="card-item">
                                                                    <Link to={`/listing-details/${item.canonicalurl}`} className="card-image-wrap">
                                                                        <div className="card-image">
                                                                            <img src={item.bannerimg ? `http://localhost:7999/api/v1/utilities/${item.bannerimg}` : item.listimage} className="card__img" alt={item.list_title} />
                                                                            <span className='badge'>{this.state.bedge}</span>
                                                                            <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                                                <FiHeart />
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                    <div className="card-content-wrap">
                                                                        <div className="card-content">
                                                                            <Link to={`/listing-list/${item.categoryid}`}>
                                                                                <h5 className="card-meta">
                                                                                    <span></span> {item.categoryname}
                                                                                </h5>
                                                                            </Link>

                                                                            <Link to={`/listing-details/${item.canonicalurl}`}>

                                                                                <h4 className="card-title">{item.list_title}
                                                                                    <i><IoIosCheckmarkCircle /></i>
                                                                                </h4>
                                                                                <p className="card-sub">
                                                                                    {item.address}
                                                                                </p>
                                                                            </Link>
                                                                            <Link to={`/user-profile/${item.username}`} className="author-img" >
                                                                                <img src={item.profileimg ? `http://localhost:7999/api/v1/utilities/${item.profileimg}` : this.state.author} alt="author-img" />
                                                                            </Link>
                                                                            <ul className="info-list padding-top-20px">
                                                                                <li><span className="la d-inline-block"><FiPhone /></span> {item.phone}</li>
                                                                                <li><span className="la d-inline-block"><IoIosLink /></span>  <a href={item.website}>
                                                                                    {item.website.replace(/^https:\/\//, '')}
                                                                                </a>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="la d-inline-block"><FaRegCalendarCheck /></span>posted {moment(Number(item.creating_time)).fromNow()}
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="rating-row">
                                                                            <div className="rating-rating">

                                                                            </div>
                                                                            <div className="listing-info">
                                                                                <ul>
                                                                                    <li onClick={() => this.like(item.listing_id)}><span className="info__count"><FiHeart /></span>{item.likes}</li>

                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
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

function mapStateToProps(state) {
    const { isLoggedIn, userdetails } = state.auth;
    const { lists, categorylists } = state.list;
    const { amenties } = state.common;
    return {
        isLoggedIn, userdetails, lists, categorylists, amenties

    };
}
export default connect(mapStateToProps)(ListHeader);
