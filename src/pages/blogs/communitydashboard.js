import React, { Component } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom";
import { BsListCheck, BsBookmark, BsEye } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { AiOutlineUser, AiOutlinePlusCircle, AiOutlineExclamationCircle } from 'react-icons/ai'
import Button from "../../components/common/Button";
import $ from 'jquery'
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import GenericHeader from '../../components/common/GenericHeader';
import { connect } from "react-redux";
import { fetchRules } from '../../services/action/common';
import { fetchCommunityPost } from '../../services/action/post';
import SweetAlert from 'react-bootstrap-sweetalert'
import { communitydetails, joinCommunity, leaveCommunity, approveCommunity, fetchcommunitymember } from "../../services/action/community";
import CommunitySidebar from '../../components/sidebars/communitysidebar';
import { Badge } from 'react-bootstrap';
import EditCommunity from './editCommunity';
import { Helmet } from 'react-helmet';


class CommunityDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            communitydetail: null,
            message: '',
            loading: false,
            communitymember: [],
            joined: false,
            member: null,
            img: require('../../assets/images/default.png'),
            lists: []

        }


    }

    componentDidMount() {

        this.fetchcommunityDeatil()

        this.setState({
            prevurl: this.props.match.params.communityurl
        })


        $(document).on('click', '.delete-account-info .delete-account, .card-item .card-content-wrap .delete-btn', function (e) {
            $('body').addClass('modal-open').css({ paddingRight: '17px' });
            $(".account-delete-modal").addClass('show')
            e.preventDefault();
        })
        $(document).on('click', '.account-delete-modal .modal-bg, .account-delete-modal .modal-dialog .btn-box .theme-btn', function (e) {
            $('body').removeClass('modal-open').css({ paddingRight: '0' });
            $(".account-delete-modal").removeClass('show')
            e.preventDefault();
        })
        $(document).on('click', '.user-edit-form .edit-form-btn, .user-edit-form .btn-box .theme-btn', function (e) {
            $(".user-edit-form .dropdown-menu, .user-edit-form .dropdown").toggleClass('show');
            $(".user-edit-form .dropdown-menu").css({ position: 'absolute', transform: 'translate3d(0px, -733px, 0px)', top: '0', left: '0', willChange: 'transform' })
            e.preventDefault();
        });
    }

    componentDidUpdate() {

        if (this.state.prevurl !== this.props.match.params.communityurl) {
            this.setState({ prevurl: this.props.match.params.communityurl })
            this.fetchcommunityDeatil()

        }
    }

    joinCommunity = async (comid) => {
        if (this.props.isLoggedIn) {
            const obj = {
                com_id: comid,
                added_by: this.props.userdetails.id,
                userid: this.props.userdetails.id
            }
            this.props.dispatch(joinCommunity(obj)).then(() => {
                this.fetchcommunitymember();

            })

        } else {
            alert('login')
        }

    }

    leaveCommunity = async (comid, userid) => {
        const obj = {
            com_id: comid,
            userid: userid
        }
        this.props.dispatch(leaveCommunity(obj)).then(() => {
            this.fetchcommunitymember();
        })


    }

    approveCommunity = async (comid, userid, member) => {
        const obj = {
            memberid: member,
            com_id: comid,
            userid: userid
        }
        this.props.dispatch(approveCommunity(obj)).then(() => {
            this.fetchcommunitymember();
        })


    }



    fetchcommunityDeatil = async () => {
        this.setState({ loading: true })
        let obj = { "communityName": this.props.match.params.communityurl }
        this.props.dispatch(communitydetails(obj)).then(() => {
            if (this.props.communitydetails.length > 0) {
                this.setState({
                    communitydetail: this.props.communitydetails[0]
                })
                this.fetchcommunitypost();
                this.props.dispatch(fetchRules(this.props.communitydetails[0].com_id))
                this.fetchcommunitymember();

            }
            else {
                this.props.history.push("/error");
                window.location.reload();
            }
        })
    }

    fetchcommunitymember = () => {
        let obj = { "communityId": this.props.communitydetails.length > 0 && this.props.communitydetails[0].com_id }
        this.props.dispatch(fetchcommunitymember(obj)).then(() => {
            if (this.props.communitymember.length > 0) {
                this.setState({
                    communitymember: this.props.communitymember, member: this.props.communitymember.length
                })
                if (this.props.isLoggedIn) {
                    const join = this.props.communitymember.some((value) => {
                        return value.member === this.props.userdetails.id
                    });
                    this.setState({ joined: join })

                }

            }
            else {
                this.setState({ joined: false })

            }
        })
    }

    fetchcommunitypost = async () => {
       return await this.props.dispatch(fetchCommunityPost(this.props.communitydetails[0].com_id))

    }

    render() {
        const user = this.props.userdetails && this.props.userdetails;
      

        return (
            <main className="List-map-view2">
                <Helmet>
                    <title>{this.state.communitydetail && ('r/' + this.state.communitydetail.communityName)}</title>
                    <meta name="description" content={this.state.communitydetail && this.state.communitydetail.about} />
                    <meta name="keywords" content={this.state.communitydetail && ('r/' + this.state.communitydetail.communityName)} />
                </Helmet>
                {/* Header */}
                <GeneralHeader />

                <section className="dashboard-area padding-top-140px padding-bottom-90px">
                    <div className="container">
                        <Tabs>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="dashboard-nav d-flex justify-content-between align-items-center mb-4">
                                        <div className="author-bio margin-bottom-20px">
                                            <div className="d-flex align-items-center mb-4">
                                                <img src={this.state.img} alt="author" />
                                                <div className="author-inner-bio">
                                                    <h4 className="author__title font-weight-bold pb-0 mb-1">
                                                        {this.state.communitydetail && ('r/' + this.state.communitydetail.communityName)}
                                                    </h4>

                                                    <div className="author__meta">
                                                        {
                                                            this.props.isLoggedIn ? (
                                                                this.state.communitydetail && (this.state.communitydetail.admin == user.id ? 'Group Admin' : (<div className="add-btn">
                                                                    {this.state.joined && this.state.joined ? <button type="button" className="btn btn-success" onClick={() => this.leaveCommunity(this.state.communitydetail.com_id, user.id)} >
                                                                        leave
                                                                 </button> : <>
                                                                            <p>you can join to get the latest posts notification</p>
                                                                            <button type="button" className="btn btn-primary" onClick={() => this.joinCommunity(this.state.communitydetail.com_id)} >
                                                                                join
                                                              </button></>}

                                                                </div>))) : <>
                                                                    <p>you can join to get the latest posts notification</p>
                                                                    <button type="button" className="btn btn-primary" onClick={() => this.joinCommunity(this.state.communitydetail.com_id)} >
                                                                        join
                                                                 </button></>}
                                                    </div>


                                                </div>
                                            </div>
                                      
                                        <TabList className="nav nav-tabs border-0" id="nav-tab">
                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><BsListCheck /></span> Posts
                                                </Link>
                                            </Tab>
                                            <Tab>
                                                {
                                                    this.props.isLoggedIn ? (
                                                        this.state.communitydetail && this.state.communitydetail.admin == user.id ?
                                                            <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                                <span className="la"><BsBookmark /></span>Member
                                                </Link> : '') : ''
                                                }
                                            </Tab>
                                            <Tab>
                                                {
                                                    this.props.isLoggedIn ? (
                                                        this.state.communitydetail && this.state.communitydetail.admin == user.id ?
                                                            <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                                <span className="la"><AiOutlineUser /></span> Edit
                                                </Link> : '') : ''
                                                }
                                            </Tab>

                                            <div className="btn-box">
                                                <Link to={`/forum/submit/${this.state.communitydetail && this.state.communitydetail.communityName}`} className="theme-btn"><span className="la"><AiOutlinePlusCircle /></span> create post</Link>
                                            </div>
                                            {
                                                this.props.isLoggedIn ? (
                                                    this.state.communitydetail && this.state.communitydetail.admin == user.id ?
                                                        <div className="btn-box">
                                                            <button className="theme-btn"><span className="la"><AiOutlinePlusCircle /></span>Delete Community</button>
                                                        </div> : '') : ''
                                            }
                                        </TabList>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="tab-content" id="nav-tabContent">
                                        <TabPanel>
                                            <section className="blog-grid margin-top-10px  padding-bottom-10px">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-8">
                                                            <div className="margin-top-0px">
                                                                <GenericHeader updatepostaftervote={this.fetchcommunitypost} urlid={this.props.match.params.communityurl} />
                                                            </div>

                                                        </div>
                                                        <div className="col-lg-4">

                                                            <CommunitySidebar categoryid={this.state.communitydetail && this.state.communitydetail.category} />
                                                        </div>
                                                    </div>

                                                </div>
                                            </section>
                                        </TabPanel>
                                        <TabPanel>
                                            <section className="blog-grid margin-top-10px  padding-bottom-10px">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-8">
                                                            <h5>Member List</h5>
                                                            <div className="section-block-2 margin-top-30px padding-bottom-20px margin-bottom-30px"></div>
                                                            <div className="margin-top-5px">

                                                                {this.props.communitymember && this.props.communitymember.length === 0 ?
                                                                    (
                                                                        <div className="btn-box text-center padding-top-50px">
                                                                            <Button url="#" text="no community list " className=" d-block">
                                                                                <span><BsEye /></span>
                                                                            </Button>
                                                                        </div>
                                                                    ) : this.props.communitymember.map((com, i) => {
                                                                        return (
                                                                            <div key={i} className="recent-item mb-3">
                                                                                <div className="recent-img">
                                                                                    <FaUserAlt />
                                                                                </div>
                                                                                <div className="recentpost-body row">
                                                                                    <div className="col"> <h4 className="recent__link">
                                                                                        <Link to={`/forum/user/${com.username}`}>{'u/' + com.username}</Link>
                                                                                    </h4>
                                                                                    </div>
                                                                                    <div className="col">
                                                                                        {this.state.communitydetail && this.state.communitydetail.admin === com.member ? 'admin' : (<Badge variant="success" onClick={() => this.leaveCommunity(com.community_id, com.member)} >Remove</Badge>)}
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })}
                                                            </div>

                                                        </div>
                                                        <div className="col-lg-4">

                                                            <CommunitySidebar categoryid={this.state.communitydetail && this.state.communitydetail.category} />
                                                        </div>
                                                    </div>

                                                </div>
                                            </section>
                                        </TabPanel>

                                        <TabPanel>
                                            <EditCommunity />
                                        </TabPanel>
                                    </div>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </section>

                {/* Newsletter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />


                {/* Modal */}
                <div className="modal-form text-center">
                    <div className="modal fade account-delete-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                        <div className="modal-bg"></div>
                        <div className="modal-dialog modal-sm" role="document">
                            <div className="modal-content p-4">
                                <div className="modal-top border-0 mb-4 p-0">
                                    <div className="alert-content">
                                        <span className="la warning-icon"><AiOutlineExclamationCircle /></span>
                                        <h4 className="modal-title mt-2 mb-1">Your account will be deleted permanently!</h4>
                                        <p className="modal-sub">Are you sure to proceed.</p>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <button type="button" className="theme-btn border-0 button-success mr-1" data-dismiss="modal">
                                        Cancel
                                    </button>
                                    <button type="button" className="theme-btn border-0 button-danger">
                                        delete!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main >


        );
    }
}

function mapStateToProps(state) {
    const { communitydetails, communitymember } = state.community;
    const { userdetails, isLoggedIn } = state.auth;
    const { message } = state.message;

    return {
        communitydetails, userdetails, communitymember, isLoggedIn,
        message
    };
}
export default connect(mapStateToProps)(CommunityDashboard);
