import React, { Component } from 'react';
import { BsBookmark, BsGrid, BsListCheck, BsListUl } from "react-icons/bs";
import Select from "react-select";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from "react-redux";
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { postUpvote, postDownvote, savePost, reportPost, fetchCommunityPost } from '../../services/action/post';
import { DeletePosts } from '../../services/action/user';
import moment from 'moment';
import SweetAlert from 'react-bootstrap-sweetalert'
import { BsFillAlarmFill, BsFillBookmarkFill, BsFillExclamationCircleFill, BsLink45Deg, BsPeopleCircle, BsPersonCheck, BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';

const shortby = [
    {
        value: 0,
        label: 'Short by'
    },
    {
        value: 1,
        label: 'Short by default'
    },
    {
        value: 2,
        label: 'High Rated'
    },
    {
        value: 3,
        label: 'Most Reviewed'
    },
    {
        value: 4,
        label: 'Popular Listing'
    },
    {
        value: 5,
        label: 'Newest Listing'
    },
    {
        value: 6,
        label: 'Older Listing'
    },
    {
        value: 7,
        label: 'Price: low to high'
    },
    {
        value: 8,
        label: 'Price: high to low'
    },
    {
        value: 9,
        label: 'Price: high to low'
    },
    {
        value: 10,
        label: 'Random listing'
    }
]

class PostHeader extends Component {
    constructor(props) {
        super(props);
        this.onChangeReport = this.onChangeReport.bind(this);
        this.state = {
            isloading: false,
            community: '',
            reporttext: "",
            img: require('../../assets/images/img31.jpg')
        }

    }




    onChangeReport(e) {

        this.setState({
            reporttext: e.target.value
        });

        alert(this.state.reporttext)
    }

    upvote = async (postid) => {
        const obj = { 'post_id': postid, 'upvote_by': this.props.userdetails.id };
        await this.props.dispatch(postUpvote(obj));
        this.props.updatepostaftervote();
    }

    downvote = async (postid) => {
        const obj = { 'post_id': postid, 'downvote_by': this.props.userdetails.id };
        await this.props.dispatch(postDownvote(obj));
        this.props.updatepostaftervote();
    }

    deleteAlert = (postid) => (
        <SweetAlert
            warning
            showCancel
            confirmBtnText="Yes, delete it!"
            confirmBtnBsStyle="danger"
            title="Are you sure?"
            onConfirm={() => this.onDelete(postid)}
            onCancel={this.onCancel}
            focusCancelBtn
        >
            You will not be able to recover all data related to this post!
        </SweetAlert>
    )

    getAlert = (postid) => (
        <SweetAlert
            custom
            showCancel
            confirmBtnText="Report"
            placeHolder="Write something"
            onCancel={this.onCancel}
            btnSize="sm"
            onConfirm={() => this.onReport(postid)}
            type={'controlled'}
            dependencies={[this.state.reporttext]}
        >
            {(renderProps) => (
                <div className="central-meta">
                    <div className="new-postbox">
                        <figure>
                            <img src="/assets/images/resources/admin2.jpg" alt="" />
                        </figure>
                        <div className="newpst-input">
                            <form>
                                <textarea
                                    type={'text'}
                                    rows="4"
                                    ref={renderProps.setAutoFocusInputRef}
                                    className="form-control"
                                    value={this.state.firstName}
                                    onKeyDown={renderProps.onEnterKeyDownConfirm}
                                    onChange={(e) => this.setState({ reporttext: e.target.value })}
                                    placeholder={'write something'}
                                ></textarea>

                            </form>
                        </div>
                    </div>
                </div>
            )}
        </SweetAlert>
    );

    onReport = (postid) => {
        const obj = {
            post_id: postid,
            report_by: this.props.userdetails.id,
            reason: this.state.reporttext
        }
        console.log(obj);
        this.props.dispatch(reportPost(obj));
        this.setState({ alert: null })

    }

    report = (postid) => {
        this.setState({ alert: this.getAlert(postid) })
    }



    DeletePost = (postid) => {
        this.setState({ alert: this.deleteAlert(postid) })

    }

    onDelete(postid) {
        this.props.dispatch(DeletePosts(postid)).then(() => {
            this.props.updatepostaftervote();
        });
        this.setState({ alert: null });
    }

    savePost = (postid) => {
        const obj = {
            post_id: postid,
            saved_by: this.props.userdetails.id,
        }
        console.log(obj);
        this.props.dispatch(savePost(obj));
    }


    onCancel = () => {
        this.setState({
            alert: null
        });
    }


    handleChangeshortby = () => {
        const { selectedShortby } = this.state;
        this.setState(
            { selectedShortby }
        );
    }
    render() {
        return (
            <>

                <div className="container">
                    <Tabs>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="generic-header margin-bottom-30px">
                                    <p className="showing__text text-left">
                                        {this.state.title}
                                    </p>
                                    <div className="short-option mr-3">
                                        <Select
                                            value={this.selectedShortby}
                                            onChange={this.handleChangeshortby}
                                            placeholder="Short by"
                                            options={shortby}
                                        />
                                    </div>
                                    <TabList className="nav nav-tabs border-0" id="nav-tab">


                                        <Tab>
                                            <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                <span className="la"><BsListUl /></span>
                                            </Link>
                                        </Tab>

                                        <Tab>
                                            <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                <span className="la"><BsGrid /></span>
                                            </Link>
                                        </Tab>



                                    </TabList>

                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="tab-content" id="nav-tabContent">
                                    <TabPanel>
                                        <div>
                                            {this.props.posts && this.props.posts.length === 0 ?
                                                (<div className="central-meta item cardb margin-bottom-10px ">

                                                    <div className="row center">
                                                        <div className="widget">
                                                            <div className="banermeta">
                                                                <center>there is not post  </center>
                                                                <Link to={`/r/${this.props.communityName && this.props.communityName.communityName}/submit`}>create post</Link>
                                                            </div></div>
                                                    </div></div>
                                                ) :
                                                this.props.posts.map((post, i) => (
                                                    <div className="central-meta item cardb margin-bottom-10px" key={i}>
                                                        <div className="dropdown">
                                                            <a className="float-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><BsThreeDotsVertical />
                                                            </a>

                                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                <a class="dropdown-item"><Link to={`/post/edit/${post.canonicalurl}`} ><FaEdit /> Edit </Link></a>
                                                                <a class="dropdown-item" onClick={() => this.DeletePost(post.post_id)}> <AiFillDelete /> Delete</a>
                                                                <a class="dropdown-item" onClick={() => this.report(post.post_id)}><BsFillExclamationCircleFill /> Report</a>
                                                                <a class="dropdown-item " onClick={() => this.savePost(post.post_id)}><BsFillBookmarkFill /> save</a>

                                                            </div>

                                                        </div>
                                                        <div className="row">

                                                            <div className="col-3">
                                                                <div className="row">
                                                                    <div className="col-3">
                                                                        <p className="upvote" onClick={() => this.upvote(post.post_id)}> <b> <FaArrowAltCircleUp /> </b> </p><p>{post.vote}</p><p className="downvote" onClick={() => this.downvote(post.post_id)}> <b><FaArrowAltCircleDown /></b> </p>

                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="span2">
                                                                            <img src={this.state.img} alt="" className="img-thumbnail" />
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="col-9">
                                                                <div className="user-post">
                                                                    <div>
                                                                        <Link to={{ pathname: `/post/${post.canonicalurl}`, aboutProps: { postid: post.post_id } }} style={{ textDecoration: 'none', color: 'black' }} className="thumbnail self" >
                                                                            <b> {post.title}</b></Link>
                                                                        <a title="" href="#"> {post.url.replace(/^https?\:\/\/www\./i, "").split('/')[0]}... <BsLink45Deg /></a> <span className="badge badge-secondary badge-pill">{post.flare_tag}</span>

                                                                        <p>
                                                                            <Link to={`/r/${post.com_name}`}><b> <BsPeopleCircle /> r/{post.com_name}</b></Link> <button className="btn badge badge-primary badge-pill btn-xs" type="button">
                                                                                <span className="dislike" data-toggle="tooltip" title="join"></span> </button>Posted by <BsPersonFill /> <Link to={`/user/${post.username}`}> u/{post.username}</Link> <span><BsFillAlarmFill /> {moment(Number(post.post_time)).fromNow()}</span>
                                                                        </p>

                                                                    </div>



                                                                </div>
                                                            </div>
                                                            <hr></hr>
                                                        </div>
                                                        <div className="section-block-2 margin-top-30px"></div>
                                                    </div>

                                                ))
                                            }
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div>
                                            {this.props.posts && this.props.posts.length === 0 ?
                                                (<div className="central-meta item cardb">

                                                    <div className="row center">
                                                        <div className="widget">
                                                            <div className="banermeta">
                                                                <center>there is not post  </center>
                                                                <Link to={`/r/${this.props.communityName && this.props.communityName.communityName}/submit`}>create post</Link>
                                                            </div></div>
                                                    </div></div>
                                                ) :

                                                this.props.posts.map((item, i) => {
                                                    return (
                                                        <div className="card-item blog-card" key={i}>
                                                            <div className="dropdown">
                                                                <a className="float-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><BsThreeDotsVertical />
                                                                </a>

                                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item"><Link to={`/post/edit/${item.canonicalurl}`} ><FaEdit /> Edit </Link></a>
                                                                    <a class="dropdown-item" onClick={() => this.DeletePost(item.post_id)}> <AiFillDelete /> Delete</a>
                                                                    <a class="dropdown-item" onClick={() => this.report(item.post_id)}><BsFillExclamationCircleFill /> Report</a>
                                                                    <a class="dropdown-item " onClick={() => this.savePost(item.post_id)}><BsFillBookmarkFill /> save</a>

                                                                </div>

                                                            </div>

                                                            <div className="row">
                                                                <div className="col-1">
                                                                    <p className="upvote" onClick={() => this.upvote(2)}>  <span className="la"><b><FaArrowAltCircleUp /></b></span> </p><p>{item.vote}</p><p className="downvote" onClick={() => this.downvote(2)}> <span className="la"><b><FaArrowAltCircleDown /></b></span> </p>

                                                                </div>
                                                                <div className="col-11">
                                                                    <div>
                                                                        <ul className="post-author d-flex align-items-center">
                                                                            <li>
                                                                                <Link to={`/user/${item.username}`}>  <img src={this.state.img} alt="Author" />
                                                                                    <span className="by__text"> By</span>
                                                                                    <span> {item.username}</span></Link>
                                                                            </li>
                                                                            <li>

                                                                            </li>
                                                                        </ul>
                                                                        <Link to={`/post/${item.canonicalurl}`} className="card-image-wrap">

                                                                            <div className="card-image">
                                                                                <img src={this.state.img} alt="Blog Full Width" className="card__img" />
                                                                            </div>
                                                                        </Link>
                                                                        <div>
                                                                            <div>
                                                                                <Link to={{ pathname: `/post/${item.canonicalurl}`, aboutProps: { postid: item.post_id } }} style={{ textDecoration: 'none', color: 'black' }} className="thumbnail self" >
                                                                                    <b> {item.title}</b></Link>
                                                                                <a title="" href="#"> {item.url.replace(/^https?\:\/\/www\./i, "").split('/')[0]}... <i className="fa fa-external-link" aria-hidden="true"></i></a> <span className="badge badge-secondary badge-pill">{item.flare_tag}</span>

                                                                                <p>
                                                                                    <Link to={`/r/${item.com_name}`}><b> <BsPeopleCircle /> r/{item.com_name}</b></Link> <BsFillAlarmFill /> <span>{moment(Number(item.post_time)).fromNow()}</span>
                                                                                </p>

                                                                            </div>



                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                        </div>

                                    </TabPanel>
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </div>

                {this.state.alert}
            </>
        );
    }
}
function mapStateToProps(state) {
    const { posts, isFetched } = state.post;
    const { userdetails } = state.auth;
    const { postsdetail, postcomment, upvoted, downvoted, removevoted } = state.post;


    return {
        posts,
        isFetched, postsdetail, postcomment, upvoted, downvoted, removevoted, userdetails
    };
}
export default connect(mapStateToProps)(PostHeader);
