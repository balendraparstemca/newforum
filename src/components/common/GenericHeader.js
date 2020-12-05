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
import { Button } from 'react-bootstrap';
import { FiRefreshCw } from 'react-icons/fi';

const shortby = [
    {
        value: 0,
        label: 'Short by'
    },
    {
        value: 1,
        label: 'TOP'
    },
    {
        value: 2,
        label: 'New'
    },
    {
        value: 3,
        label: 'Old'
    },

]

class PostHeader extends Component {
    constructor(props) {
        super(props);
        this.onChangeReport = this.onChangeReport.bind(this);
        this.state = {
            isloading: false,
            community: '',
            reporttext: "",
            img: require('../../assets/images/post.png'),
            userimg: require('../../assets/images/testi-img2.jpg'),
            allpost: []
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
        this.props.dispatch(savePost(obj)).then(() => {
            this.props.updatepostaftervote();
        });
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
                                    <div className="showing__text mr-1 margin-left-2px">
                                        <Select
                                            value={this.selectedShortby}
                                            onChange={this.handleChangeshortby}
                                            placeholder="Short by"
                                            options={shortby}
                                        />
                                    </div>
                                    <div className="showing__text mr-1">
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


                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="widget">
                                                                <div className="banermeta">
                                                                    <center>there is not post  </center>
                                                                    <Link to={`/forum/submit`}> <Button variant="danger color-white" size="lg" block>
                                                                        create post

                                                                    </Button></Link>
                                                                </div></div>
                                                        </div>
                                                    </div>

                                                </div>

                                                ) :
                                                this.props.posts.map((post, i) => (
                                                    <div className="central-meta item cardb margin-bottom-10px" key={i}>
                                                        <div className="dropdown">
                                                            <a className="float-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><BsThreeDotsVertical />
                                                            </a>

                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                <p className="dropdown-item"><Link to={`/forum/post/edit/${post.canonicalurl}`} ><FaEdit /> Edit </Link></p>
                                                                <p className="dropdown-item" onClick={() => this.DeletePost(post.post_id)}> <AiFillDelete /> Delete</p>
                                                                <p className="dropdown-item" onClick={() => this.report(post.post_id)}><BsFillExclamationCircleFill /> Report</p>
                                                                <p className="dropdown-item " onClick={() => this.savePost(post.post_id)}><BsFillBookmarkFill /> save</p>

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
                                                                        <Link to={{ pathname: `/forum/post/${post.canonicalurl}`, aboutProps: { postid: post.post_id } }} style={{ textDecoration: 'none', color: 'black' }} className="thumbnail self" >
                                                                            <b> {post.title}</b></Link>
                                                                        <a target="_blank" href={post.url}> {post.url.replace(/^https?\:\/\/www\./i, "").split('/')[0]}... <BsLink45Deg /></a> <span className="badge badge-secondary badge-pill">{post.flare_tag}</span>

                                                                        <p>
                                                                            <Link to={`/forum/r/${post.com_name}`}><b> <BsPeopleCircle /> r/{post.com_name}</b></Link> <button className="btn badge badge-primary badge-pill btn-xs" type="button">
                                                                                <span className="dislike" data-toggle="tooltip" title="join"></span> </button>Posted by <BsPersonFill /> <Link to={`/forum/user/${post.username}`}> u/{post.username}</Link> <span><BsFillAlarmFill /> {moment(Number(post.post_time)).fromNow()}</span>
                                                                        </p>

                                                                    </div>



                                                                </div>
                                                            </div>
                                                            <hr></hr>
                                                        </div>

                                                    </div>

                                                ))

                                            }
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="button-shared text-center margin-top-30px">
                                                        <Button variant="danger" className="border-0">
                                                            Load More <span><FiRefreshCw /></span>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div>
                                            {this.props.posts && this.props.posts.length === 0 ?
                                                (<div className="central-meta item cardb">

                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="widget">
                                                                <div className="banermeta">
                                                                    <center>there is not post  </center>
                                                                    <Link to={`/forum/submit`}> <Button variant="danger color-white" size="lg" block>
                                                                        create post

                                                                    </Button></Link>
                                                                </div></div>
                                                        </div>
                                                    </div></div>
                                                ) :

                                                this.props.posts.map((item, i) => {
                                                    return (
                                                        <div className="card-item blog-card" key={i}>
                                                            <div className="dropdown">
                                                                <p className="float-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><BsThreeDotsVertical />
                                                                </p>

                                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <p class="dropdown-item"><Link to={`/forum/post/edit/${item.canonicalurl}`} ><FaEdit /> Edit </Link></p>
                                                                    <p class="dropdown-item" onClick={() => this.DeletePost(item.post_id)}> <AiFillDelete /> Delete</p>
                                                                    <p class="dropdown-item" onClick={() => this.report(item.post_id)}><BsFillExclamationCircleFill /> Report</p>
                                                                    <p class="dropdown-item " onClick={() => this.savePost(item.post_id)}><BsFillBookmarkFill /> save</p>

                                                                </div>

                                                            </div>

                                                            <div className="row">
                                                                <div className="col-1">
                                                                    <p className="upvote" onClick={() => this.upvote(item.post_id)}>  <span className="la"><b><FaArrowAltCircleUp /></b></span> </p><p>{item.vote}</p><p className="downvote" onClick={() => this.downvote(item.post_id)}> <span className="la"><b><FaArrowAltCircleDown /></b></span> </p>

                                                                </div>
                                                                <div className="col-11">
                                                                    <div>
                                                                        <ul className="post-author d-flex align-items-center">
                                                                            <li>
                                                                                <Link to={`/forum/user/${item.username}`}>  <img src={this.state.userimg} alt="Author" />
                                                                                    <span className="by__text"> By</span>
                                                                                    <span> {item.username}</span></Link>
                                                                            </li>
                                                                            <li>

                                                                            </li>
                                                                        </ul>
                                                                        <Link to={`/forum/post/${item.canonicalurl}`} className="card-image-wrap">

                                                                            <div className="card-image">
                                                                                {item.imgSrc ? <img src={`http://localhost:7999/api/v1/utilities/${item.imgSrc}`} alt="Blog Full Width" className="card__img" /> : ''}
                                                                            </div>
                                                                        </Link>
                                                                        <div>
                                                                            <div>
                                                                                <Link to={{ pathname: `/forum/post/${item.canonicalurl}`, aboutProps: { postid: item.post_id } }} style={{ textDecoration: 'none', color: 'black' }} className="thumbnail self" >
                                                                                    <b> {item.title}</b></Link>
                                                                                <a target="_blank" href={item.url}> {item.url.replace(/^https?\:\/\/www\./i, "").split('/')[0]}... <i className="fa fa-external-link" aria-hidden="true"></i></a> <span className="badge badge-secondary badge-pill">{item.flare_tag}</span>

                                                                                <p>
                                                                                    <Link to={`/forum/r/${item.com_name}`}><b> <BsPeopleCircle /> r/{item.com_name}</b></Link> <BsFillAlarmFill /> <span>{moment(Number(item.post_time)).fromNow()}</span>
                                                                                </p>

                                                                            </div>



                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="button-shared text-center margin-top-30px">
                                                        <Button variant="danger" className="border-0">
                                                            Load More <span><FiRefreshCw /></span>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
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
