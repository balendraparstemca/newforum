import React, { Component } from 'react';
import { IoIosCheckmarkCircle, IoIosLink, IoMdStar, IoMdStarHalf } from "react-icons/io";
import { FiHeart, FiPhone, FiRefreshCw } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import { connect } from "react-redux";
import { getCategorylist, gethomeList, likeList } from '../../services/action/list';
import moment from 'moment';
import { BsEye } from 'react-icons/bs';
class ListingGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alllists: [],
            author: require('../../assets/images/testi-img2.jpg'),
            listimage: require('../../assets/images/bread-bg.jpg'),
            bdimg: require('../../assets/images/bread-bg.jpg'),
            bedge: 'New Open',

        }
    }

    componentDidMount() {
        if (this.props.category) {
            this.fetchCategorylists(this.props.category)
        } else {
            this.fetchHomelists();

        }
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
                alllists: this.props.lists
            })
        });
    }

    fetchCategorylists = (id) => {
        this.props.dispatch(getCategorylist(id)).then(() => {
            this.setState({
                alllists: this.props.categorylists
            })
        });
    }

    render() {


        return (
            <>
                {/* Place Grid */}


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



            </>
        );
    }
}


function mapStateToProps(state) {
    const { isLoggedIn, userdetails } = state.auth;
    const { lists, categorylists } = state.list;
    return {
        isLoggedIn, userdetails, lists, categorylists

    };
}
export default connect(mapStateToProps)(ListingGrid);