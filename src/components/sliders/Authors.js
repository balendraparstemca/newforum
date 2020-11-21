import React, {Component} from 'react';
import OwlCarousel from "react-owl-carousel";
import { FiPlus } from 'react-icons/fi'
import {Link} from "react-router-dom";

class Authors extends Component {
    state = {
        prevIcon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 20c-.802 0-1.555-.312-2.122-.879l-7.121-7.121 7.122-7.121c1.133-1.133 3.11-1.133 4.243 0 .566.566.878 1.32.878 2.121s-.312 1.555-.879 2.122l-2.878 2.878 2.878 2.879c.567.566.879 1.32.879 2.121s-.312 1.555-.879 2.122c-.566.566-1.319.878-2.121.878zm-6.415-8l5.708 5.707c.378.378 1.037.377 1.414 0 .189-.189.293-.439.293-.707s-.104-.518-.293-.707l-4.292-4.293 4.292-4.293c.189-.189.293-.44.293-.707s-.104-.518-.293-.707c-.378-.379-1.037-.378-1.414-.001l-5.708 5.708z"></path></svg>',
        nextIcon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 20c-.802 0-1.555-.312-2.122-.879-.566-.566-.878-1.32-.878-2.121s.312-1.555.879-2.122l2.878-2.878-2.878-2.879c-.567-.566-.879-1.32-.879-2.121s.312-1.555.879-2.122c1.133-1.132 3.109-1.133 4.243.001l7.121 7.121-7.122 7.121c-.566.567-1.319.879-2.121.879zm0-14c-.268 0-.518.104-.707.292-.189.19-.293.441-.293.708s.104.518.293.707l4.292 4.293-4.292 4.293c-.189.189-.293.439-.293.707s.104.518.293.707c.378.379 1.037.378 1.414.001l5.708-5.708-5.708-5.707c-.189-.189-.439-.293-.707-.293z"></path></svg>',
        sliders: [
            {
                authorImg: require('../../assets/images/testi-img2.jpg'),
                authorName: 'Steven Harvey',
                city: 'Australia',
                authorStatus: 'Power Author',
                powerauthor: true,
                listingNum: '120',
                followers: '49',
                following: '49',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: require('../../assets/images/testi-img2.jpg'),
                authorName: 'Alex Smith',
                city: 'United States',
                authorStatus: 'Elite Author',
                powerauthor: false,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: require('../../assets/images/testi-img2.jpg'),
                authorName: 'Sirazz Khan',
                city: 'United Kingdom',
                authorStatus: 'Elite Author',
                powerauthor: false,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: require('../../assets/images/testi-img2.jpg'),
                authorName: 'Daniel Wave',
                city: 'Italy',
                authorStatus: 'Power Author',
                powerauthor: true,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: require('../../assets/images/testi-img2.jpg'),
                authorName: 'Juhen Villa',
                city: 'Bangladesh',
                authorStatus: 'Elite Author',
                powerauthor: false,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: require('../../assets/images/testi-img2.jpg'),
                authorName: 'Daniel Villa',
                city: 'Costa Rica',
                authorStatus: 'Power Author',
                powerauthor: true,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: require('../../assets/images/testi-img2.jpg'),
                authorName: 'Jhon Doe',
                city: 'France',
                authorStatus: 'Power Author',
                powerauthor: true,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            }
        ],
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-lg-12">
                        <OwlCarousel
                            className="author-slider mt-5"
                            loop
                            margin={30}
                            autoplay={false}
                            nav={true}
                            navText={[this.state.prevIcon, this.state.nextIcon]}
                            dots={false}
                            smartSpeed={1000}
                            responsive={this.state.responsive}
                        >
                            {this.state.sliders.map((item, index) => {
                                return (
                                    <div className="author-item" key={index}>
                                        <div className="author-bio margin-bottom-30px">
                                            <Link to="#" className="d-flex align-items-center">
                                                <img src={item.authorImg} alt="Author" />
                                                <div className="author-inner-bio">
                                                    <h4 className="author__title">
                                                        {item.authorName}
                                                    </h4>
                                                    <ul className="author__meta">
                                                        <li>
                                                            {item.city}
                                                        </li>
                                                        <li>
                                                            <span className={item.powerauthor?'author-type power-author' : 'author-type elite-author'}>
                                                                {item.authorStatus}
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="author-action">
                                            <ul className="author__list">
                                                <li><span>Listings</span>{item.listingNum}</li>
                                                <li><span>Followers</span>{item.followers}</li>
                                                <li><span>Following</span>{item.following}</li>
                                            </ul>
                                        </div>
                                        <div className="author-btn">
                                            <button type="button" className="theme-btn radius-rounded w-100">
                                                <span>
                                                    {item.buttonIcon}
                                                </span> {item.buttonTxt}
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </>
        );
    }
}

export default Authors;