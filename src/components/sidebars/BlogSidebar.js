import React, { Component } from 'react';
import { BsEye } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from 'moment';
import { communitydetails } from '../../services/action/community';
import { fetchCommunityList } from '../../services/action/common';
import { TiGroup } from 'react-icons/ti';
class BlogSidebar extends Component {
    state = {
        img: require('../../assets/images/default.png'),
        title: 'Similar Posts',
        communitydetails: {},
        cmid: null,
        communitylist:[]

    }

    componentDidUpdate(prevProps) {
        if (this.state.cmid !== this.props.comid) {
            this.setState({ cmid: this.props.comid });
            let obj = { "com_id": this.props.comid }
            this.props.dispatch(communitydetails(obj)).then(() => {
                this.setState({
                    communitydetails: this.props.communitydetails[0]
                })

                let obj = {
                    'category': this.props.communitydetails[0].category
                };

                this.props.dispatch(fetchCommunityList(obj)).then(() => {
                    this.setState({

                        communitylist: this.props.communitylist
                    })
                });

            })
        }

    }

    render() {
        return (
            <>
                <div className="sidebar section-bg">
                    <div className="sidebar-widget">
                        <div className="author-bio margin-bottom-20px">
                            <div className="align-items-center">
                                <div className=""><img src={this.state.img} alt="author" /></div>
                                <div className="author-inner-bio">
                                    <Link to={`/forum/r/${this.state.communitydetails && this.state.communitydetails.communityName}`}>
                                        <b>
                                            r/{this.state.communitydetails && this.state.communitydetails.communityName}
                                        </b>

                                    </Link>
                                    <p className="author__meta">
                                        created : {moment(Number(this.state.communitydetails && this.state.communitydetails.Date)).fromNow()}
                                    </p>
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


                    <div>
                        <div className="sidebar-widget">
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
                                        ) : this.state.communitylist.filter((obj) => { return obj.com_id !== this.props.communitydetails[0].com_id }).slice(0, 5).map((com, i) => {
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
                        </div>
                    </div>

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
export default connect(mapStateToProps)(BlogSidebar);
