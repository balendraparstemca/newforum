import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {IoMdStar, IoMdStarHalf, IoIosCheckmarkCircle, IoMdMusicalNotes, IoIosLink} from 'react-icons/io'
import { AiOutlineEye } from 'react-icons/ai'
import { RiHotelBedLine } from 'react-icons/ri'
import { GiChickenOven } from 'react-icons/gi'
import { FiPhone, FiHeart } from 'react-icons/fi'
import { FaRegCalendarCheck } from 'react-icons/fa'

class PlaceOne extends Component {
    states = {
        items: [
            {
                bedge: 'New Open',
                title: 'Hotel Govendor',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: require('../../assets/images/img30.jpg'),
                cardType: 'Hotel',
                cardTypeIcon: <RiHotelBedLine />,
                author: require('../../assets/images/small-team6.jpg'),
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                websiteUrl: 'https://example.com',
                date: 'Posted 1 month ago',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.7'
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
                cardTypeIcon: <GiChickenOven />,
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
            {
                bedge: 'New Open',
                title: 'sticky band party',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: require('../../assets/images/img30.jpg'),
                cardType: 'Event',
                cardTypeIcon: <IoMdMusicalNotes />,
                author: require('../../assets/images/small-team4.jpg'),
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
                ratingNum: '4.4'
            },
            {
                bedge: 'Closed',
                title: 'Sena Clothing Shopping Mall',
                titleIcon: '',
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: require('../../assets/images/img32.jpg'),
                cardType: 'Shop',
                cardTypeIcon: <GiChickenOven />,
                author: require('../../assets/images/small-team5.jpg'),
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
                author: require('../../assets/images/small-team6.jpg'),
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
                ratingNum: '4.7'
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
            }
        ]
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
        return (
            <div className="row">
                <div className="col-lg-12">

                    <OwlCarousel
                        className="card-carousel mt-5"
                        loop
                        center={true}
                        margin={10}
                        autoplay={false}
                        nav={false}
                        dots={true}
                        items={3}
                        smartSpeed={1000}
                        animateOut={"slideOutDown"}
                        animateIn={"fadeIn"}
                        responsive={this.responsive}
                    >
                        {this.states.items.map((item, index) => {
                            return (
                                <div className="card-item" key={index}>
                                    <a href={item.titleUrl} className="card-image-wrap">
                                        <div className="card-image">
                                            <img src={item.image} className="card__img" alt="Place" />
                                            <span className={item.titleIcon ? 'badge': 'badge badge-closed' }>{item.bedge}</span>
                                            <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                <FiHeart />
                                            </span>
                                        </div>
                                    </a>
                                    <div className="card-content-wrap">
                                        <div className="card-content">
                                            <a href={item.titleUrl}>
                                                <h5 className="card-meta">
                                                    <span>{item.cardTypeIcon}</span> {item.cardType}
                                                </h5>
                                                <h4 className="card-title">{item.title}
                                                    <i>{item.titleIcon}</i>
                                                </h4>
                                                <p className="card-sub">
                                                    {item.stitle}
                                                </p>
                                            </a>
                                            <a href={item.authorUrl} className="author-img">
                                                <img src={item.author} alt="author-img" />
                                            </a>
                                            <ul className="info-list padding-top-20px">
                                                <li><span className="la d-inline-block"><FiPhone /></span> {item.number}</li>
                                                <li><span className="la d-inline-block"><IoIosLink /></span>  <a href={item.websiteUrl}>
                                                        {item.website}
                                                    </a>
                                                </li>
                                                <li>
                                                    <span className="la d-inline-block"><FaRegCalendarCheck /></span> {item.date}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="rating-row">
                                            <div className="rating-rating">
                                                {item.ratings.map((rating, index) => {
                                                    return (
                                                        <span key={index}>{rating}</span>
                                                    )
                                                })}
                                                <span className="rating-count">{item.ratingNum}</span>
                                            </div>
                                            <div className="listing-info">
                                                <ul>
                                                    <li><span className="info__count"><AiOutlineEye /></span> {item.view}</li>
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


                    </OwlCarousel>

                </div>
            </div>
        );
    }
}

export default PlaceOne;