import React, { Component } from 'react';

import { BsEye } from 'react-icons/bs'
import { Link } from "react-router-dom";
import Button from '../common/Button';
import { connect } from "react-redux";
import { fetchCommunityList } from '../../services/action/common';
import moment from 'moment';

class CommunityList extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            title: "Community Lists",
            community: [],
            loading: false,
            img: require('../../assets/images/default.png'),
            catlink: ''
        }

    }

    componentDidMount() {
        this.props.dispatch(fetchCommunityList()).then(() => {
            this.setState({
                community: this.props.communitylist
            })

        });
    }
    componentDidUpdate(prevProps) {
        if (this.state.catlink !== this.props.categoryLink) {
            this.setState({ catlink: this.props.categoryLink });
            let obj = {
                'category': this.props.categoryLink
            };
            if (this.props.categoryLink) {


                this.props.dispatch(fetchCommunityList(obj)).then(() => {
                    this.setState({
                        community: this.props.communitylist
                    })
                });
            }
            else {
                this.props.dispatch(fetchCommunityList()).then(() => {
                    this.setState({
                        community: this.props.communitylist
                    })
                });

            }

        }
    }

    render() {

        return (
            <div>
                <div className="sidebar-widget similar-widget">
                    {this.state.title ? (
                        <h3 className="widget-title">{this.state.title}</h3>
                    ) : ''}
                    <div className="title-shape"></div>
                    <div className="similar-list padding-top-30px">

                        {this.state.community && this.state.community.length === 0 ?
                            (
                                <div className="btn-box text-center padding-top-30px">
                                    <Button url="#" text="no community list " className=" d-block">
                                        <span><BsEye /></span>
                                    </Button>
                                </div>
                            ) : this.state.community.map((com, i) => {
                                return (
                                    <div key={i} className="recent-item mb-3">
                                        <div className="recent-img">
                                            <Link to={`/r/${com.communityName}`}>
                                                <img src={this.state.img} alt="blog" />
                                            </Link>
                                        </div>
                                        <div className="recentpost-body">
                                            <h4 className="recent__link">
                                                <Link to={`/forum/r/${com.communityName}`}>{'r/' + com.communityName}</Link>
                                            </h4>
                                <p className="recent__meta">{ moment(Number(com.Date)).fromNow()}</p>
                                        </div>
                                    </div>
                                )
                            })}

                    </div>

                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { communitylist } = state.community;
    const { message } = state.message;

    return {
        communitylist,
        message
    };
}
export default connect(mapStateToProps)(CommunityList);