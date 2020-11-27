import React, { Component } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import { IoIosCheckmarkCircle, IoIosLink, IoMdStar, IoMdStarHalf } from "react-icons/io";
import { GiChickenOven } from "react-icons/gi";
import { RiHotelBedLine, RiPlaneLine } from "react-icons/ri";
import { FiHeart, FiPhone, FiRefreshCw } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import GenericHeader from "../../components/common/GenericHeader";
import { connect } from "react-redux";
import { gethomeList } from '../../services/action/list';
import moment from 'moment';
class CategoryListingGrid extends Component {
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
        console.log(this.props.lists);
        return (
            <main className="listing-grid">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Listing Grid" MenuPgTitle="Listings" img={this.state.bdimg} />

                {/* Place Grid */}
                <section className="card-area padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <GenericHeader />
                            </div>
                        </div>

                        <div className="row">
                            {this.state.alllists.map((item, index) => {
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
                                                            <li><span className="info__count"><AiOutlineEye /></span> 22</li>
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
    const { isLoggedIn, userdetails } = state.auth;
    const { lists } = state.list;
    return {
        isLoggedIn, userdetails, lists

    };
}
export default connect(mapStateToProps)(CategoryListingGrid);