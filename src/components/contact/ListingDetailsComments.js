import React, { Component } from 'react';
import { MdStar, MdStarHalf } from 'react-icons/md'
import { FiThumbsUp, FiRefreshCw } from 'react-icons/fi'
import Button from "../common/Button";
import SectionDivider from "../common/SectionDivider";
import { connect } from "react-redux";
import { Badge } from 'react-bootstrap';
import moment from 'moment';
import ReviewFields from './ReviewFields';

class ListingDetailsComments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: require('../../assets/images/testi-img1.jpg'),
          


        }
    }


    render() {
        return (
            <>
                <ReviewFields listingid={this.props.listid && this.props.listid} />
                <hr></hr>
                <h2 className="widget-title">
                    {this.props.allreviewlist && this.props.allreviewlist.length} Reviews
                                        </h2>
                <div className="title-shape"></div>
                <ul className="comments-list padding-top-40px">
                    <li>

                        {this.props.allreviewlist && this.props.allreviewlist.map((item, i) => {
                            return (
                                <>
                                    <div className="comment" key={i}>
                                        <img className="avatar__img" alt="Comment" src={this.state.img} />
                                        <div className="comment-body">
                                            <div className="meta-data">
                                                <span className="comment__author">
                                                    {item.name}
                                                </span>
                                                <span className="comment__date">
                                                    {moment(Number(item.date)).fromNow()}
                                                </span>
                                                <div className="rating-rating">
                                                    {[...Array(Number(item.stars))].map((star, index) => {
                                                        return <span key={index} className="la la-star"> <MdStar /></span>
                                                    })}
                                                   
                                                </div>
                                            </div>
                                            <p className="comment-content">
                                                {item.review_text}
                                            </p>
                                            <div className="comment-reply d-flex justify-content-between align-items-center">

                                                <p className="feedback-box">
                                                    Was this review?
                                                    <button type="button" className="theme-btn">
                                                        <i className="la d-inline-block"><FiThumbsUp /></i> Helpfull <Badge variant="success">{item.helpfull}</Badge>
                                                    </button>

                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        })}
                    </li>
                </ul>
                <SectionDivider />
                <div className="button-shared padding-top-40px text-center">
                    <Button url="#" text="Load more review" className="border-0">
                        <FiRefreshCw />
                    </Button>
                </div>
            </>
        );
    }
}


function mapStateToProps(state) {
    const { isLoggedIn, userdetails } = state.auth;
    const { allreviewlist } = state.list;
    return {
        isLoggedIn, userdetails, allreviewlist

    };
}
export default connect(mapStateToProps)(ListingDetailsComments);