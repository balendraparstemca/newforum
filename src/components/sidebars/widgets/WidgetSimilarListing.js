import React, {Component} from 'react';
import { BsEye } from 'react-icons/bs'
import { MdStar, MdStarHalf } from 'react-icons/md'
import Button from "../../common/Button";
import {Link} from "react-router-dom";

class WidgetSimilarListing extends Component {
    state = {
        title: 'Similar Listings',
        items: [
            {
                img: require('../../../assets/images/img34.jpg'),
                title: 'The best sale marketer of the next year',
                titleUrl: '/blog-single',
                price: '$19.00',
                cat: 'Gym & Fitness',
                catUrl: '#',
                stars: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStarHalf />,
                ]
            },
            {
                img: require('../../../assets/images/img35.jpg'),
                title: 'How to make your ideas became true',
                titleUrl: '/blog-single',
                price: '$20.00',
                cat: 'Restaurant',
                catUrl: '#',
                stars: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStarHalf />,
                ]
            },
            {
                img: require('../../../assets/images/img36.jpg'),
                title: 'What gets in the way of strategy',
                titleUrl: '/blog-single',
                price: '$19.00',
                cat: 'Art & Design',
                catUrl: '#',
                stars: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStarHalf />,
                ]
            },
            {
                img: require('../../../assets/images/img37.jpg'),
                title: 'What gets in the way of strategy',
                titleUrl: '/blog-single',
                price: '$19.00',
                cat: 'Outdoors',
                catUrl: '#',
                stars: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStarHalf />,
                ]
            },
        ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget similar-widget">
                    <h3 className="widget-title">
                        {this.state.title}
                    </h3>
                    <div className="title-shape"></div>
                    <div className="similar-list padding-top-30px">

                        {this.state.items.map((item, i) => {
                            return (
                                <div className="recent-item" key={i}>
                                    <div className="recent-img">
                                        <Link to={item.titleUrl}>
                                            <img src={item.img} alt="blog" />
                                        </Link>
                                    </div>
                                    <div className="recentpost-body">
                                        <h4 className="recent__link">
                                            <Link to={item.titleUrl}>
                                                {item.title}
                                            </Link>
                                        </h4>
                                        <div className="rating-rating">

                                            {item.stars.map((icon, i) => {
                                                return <span key={i} className="la la-star">{icon}</span>
                                            })}

                                        </div>
                                        <p className="recent__meta">
                                            <span className="color-text font-weight-bold">{item.price}</span> <Link to={item.catUrl}>{item.cat}</Link>
                                        </p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className="btn-box text-center padding-top-30px">
                        <Button text="see all listings" url="/listing-grid" className="d-block">
                            <BsEye />
                        </Button>
                    </div>
                </div>
            </>
        );
    }
}

export default WidgetSimilarListing;