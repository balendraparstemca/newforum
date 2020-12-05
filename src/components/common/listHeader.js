import React, { Component } from 'react';
import { BsGrid, BsListUl } from "react-icons/bs";
import Select from "react-select";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
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
import { MdStar } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';

const shortby = [
    {
        value: 1,
        label: 'Short by default'
    },
    {
        value: 2,
        label: 'High Rated',

    },
    {
        value: 3,
        label: 'Popular Listing'
    },
    {
        value: 4,
        label: 'Newest Listing'
    },
    {
        value: 5,
        label: 'Older Listing'
    },
    {
        value: 6,
        label: 'Price: low to high'
    },
    {
        value: 7,
        label: 'Price: high to low'
    },
    {
        value: 8,
        label: 'Price: high to low'
    },

]

class ListHeader extends Component {
    constructor(props) {
        super(props);
        this.loadMore = this.loadMore.bind(this);
        this.state = {
            isloading: false,
            alllists: [],
            author: require('../../assets/images/testi-img2.jpg'),
            listimage: require('../../assets/images/bread-bg.jpg'),
            breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
            bedge: 'New Open',
            category: [],
            amentieslist: [],
            filter: [],
            mainlists: [],
            mediaterlist: [],
            paramid: null,
            features: [],
            country: [{
                value: 'All',
                label: 'All'
            }],
            region: [{
                value: 'All',
                label: 'All'
            }],
            place: [],
            featurefilter: [],
            visible: 4,
            selectedShortby: null,
            selectedCountryby: null,
            selectedRegion: null
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

    loadMore() {
        this.setState((prev) => {
            return { visible: prev.visible + 4 };
        });
    }


    category = () => {
        const array = this.state.alllists;
        this.setState({ category: [] })
        const result = [];
        const map = new Map();
        let count = 0;
        for (const item of array) {
            if (map.has(item.listing.categoryname)) {
                let objIndex = result.findIndex((obj => obj.cat == item.listing.categoryname));
                result[objIndex].catNum = result[objIndex].catNum + 1;

            }

            else {
                map.set(item.listing.categoryname, true);    // set any value to Map
                result.push({
                    id: item.listing.categoryid,
                    cat: item.listing.categoryname,
                    catNum: 1

                });
            }
        }
        this.setState({ category: result })

    }


    Region = () => {
        const array = this.state.mediaterlist;
        this.setState({ region: [] })
        const result = [{
            value: 'All',
            label: 'All'
        }];
        const map = new Map();
        let count = 0;
        for (const item of array) {

            if (!map.has(item.listing.state)) {
                map.set(item.listing.state, true);    // set any value to Map
                result.push({
                    value: item.listing.state,
                    label: item.listing.state
                });
            }
        }

        result.push()

        this.setState({ region: result })


    }

    country = () => {
        const array = this.state.alllists;
        this.setState({
            country: [{
                value: 'All',
                label: 'All'
            }]
        })
        const map = new Map();
        let count = 0;
        for (const item of array) {

            if (!map.has(item.listing.country)) {
                map.set(item.listing.country, true);    // set any value to Map
                this.state.country.push({
                    value: item.listing.country,
                    label: item.listing.country
                });
            }
        }
    }

    allfeatures() {
        console.log(this.state.amentieslist);
        const array = this.state.amentieslist && this.state.amentieslist;
        const result = [];
        const map = new Map();
        for (const item of array) {
            if (!map.has(item.amenties_name)) {
                map.set(item.amenties_name, true);    // set any value to Map
                result.push({
                    id: item.amenties_id,
                    text: item.amenties_name
                });
            }
        }

        console.log(result);
        this.setState({ features: result })
    }




    like = (listingid) => {
        if (this.props.userdetails) {
            const obj = {
                listing_id: listingid,
                like_by: this.props.userdetails.id
            }
            this.props.dispatch(likeList(obj)).then(() => {
                if (this.props.match.params.category) {
                    this.fetchCategorylists(this.props.match.params.category)
                } else {
                    this.fetchHomelists();

                }

            })
        }
        else {
            alert("login first")
        }
    }



    handleChange = (e) => {
        if (e.currentTarget.checked) {
            this.props.history.push(`/listing-list/${e.currentTarget.id.substring(3)}`);
            this.state.filter.push(e.currentTarget.value)
        }
        else {
            this.props.history.push(`/listing-list`);
            let index = this.state.filter.indexOf(e.currentTarget.value);
            if (index > -1) {
                this.state.filter.splice(index, 1);
            }
        }

        console.log(this.state.filter);
        // this.filter()
    }

    handleFeatureChange = (e) => {
        if (e.currentTarget.checked) {
            this.state.featurefilter.push(e.currentTarget.value)
        }
        else {
            let index = this.state.featurefilter.indexOf(e.currentTarget.value);
            if (index > -1) {
                this.state.featurefilter.splice(index, 1);
            }
        }
        console.log(this.state.featurefilter);
        this.featurefilter()

    }

    handleRatingFilter = async (e) => {
        let lists = this.state.mediaterlist;
        if (e.currentTarget.checked) {
            let arr = lists.filter(function (item) {
                return parseFloat(item.rating[0].rating) >= e.target.value;
            });

            console.log(arr);

            this.setState({ alllists: arr })

        }

    }

    /* filter() {
         let lists = this.state.mediaterlist;
 
         let filterarr = this.state.filter;
         if (filterarr.length > 0) {
 
             let arr = lists.filter(function (item) {
                 return filterarr.includes(item.listing.categoryname);
             });
 
             this.setState({ alllists: arr })
         }
 
         else {
             this.setState({ alllists: lists })
 
         }
     }*/

    featurefilter() {
        let lists = this.state.mediaterlist;

        let filterarr = this.state.featurefilter;
        if (filterarr.length > 0) {

            let arr = lists.filter(function (item) {
                return item.amenties.some(g => filterarr.includes(g.amenties_name))
            });

            console.log(arr)

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
                this.setState({ amentieslist: this.props.amenties })
                this.allfeatures();
            })
            this.country()
            this.handleChangeCountryby({ value: "All", label: 'All' })
        });

    }

    fetchHomelists = () => {
        this.props.dispatch(gethomeList()).then(() => {
            this.setState({
                alllists: this.props.lists, mainlists: this.props.lists
            })
            this.country()
            this.handleChangeCountryby({ value: "All", label: 'All' })
        });
    }

    sortByhighrating = () => {
        let lists = this.state.mainlists;

        let arr = lists.sort(function (a, b) {
            return parseFloat(b.rating[0].rating) - parseFloat(a.rating[0].rating);
        });

        this.setState({ alllists: arr })
    }


    sortBypopular = () => {

        let lists = this.state.mainlists;

        let arr = lists.sort(function (a, b) {
            return Number(b.listing.likes) - Number(a.listing.likes);
        });

        console.log(arr)

        this.setState({ alllists: arr })

    }

    sortBynew = () => {
        let lists = this.state.mainlists;

        let arr = lists.sort(function (a, b) {
            return Number(b.listing.creating_time) - Number(a.listing.creating_time);
        });

        console.log(arr)

        this.setState({ alllists: arr })

    }

    sortByold = () => {
        let lists = this.state.mainlists;

        let arr = lists.sort(function (a, b) {
            return Number(a.listing.creating_time) - Number(b.listing.creating_time);
        });

        console.log(arr)

        this.setState({ alllists: arr })

    }

    sortBydefault = () => {
        console.log(this.state.mainlists)
        this.setState({ alllists: this.state.mainlists })

    }

    handleChangeshortby = (selectedShortby) => {

        this.setState({ selectedShortby });

        if (selectedShortby.value === 1) {
            console.log(selectedShortby.value)
            this.sortBydefault();

        }

        else if (selectedShortby.value === 2) {

            this.sortByhighrating();

        }

        else if (selectedShortby.value === 3) {

            this.sortBypopular();

        }



        else if (selectedShortby.value === 4) {

            this.sortBynew();

        }

        else if (selectedShortby.value === 5) {

            this.sortByold();

        }
    }

    handleChangeCountryby = async (selectedCountryby) => {
        this.setState({ selectedCountryby });
        if (selectedCountryby.value === 'All') {

            this.setState({ alllists: this.state.mainlists, mediaterlist: this.state.mainlists }, () => { this.Region(); this.category() })

        }
        else {
            let lists = this.state.mainlists;
            let arr = lists.filter(function (item) {
                return item.listing.country === selectedCountryby.value;
            });

            this.setState({ alllists: arr, mediaterlist: arr }, () => { this.Region(); this.category() })


        }

    }

    handleChangeRegion = async (selectedRegion) => {
        this.setState({ selectedRegion });
        console.log(selectedRegion)
        if (selectedRegion.value === 'All') {

            this.setState({ alllists: this.state.mediaterlist})

        }
        else {
            let lists = this.state.mediaterlist;
            let arr = lists.filter(function (item) {
                return item.listing.state === selectedRegion.value;
            });

            this.setState({ alllists: arr })


        }

    }









    render() {


        return (
            <>
                <main className="listing-list">
                    {/* Header */}
                    <GeneralHeader />

                    {/* Breadcrumb */}
                    <Breadcrumb CurrentPgTitle="Listing List" MenuPgTitle="Listings" img={this.state.breadcrumbimg} />


                    <div className="container">
                        <Tabs>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="generic-header margin-bottom-30px">
                                        <p className="showing__text text-right">
                                            Sort By Country  .
                                        </p>
                                        <div className="short-option mr-3">
                                            <Select
                                                value={this.state.selectedCountryby}
                                                onChange={this.handleChangeCountryby}
                                                placeholder="Short by Country"
                                                options={this.state.country && this.state.country}
                                            />
                                        </div>
                                        <div className="short-option mr-3">
                                            <Select
                                                value={this.state.selectedShortby}
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
                                                        ) : this.state.alllists.slice(0, this.state.visible).map((item, index) => {
                                                            return (
                                                                <div className="card-item card-listing d-flex" key={index}>
                                                                    <Link to={`/listing-details/${item.listing.canonicalurl}`} className="card-image-wrap">
                                                                        <div className="card-image">
                                                                            <img src={item.listing.bannerimg ? `http://localhost:7999/api/v1/utilities/${item.listing.bannerimg}` : this.state.listimage} className="card__img" alt={item.listing.list_title} />
                                                                            <span className='badge'>{this.state.bedge}</span>
                                                                            <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                                                <FiHeart />
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                    <div className="card-content-wrap">
                                                                        <div className="card-content">
                                                                            <Link to={`/listing-list/${item.listing.categoryid}`}>
                                                                                <h5 className="card-meta">
                                                                                    <span></span> {item.listing.categoryname}
                                                                                </h5>
                                                                            </Link>
                                                                            <Link to={`/listing-details/${item.listing.canonicalurl}`}>

                                                                                <h4 className="card-title">{item.listing.list_title}
                                                                                    <i><IoIosCheckmarkCircle /></i>
                                                                                </h4>
                                                                                <p className="card-sub">
                                                                                    {item.listing.address}
                                                                                </p>
                                                                            </Link>
                                                                            <Link to={`/user-profile/${item.listing.username}`} className="author-img" >
                                                                                <img src={item.listing.profileimg ? `http://localhost:7999/api/v1/utilities/${item.listing.profileimg}` : this.state.author} alt="author-img" />
                                                                            </Link>
                                                                            <ul className="info-list padding-top-20px">
                                                                                <li><span className="la d-inline-block"><FiPhone /></span> {item.listing.phone}</li>
                                                                                <li><span className="la d-inline-block"><IoIosLink /></span>  <a target="_blanc" href={item.listing.website}>
                                                                                    {item.listing.website.replace(/^https:\/\//, '')}
                                                                                </a>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="la d-inline-block"><FaRegCalendarCheck /></span>posted {moment(Number(item.listing.creating_time)).fromNow()}
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="rating-row">
                                                                            <div className="rating-rating">

                                                                                <span> <ReactStars
                                                                                    count={5}
                                                                                    size={24}
                                                                                    value={item.rating[0].rating ? parseFloat(item.rating[0].rating).toFixed(1) : 0}
                                                                                    isHalf={true} /> </span><span> - </span>
                                                                                <span className="rating-count"> {parseFloat(item.rating[0].rating).toFixed(1)}</span>


                                                                            </div>
                                                                            <div className="listing-info">
                                                                                <ul>
                                                                                    <li><span className="info__count"><AiOutlineEye /></span> {item.listing.view}</li>

                                                                                    <li onClick={() => this.like(item.listing.listing_id)}>
                                                                                        <span className="info__count">   <FiHeart /></span> {item.listing.likes}
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
                                                                {this.state.visible < this.state.alllists.length &&
                                                                    <button text="load more" onClick={this.loadMore} className="border-0">
                                                                        <span className="d-inline-block">
                                                                            <FiRefreshCw />
                                                                        </span>
                                                                    </button>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4">
                                                    <div className="sidebar">
                                                        <WidgetSearch />
                                                        <div className="sidebar-widget">
                                                            <Select
                                                                value={this.selectedRegion}
                                                                onChange={this.handleChangeRegion}
                                                                placeholder="sort by region"
                                                                options={this.state.region && this.state.region}
                                                            />
                                                        </div>
                                                        {<div className="sidebar-widget">
                                                            <h3 className="widget-title">
                                                                Filter By  Category
                                                            </h3>
                                                            <div className="title-shape"></div>
                                                            <div className="check-box-list show-more-item filter-by-category mt-4 mb-4">

                                                                {this.state.category && this.state.category.map(item => {
                                                                    return (
                                                                        <div className="custom-checkbox" key={item.id}>
                                                                            { this.props.match.params.category && (this.props.match.params.category === item.id) ? <input type="checkbox" id={'chb' + item.id} value={item.cat} onChange={(e) => this.handleChange(e)} checked /> : <input type="checkbox" id={'chb' + item.id} value={item.cat} onChange={(e) => this.handleChange(e)} />}
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
                                                        {/* <WidgetFilterPrice />*/}

                                                        {this.props.match.params.category ? (<div className="sidebar-widget">
                                                            <h3 className="widget-title">
                                                                Filter By Feature
                                                            </h3>
                                                            <div className="title-shape"></div>
                                                            <div className="check-box-list show-more-item filter-by-feature mt-4 mb-4">
                                                                {this.state.features && this.state.features.map(item => {
                                                                    return (
                                                                        <div className="custom-checkbox" key={item.id}>
                                                                            <input type="checkbox" id={'chb2-' + item.id} value={item.text} onChange={(e) => this.handleFeatureChange(e)} />
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
                                                        </div>) : ''}

                                                        <div className="sidebar-widget">
                                                            <h3 className="widget-title">
                                                                Filter by Ratings
                                                            </h3>
                                                            <div className="title-shape"></div>
                                                            <ul className="rating-list mt-4">


                                                                <li>
                                                                    <span className="la-star"><MdStar /> <MdStar /> <MdStar /> <MdStar /> <MdStar /></span>
                                                                    <label className="review-label">
                                                                        <input type="radio" name="review-radio" value='5' onChange={this.handleRatingFilter} />
                                                                        <span className="review-mark"></span>
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <span className="la-star"><MdStar /> <MdStar />  <MdStar /> <MdStar /></span>
                                                                    <label className="review-label">
                                                                        <input type="radio" name="review-radio" value='4' onChange={this.handleRatingFilter} />
                                                                        <span className="review-mark"></span>
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <span className="la-star"><MdStar />  <MdStar /> <MdStar /></span>
                                                                    <label className="review-label">
                                                                        <input type="radio" name="review-radio" value='3' onChange={this.handleRatingFilter} />
                                                                        <span className="review-mark"></span>
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <span className="la-star"><MdStar />  <MdStar /></span>
                                                                    <label className="review-label">
                                                                        <input type="radio" name="review-radio" value='2' onChange={this.handleRatingFilter} />
                                                                        <span className="review-mark"></span>
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <span className="la-star"> <MdStar /></span>
                                                                    <label className="review-label">
                                                                        <input type="radio" name="review-radio" value='1' onChange={this.handleRatingFilter} />
                                                                        <span className="review-mark"></span>
                                                                    </label>
                                                                </li>

                                                            </ul>
                                                        </div>


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
                                                                    <Link to={`/listing-details/${item.listing.canonicalurl}`} className="card-image-wrap">
                                                                        <div className="card-image">
                                                                            <img src={item.listing.bannerimg ? `http://localhost:7999/api/v1/utilities/${item.listing.bannerimg}` : item.listing.listimage} className="card__img" alt={item.listing.list_title} />
                                                                            <span className='badge'>{this.state.bedge}</span>
                                                                            <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                                                <FiHeart />
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                    <div className="card-content-wrap">
                                                                        <div className="card-content">
                                                                            <Link to={`/listing-list/${item.listing.categoryid}`}>
                                                                                <h5 className="card-meta">
                                                                                    <span></span> {item.listing.categoryname}
                                                                                </h5>
                                                                            </Link>

                                                                            <Link to={`/listing-details/${item.listing.canonicalurl}`}>

                                                                                <h4 className="card-title">{item.listing.list_title}
                                                                                    <i><IoIosCheckmarkCircle /></i>
                                                                                </h4>
                                                                                <p className="card-sub">
                                                                                    {item.listing.address}
                                                                                </p>
                                                                            </Link>
                                                                            <Link to={`/user-profile/${item.listing.username}`} className="author-img" >
                                                                                <img src={item.listing.profileimg ? `http://localhost:7999/api/v1/utilities/${item.listing.profileimg}` : this.state.author} alt="author-img" />
                                                                            </Link>
                                                                            <ul className="info-list padding-top-20px">
                                                                                <li><span className="la d-inline-block"><FiPhone /></span> {item.listing.phone}</li>
                                                                                <li><span className="la d-inline-block"><IoIosLink /></span>  <a target="_blanc" href={item.listing.website}>
                                                                                    {item.listing.website.replace(/^https:\/\//, '')}
                                                                                </a>
                                                                                </li>
                                                                                <li>
                                                                                    <span className="la d-inline-block"><FaRegCalendarCheck /></span>posted {moment(Number(item.listing.creating_time)).fromNow()}
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="rating-row">
                                                                            <div className="rating-rating">

                                                                                <span> <ReactStars
                                                                                    count={5}
                                                                                    size={24}
                                                                                    value={item.rating[0].rating ? parseFloat(item.rating[0].rating).toFixed(1) : 0}
                                                                                    isHalf={true} /> </span><span> - </span>
                                                                                <span className="rating-count"> {parseFloat(item.rating[0].rating).toFixed(1)}</span>


                                                                            </div>
                                                                            <div className="listing-info">
                                                                                <ul>
                                                                                    <li><span className="info__count"><AiOutlineEye /></span> {item.listing.view}</li>

                                                                                    <li onClick={() => this.like(item.listing.listing_id)}>
                                                                                        <span className="info__count">   <FiHeart /></span> {item.listing.likes}
                                                                                    </li>

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
