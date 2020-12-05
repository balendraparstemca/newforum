import React, { Component } from 'react';
import { connect } from "react-redux";
import {  fetchCommunityList } from '../../services/action/common';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import moment from 'moment';
import { TiGroup } from 'react-icons/ti';
import { Button } from 'react-bootstrap';
import { BsEye } from 'react-icons/bs';
import { FaBusinessTime, FaUserFriends } from 'react-icons/fa';
class CommunitySidebar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            img: require('../../assets/images/default.png'),
            communitydetails: {},
            title: "All Category Lists",
            communitylist: [],
            catid: null,
            lists: []
        }
    }
    componentDidMount() {
        this.setState({
            communitydetails: this.props.communitydetails[0],

        })


    }

    componentDidUpdate(prevProps) {
        if (this.state.catid !== this.props.categoryid) {
            this.setState({ catid: this.props.categoryid });
            this.setState({
                communitydetails: this.props.communitydetails[0]
            })
            let obj = {
                'category': this.props.categoryid
            };

            this.props.dispatch(fetchCommunityList(obj)).then(() => {
                this.setState({

                    communitylist: this.props.communitylist
                })
            });
        }
    }


    render() {
        const { posts } = this.props
        const map = new Map();
        let lists = []
        posts.map(com => {
            if (!map.has(com.flare_tag)) {
                map.set(com.flare_tag, true);    // set any value to Map
                lists.push({ url: `${com.flare_tag}`, text: `${com.flare_tag}` })
            }
        })
        return (
            <>
                <div className="sidebar section-bg">
                    <div className="sidebar-widget">
                        <div className="author-bio margin-bottom-20px">
                            <div className="align-items-center">
                                <div className=""><img src={this.state.img} alt="author" /></div>
                                <div className="author-inner-bio">
                                    <b>
                                        r/{this.state.communitydetails && this.state.communitydetails.communityName}
                                    </b>
                                    <p className="author__meta">
                                       <FaBusinessTime/> created : {moment(Number(this.state.communitydetails && this.state.communitydetails.Date)).fromNow()}
                                    </p>
                                    <p className="author__meta">
                                       <FaUserFriends/> Member : 12                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="section-heading">
                            <p className="sec__desc font-size-15 line-height-24">
                                {this.state.communitydetails && this.state.communitydetails.about}
                            </p>
                        </div>
                        <div className="section-block-2 margin-top-30px"></div>
                    </div>

                    <div className="sidebar-widget tag-widget">
                        <h3 className="widget-title">
                            Filter By Flair
                                                                </h3>
                        <div className="title-shape"></div>
                        <ul className="tag-list padding-top-30px">

                            {lists && lists.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <Link to={item.url}>{item.text}</Link>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                    {/* related community */}
                    {<div className="sidebar-widget">
                        <h3 className="widget-title">
                            Related community
                    </h3>
                        <div className="title-shape"></div>
                        <div className="cat-list padding-top-30px">
                            <ul className="list-items">

                                {this.state.communitylist && this.state.communitylist.length === 0 ?
                                    (
                                        <li className="mb-2 pb-2" >
                                            <Link to="#" className="d-flex justify-content-between align-items-center before-none">
                                                there is no related community
                                         </Link>

                                        </li>
                                    ) : this.state.communitylist.slice(0,5).map((com, i) => {
                                        return (
                                            <li className="mb-2 pb-2" key={i}>
                                                <div className="author-bio margin-bottom-0px">
                                                    <div className="d-flex align-items-center">
                                                       {i + 1}. <TiGroup />
                                                        <div className="author-inner-bio margin-left-2px">
                                                            <p>
                                                                <Link to={`/forum/r/${com.communityName}`}>{'r/' + com.communityName}</Link>
                                                            </p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                        )
                                    })
                                }

                            </ul>
                           
                        </div>
                    </div>}




                </div>
            </>
        );
    }
}


function mapStateToProps(state) {
    const { communitydetails, communitylist } = state.community;
    const { message } = state.message;
    const { category } = state.common;
    const { posts } = state.post;

    return {
        communitydetails, category, communitylist, posts,
        message
    };
}
export default connect(mapStateToProps)(CommunitySidebar);