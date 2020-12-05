import React, { Component } from 'react';
import { connect } from "react-redux";
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { postUpvote, postDownvote, savePost, reportPost, fetchCommunityPost } from '../../services/action/post';
import { DeletePosts } from '../../services/action/user';
import moment from 'moment';
import SweetAlert from 'react-bootstrap-sweetalert'
import { BsFillAlarmFill, BsFillBookmarkFill, BsFillExclamationCircleFill, BsLink45Deg, BsPeopleCircle, BsPersonCheck, BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';

class Post extends Component {
  

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


    componentDidMount() {
        this.fetchcommunitypost(8);
        
    }

    fetchcommunitypost = async (comid) => {
        await this.props.dispatch(fetchCommunityPost(comid))

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

    render() {
        return (
            <>
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
                        this.props.posts.map((post, i) => (
                            <div className="central-meta item cardb" key={i}>
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

                                </div>

                            </div>
                        ))
                    }
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
export default connect(mapStateToProps)(Post);