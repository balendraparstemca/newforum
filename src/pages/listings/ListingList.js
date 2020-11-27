import React, { Component } from 'react';
import { FiRefreshCw } from "react-icons/fi";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import { IoIosCheckmarkCircle, IoIosLink, IoMdStar, IoMdStarHalf } from "react-icons/io";
import { GiChickenOven } from "react-icons/gi";
import { RiHotelBedLine, RiPlaneLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FiHeart, FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import ListingListSidebar from "../../components/sidebars/ListingListSidebar";
import Button from "../../components/common/Button";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import GenericHeader from "../../components/common/GenericHeader";
import moment from 'moment';
import { gethomeList } from '../../services/action/list';
import { connect } from "react-redux";
import ListHeader from '../../components/common/listHeader';
class ListingList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alllists: [],
            author: require('../../assets/images/testi-img2.jpg'),
            listimage: require('../../assets/images/bread-bg.jpg'),
            bdimg: require('../../assets/images/bread-bg.jpg'),
            bedge: 'New Open',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.5',
            items: [
                {
                    bedge: 'New Open',
                    title: 'Favorite Place Food Bank',
                    titleIcon: <IoIosCheckmarkCircle />,
                    titleUrl: '/listing-details',
                    stitle: 'Bishop Avenue, New York',
                    image: require('../../assets/images/img25.jpg'),
                    cardType: 'Restaurant',
                    cardTypeIcon: <GiChickenOven />,
                    author: require('../../assets/images/testi-img2.jpg'),
                    authorUrl: '#',
                    number: '(492) 492-4828',
                    website: 'www.mysitelink.com',
                    date: 'Posted 1 month ago',
                    view: '204',
                    ratings: [
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStarHalf />,
                        <IoMdStar className="last-star" />,
                    ],
                    ratingNum: '4.5'
                },
                {
                    bedge: 'Closed',
                    title: 'beach blue boardwalk',
                    titleIcon: '',
                    titleUrl: '/listing-details',
                    stitle: 'Bishop Avenue, New York',
                    image: require('../../assets/images/img26.jpg'),
                    cardType: 'Travel',
                    cardTypeIcon: <RiPlaneLine />,
                    author: require('../../assets/images/testi-img2.jpg'),
                    authorUrl: '#',
                    number: '(492) 492-4828',
                    website: 'www.mysitelink.com',
                    date: 'Posted 1 month ago',
                    view: '248',
                    ratings: [
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStarHalf />,
                        <IoMdStar className="last-star" />,
                    ],
                    ratingNum: '4.6'
                },
                {
                    bedge: 'New Open',
                    title: 'Hotel Govendor',
                    titleIcon: <IoIosCheckmarkCircle />,
                    titleUrl: '/listing-details',
                    stitle: 'Bishop Avenue, New York',
                    image: require('../../assets/images/img27.jpg'),
                    cardType: 'Hotel',
                    cardTypeIcon: <RiHotelBedLine />,
                    author: require('../../assets/images/testi-img2.jpg'),
                    authorUrl: '#',
                    number: '(492) 492-4828',
                    website: 'www.mysitelink.com',
                    date: 'Posted 1 month ago',
                    view: '248',
                    ratings: [
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStarHalf />,
                        <IoMdStar className="last-star" />,
                    ],
                    ratingNum: '4.6'
                },
                {
                    bedge: 'New Open',
                    title: 'Favorite Place Food Bank',
                    titleIcon: <IoIosCheckmarkCircle />,
                    titleUrl: '/listing-details',
                    stitle: 'Bishop Avenue, New York',
                    image: require('../../assets/images/img28.jpg'),
                    cardType: 'Restaurant',
                    cardTypeIcon: <GiChickenOven />,
                    author: require('../../assets/images/small-team1.jpg'),
                    authorUrl: '#',
                    number: '(492) 492-4828',
                    website: 'www.mysitelink.com',
                    date: 'Posted 1 month ago',
                    view: '204',
                    ratings: [
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStarHalf />,
                        <IoMdStar className="last-star" />,
                    ],
                    ratingNum: '4.5'
                },
                {
                    bedge: 'Closed',
                    title: 'beach blue boardwalk',
                    titleIcon: '',
                    titleUrl: '/listing-details',
                    stitle: 'Bishop Avenue, New York',
                    image: require('../../assets/images/img29.jpg'),
                    cardType: 'Travel',
                    cardTypeIcon: <RiPlaneLine />,
                    author: require('../../assets/images/small-team2.jpg'),
                    authorUrl: '#',
                    number: '(492) 492-4828',
                    website: 'www.mysitelink.com',
                    date: 'Posted 1 month ago',
                    view: '248',
                    ratings: [
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStarHalf />,
                        <IoMdStar className="last-star" />,
                    ],
                    ratingNum: '4.6'
                },
                {
                    bedge: 'New Open',
                    title: 'Hotel Govendor',
                    titleIcon: <IoIosCheckmarkCircle />,
                    titleUrl: '/listing-details',
                    stitle: 'Bishop Avenue, New York',
                    image: require('../../assets/images/img30.jpg'),
                    cardType: 'Hotel',
                    cardTypeIcon: <RiHotelBedLine />,
                    author: require('../../assets/images/small-team3.jpg'),
                    authorUrl: '#',
                    number: '(492) 492-4828',
                    website: 'www.mysitelink.com',
                    date: 'Posted 1 month ago',
                    view: '248',
                    ratings: [
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStar />,
                        <IoMdStarHalf />,
                        <IoMdStar className="last-star" />,
                    ],
                    ratingNum: '4.6'
                },
            ]
        }
    }

    componentDidMount() {

        this.fetchHomelists();
    }

    fetchHomelists = () => {
        this.props.dispatch(gethomeList()).then(() => {
            this.setState({
                alllists: this.props.lists
            })
        });
    }

    render() {
        return (
            <>
           
                {/* Place List */}
               
                        <div className="row">
                           

                            <div className="col-lg-8">
                                {this.state.alllists.map((item, index) => {
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
                                                            <li>
                                                                <span className="info__count"><AiOutlineEye /></span> 22
                                                            </li>
                                                            <li>
                                                                <span className="info__save" data-toggle="tooltip" data-placement="top" title="Bookmark">
                                                                    <FiHeart />
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
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
                   

              
            </>
        );
    }
}



function mapStateToProps(state) {
    const { isLoggedIn, userdetails } = state.auth;
    const { lists } = state.list;
    return {
        isLoggedIn, userdetails, lists

    };
}
export default connect(mapStateToProps)(ListingList);