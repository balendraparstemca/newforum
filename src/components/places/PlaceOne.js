import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { IoIosCheckmarkCircle, IoIosLink } from 'react-icons/io'
import { AiOutlineEye } from 'react-icons/ai'
import { FiPhone, FiHeart } from 'react-icons/fi'
import { FaRegCalendarCheck } from 'react-icons/fa'
import { getpeopleviewList } from '../../services/action/list';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import moment from 'moment';
import ReactStars from "react-rating-stars-component";
class PlaceOne extends Component {

    constructor(props) {
        super(props)
        this.state = {
            viewlist: [],

            author: require('../../assets/images/testi-img2.jpg'),
            listimage: require('../../assets/images/bread-bg.jpg'),
            cmid: null

        }
    }

    componentDidUpdate(prevProps) {
        if (this.state.cmid !== this.props.categoryid) {
            this.setState({ cmid: this.props.categoryid });
            const obj = {
                "city": this.props.city,
                "country": this.props.country,
                "state": this.props.state

            }
            console.log(obj)
            this.props.dispatch(getpeopleviewList(obj));
        }

    }


    responsive = {
        // breakpoint from 0 up
        0: {
            items: 1
        },
        // breakpoint from 480 up
        480: {
            items: 2
        },
        // breakpoint from 768 up
        768: {
            items: 3
        }
    }
    render() {
        console.log(this.props.viewedlists)

        return (
            <div className="row">

                <div className="col-lg-12">

                    <OwlCarousel
                        className="card-carousel mt-5"
                        loop={false}
                        center={false}
                        margin={10}
                        autoplay={true}
                        nav={true}
                        navText={[
                            "<i class='icon icon-left'></i>",
                            "<i class='icon icon-right'></i>"
                        ]}
                        rewind={true}
                        items={3}
                        smartSpeed={10000}
                        animateOut={"slideOutDown"}
                        animateIn={"fadeIn"}
                        responsive={this.responsive}
                    >
                        {this.props.viewedlists && this.props.viewedlists.map((item, index) => {
                            return (
                                <div className="card-item" key={index}>
                                    <Link to={`/listing-details/${item.listing.canonicalurl}`} className="card-image-wrap">
                                        <div className="card-image">
                                            <img src={item.listing.bannerimg ? `http://localhost:7999/api/v1/utilities/${item.listing.bannerimg}` : this.state.listimage} className="card__img" alt={item.listing.list_title} />
                                            <span className='badge'>{this.state.bedge}</span>
                                            <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title={item.listing.likes}>
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


                    </OwlCarousel>

                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { isLoggedIn, userdetails } = state.auth;
    const { listdetail, viewedlists } = state.list;
    return {
        isLoggedIn, userdetails, listdetail, viewedlists

    };
}
export default connect(mapStateToProps)(PlaceOne);