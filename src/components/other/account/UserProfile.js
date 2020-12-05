import React, { Component } from 'react';
import GeneralHeader from "../../common/GeneralHeader";
import Breadcrumb from "../../common/Breadcrumb";
import UserSidebar from "./UserSidebar";
import { IoIosCheckmarkCircle, IoIosLink, IoMdStar, IoMdStarHalf } from "react-icons/io";
import { FiCheck, FiHeart, FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiFillQuestionCircle, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import { FiRefreshCw } from 'react-icons/fi'
import NewsLetter from "../cta/NewsLetter";
import Footer from "../../common/footer/Footer";
import ScrollTopBtn from "../../common/ScrollTopBtn";
import { userdetails } from '../../../services/action/user';
import { connect } from "react-redux";
import { getuserlist, likeList } from '../../../services/action/list';
import moment from 'moment';
class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userdetail: null,
            img: require('../../../assets/images/testi-img2.jpg'),
            name: '',
            date: 'Joined 4 years ago',
            message: '',
            loading: false,
            userlist: [],
            BreadcrumbImg: require('../../../assets/images/bread-bg.jpg'),
            totallist: 0
        }
    }

    componentDidMount() {

        this.fetchuserdetail();
    }

    like = (listingid) => {
        if (this.props.userdetails) {
            const obj = {
                listing_id: listingid,
                like_by: this.props.userdetails.id
            }
            this.props.dispatch(likeList(obj)).then(() => {
                this.fetchuserlist(this.props.udetails[0].id)

            })
        }
        else {
            alert("login first")
        }
    }

    fetchuserdetail = async () => {
        this.setState({ loading: true })
        let obj = { "userName": this.props.match.params.username }

        this.props.dispatch(userdetails(obj)).then(() => {
            if (this.props.udetails.length > 0) {
                this.setState({
                    userdetail: this.props.udetails[0],
                    img: this.props.udetails[0].profileimg ? `http://localhost:7999/api/v1/utilities/${this.props.udetails[0].profileimg}` : require('../../../assets/images/testi-img2.jpg'),
                    name: this.props.udetails[0].userName,
                    date: moment(Number(this.props.udetails[0].joined)).fromNow()
                })
                this.fetchuserlist(this.props.udetails[0].id)


            }
            else {
                this.props.history.push("/error");
                window.location.reload();
            }
        })
    }

    fetchuserlist = (uid) => {
        this.props.dispatch((getuserlist(uid))).then(() => {
            this.setState({
                userlist: this.props.alluserlist,
                totallist: this.props.alluserlist.length

            })
        })
    }

    render() {
        console.log(this.props.udetails)
        return (
            <main className="user-profile">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="User Profile" MenuPgTitle="Pages" img={this.state.BreadcrumbImg} />

                <section className="user-profile-area padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="user-content">
                                    <div className="author-bio margin-bottom-30px">
                                        <div className="d-flex align-items-center">
                                            <img src={this.state.img} alt="author" />
                                            <div className="author-inner-bio">
                                                <h4 className="author__title font-weight-bold pb-0 mb-1">{this.state.name} <i className="la tip tip-verified" data-toggle="tooltip" data-placement="top" title="Verified Account"><FiCheck /></i></h4>
                                                <p className="author__meta">
                                                    {this.state.date}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="user-details d-flex align-items-center padding-bottom-30px">

                                        <div className="user-item author-listing">
                                            <h4 className="user__label">Listings</h4>
                                            <p className="userlist__number">{this.state.totallist}</p>
                                        </div>
                                    </div>
                                    <div className="section-block-2"></div>
                                    <div className="user-contact padding-top-30px">
                                        <h3 className="widget-title pb-0 margin-bottom-20px">--------------------</h3>

                                        <div className="section-block-2"></div>


                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <h3 className="widget-title"> Listings</h3>
                                <div className="title-shape"></div>
                                <div className="row two-clmn margin-top-35px">
                                    {this.state.userlist.map((item, index) => {
                                        return (
                                            <div className="col-lg-4 column-td-6" key={index}>
                                                <div className="card-item">
                                                    <Link to={`/listing-details/${item.listing.canonicalurl}`} className="card-image-wrap">
                                                        <div className="card-image">
                                                            <img src={item.listing.bannerimg ? `http://localhost:7999/api/v1/utilities/${item.listing.bannerimg}` : item.listing.listimage} className="card__img" alt={item.listing.list_title} />
                                                            <span className='badge'>{this.state.bedge}</span>
                                                            <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title={item.likes}>
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
                                                                   { item.listing.approved===1 ? <i><IoIosCheckmarkCircle /></i>:  <i><AiFillQuestionCircle /><Link to={`/listing-details/${item.listing.canonicalurl}/edit`}>not verified</Link></i>}
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
                                                                <li><span className="la d-inline-block"><IoIosLink /></span>  <a href={item.listing.website}>
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

                                                            </div>
                                                            <div className="listing-info">
                                                                <ul>
                                        <li><span className="info__count"></span> {item.listing.likes}</li>
                                                                    <li>
                                                                        <span  onClick={()=>this.like(item.listing.listing_id)} className="info__save"   title="Bookmark">
                                                                            <FiHeart />
                                                                        </span>
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
                                        <div className="button-shared text-center">
                                            <Button text="load more listing" url="#" className="border-0">
                                                <span><FiRefreshCw /></span>
                                            </Button>
                                        </div>
                                    </div>
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


function mapStateToProps(state) {
    const { isLoggedIn, userdetails } = state.auth
    const { udetails } = state.user
    const { alluserlist } = state.list;
    return {
        isLoggedIn, userdetails, udetails, alluserlist

    };
}
export default connect(mapStateToProps)(UserProfile);