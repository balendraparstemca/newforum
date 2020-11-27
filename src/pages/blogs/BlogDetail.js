import React, { Component } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import { connect } from "react-redux";
import BlogSidebar from "../../components/sidebars/BlogSidebar";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import { FetchpostComment, fetcPostDetail, savePost, postDownvote, postUpvote, reportPost, postComment, postCommentvote, postCommentdelete } from '../../services/action/post';
import ListingDetailsComments from '../../components/contact/ListingDetailsComments';
import BlogCommentFields from '../../components/blogs/BlogCommentFields';
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaEdit, FaQuoteRight, FaUserCheck } from 'react-icons/fa'
import { BsFillBookmarkFill, BsFillExclamationCircleFill, BsLink45Deg, BsPencil, BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from "react-router-dom";
import BlogTags from '../../components/blogs/BlogTags';
import moment from 'moment';
import SweetAlert from 'react-bootstrap-sweetalert'
import { AiFillDelete } from 'react-icons/ai';
import { DeletePosts } from '../../services/action/user';
import { FiThumbsUp } from 'react-icons/fi';
import { Badge } from 'react-bootstrap';
import SectionDivider from '../../components/common/SectionDivider';
import BlogComment from '../../components/contact/blogComment';
class BlogDetail extends Component {

    constructor(props) {
        super(props)
        this.onChangeReport = this.onChangeReport.bind(this);
        this.handleReview = this.handleReview.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.state = {
            postdetail: null,
            comments: [],
            message: '',
            loading: false,
            upvoted: false,
            downvoted: false,
            cupvote: 'upvote',
            cdownvote: 'downvote',
            reporttext: "",
            authorImg: require('../../assets/images/default.png'),
            userimg: require('../../assets/images/testi-img1.jpg'),
            img: require('../../assets/images/post.png'),

        }
    }



    componentDidMount() {

        this.postdetail();

    }

    onChangeReport(e) {

        this.setState({
            reporttext: e.target.value
        });

        alert(this.state.reporttext)
    }

    onChangeMessage(e) {
        this.setState({
            message: e.target.value,
        });
    }


    handleReview(e) {
        e.preventDefault();
        this.posttComment()
        this.setState({ message: '' })


    }

    postdetail = () => {
        this.setState({ loading: true })
        let obj = { canonicalurl: this.props.match.params.url }
        this.props.dispatch(fetcPostDetail(obj)).then(() => {
            if (this.props.postsdetail.length > 0) {
                this.setState({
                    postdetail: this.props.postsdetail[0]
                })
                this.fetchcomment(this.props.postsdetail[0].post_id);
            }
            else {
                this.props.history.push("/error");
                window.location.reload();
            }
        })
    }

    fetchcomment = (postid) => {
        this.props.dispatch(FetchpostComment(postid)).then(() => {
            if (this.props.postsdetail.length > 0) {
                this.setState({ comments: this.props.postcomment })
            }
        })
    }


    upvote = async (postid) => {
        const obj = { 'post_id': postid, 'upvote_by': this.props.userdetails.id };
        await this.props.dispatch(postUpvote(obj));
        await this.postdetail();


    }

    downvote = async (postid) => {
        const obj = { 'post_id': postid, 'downvote_by': this.props.userdetails.id };
        await this.props.dispatch(postDownvote(obj));
        await this.postdetail();


    }

    posttComment() {
        let obj = {
            comment_by: this.props.userdetails.id, textcomment: this.state.message,
            post_id: this.state.postdetail.post_id
        }
        this.props.dispatch(postComment(obj)).then(() => {
            this.fetchcomment(this.props.postsdetail[0].post_id);

        })

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





    savePost = (postid) => {
        const obj = {
            post_id: postid,
            saved_by: this.props.userdetails.id,
        }
        this.props.dispatch(savePost(obj)).then(() => {
            this.postdetail();
        });
    }

    removeComment = (id) => {
        this.props.dispatch(postCommentdelete(id)).then(() => {
            this.fetchcomment(this.props.postsdetail[0].post_id);
        })
    }

    vote = (id) => {
        const obj = {
            post_id: this.state.postdetail && this.state.postdetail.post_id,
            comment_by: this.props.userdetails.id,
            comment_id: id
        }
        this.props.dispatch(postCommentvote(obj)).then(() => {
            this.fetchcomment(this.props.postsdetail[0].post_id);
        })
    }


    onCancel = () => {
        this.setState({
            alert: null
        });
    }


    render() {
        return (
            <main className="List-map-view2">
                {/* Header */}
                <GeneralHeader />



                <section className="blog-single-area padding-top-140px padding-bottom-70px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="card-item blog-card border-bottom-0">
                                    <a className="float-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><BsThreeDotsVertical />
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" onClick={() => this.report(this.state.postdetail && this.state.postdetail.post_id)}><BsFillExclamationCircleFill /> Report</a>
                                        <a className="dropdown-item " onClick={() => this.savePost(this.state.postdetail && this.state.postdetail.post_id)}><BsFillBookmarkFill /> save</a>

                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <p className="upvote" onClick={() => this.upvote(this.state.postdetail.post_id)}>  <span className="la"><b><FaArrowAltCircleUp /></b></span> </p><p>{this.state.postdetail && this.state.postdetail.vote}</p><p className="downvote" onClick={() => this.downvote(this.state.postdetail.post_id)}> <span className="la"><b><FaArrowAltCircleDown /></b></span> </p>

                                        </div>
                                        <div className="col-11">

                                            <div>
                                                <ul className="post-author d-flex align-items-center justify-content-between mb-3">
                                                    <li>
                                                        <img src={this.state.authorImg} alt="" />

                                                        <span><Link to={`/forum/r/${this.state.postdetail && this.state.postdetail.com_name}`}>  r/{this.state.postdetail && this.state.postdetail.com_name} </Link></span>
                                                        <span className="by__text"> <FaUserCheck /> By </span>
                                                        <span className="by__text"> <Link to={`/forum/user/${this.state.postdetail && this.state.postdetail.username}`}> u/{this.state.postdetail && this.state.postdetail.username} </Link></span>
                                                        <span>{this.state.postdetail && moment(Number(this.state.postdetail.post_time)).fromNow()} - </span>
                                                    </li>

                                                </ul>
                                                <h2 className="card-title font-size-26">
                                                    {this.state.postdetail && this.state.postdetail.title}
                                                </h2>
                                                <p>
                                                    <a target="_blank" href={this.state.postdetail && this.state.postdetail.url}> {this.state.postdetail && this.state.postdetail.url.replace(/^https?\:\/\/www\./i, "").split('/')[0]}... <BsLink45Deg /></a> <span className="badge badge-secondary badge-pill">{this.state.postdetail && this.state.postdetail.flare_tag}</span>

                                                </p>
                                                <div className="card-image">
                                                { this.state.postdetail && this.state.postdetail.imgSrc ? <img src={`http://localhost:7999/api/v1/utilities/${this.state.postdetail.imgSrc}`} alt="Blog Full Width" className="card__img" />: ''}
                                                </div>
                                                <p className="card-sub mt-3">

                                                    {this.state.postdetail && this.state.postdetail.description}
                                                </p>


                                                <div className="section-block margin-top-30px margin-bottom-30px"></div>
                                                <div className="tag-items d-flex justify-content-between">

                                                </div>
                                                <div className="section-block margin-top-30px margin-bottom-10px"></div>
                                                <div className="comments-wrap">

                                                    <div className="title-shape"></div>
                                                    <div className="add-review-listing padding-top-50px">
                                                        <h2 className="widget-title">Add a Comment</h2>
                                                        <div className="title-shape"></div>
                                                        <div className="section-heading padding-top-10px">
                                                            <p className="sec__desc font-size-16">Please Login before commenting *</p>
                                                        </div>
                                                        <div className="add-review-listing padding-top-0px" id="review">


                                                            <div className="contact-form-action mt-5">
                                                                <form method="post" onSubmit={this.handleReview}>
                                                                    <div className="row">


                                                                        <div className="col-lg-12">
                                                                            <div className="input-box">
                                                                                <label className="label-text">discussion</label>
                                                                                <div className="form-group">
                                                                                    <span className="la form-icon"><BsPencil /></span>
                                                                                    <textarea className="message-control form-control" name="message" value={this.state.message} onChange={this.onChangeMessage} required="required" placeholder="Write Message"></textarea>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <div className="upload-btn-box">

                                                                                <button className="theme-btn border-0 margin-top-20px" type="submit" value="submit">
                                                                                    Submit review
                                                                                 </button>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <SectionDivider />
                                                    </div>
                                                    <div className="section-block-2 margin-top-40px"></div>

                                                    <div className="title-shape"></div>
                                                    <h2 className="widget-title">{this.state.comments && this.state.comments.length} discussion</h2>
                                                    <ul className="comments-list padding-top-40px">
                                                        <li>

                                                            {this.state.comments && this.state.comments.map((comment, i) => {
                                                                return (


                                                                    <div className="comment" key={i}>

                                                                        <img className="avatar__img" alt="Comment" src={this.state.userimg} />
                                                                        <div className="comment-body">

                                                                            <div className="meta-data">
                                                                                <span className="comment__author">
                                                                                    <Link to={`/forum/user/${comment.username}`}><b>{comment.username}</b></Link>
                                                                                </span>
                                                                                <span className="comment__date">
                                                                                    {moment(Number(comment.comment_time)).fromNow()}
                                                                                </span>

                                                                            </div>
                                                                            <a className="float-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><BsThreeDotsVertical />
                                                                            </a>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" onClick={() => this.removeComment(comment.comment_id)}><BsFillExclamationCircleFill /> Remove</a>

                                                                            </div>
                                                                            <p className="comment-content">
                                                                                {comment.text}
                                                                            </p>
                                                                            <div className="comment-reply d-flex justify-content-between align-items-center">

                                                                                <p className="feedback-box">
                                                                                    Was this comment?
                                                                             <button type="button" className="theme-btn" onClick={() => this.vote(comment.comment_id)}>
                                                                                        <i className="la d-inline-block"><FiThumbsUp /></i> Helpfull <Badge variant="success">{comment.vote}</Badge>
                                                                                    </button>

                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                )
                                                            })}
                                                        </li>
                                                    </ul>
                                                    <SectionDivider />

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {this.state.alert}
                            <div className="col-lg-4">
                                <BlogSidebar comid={this.state.postdetail && this.state.postdetail.com_id} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}


function mapStateToProps(state) {
    const { postsdetail, postcomment } = state.post;
    const { userdetails } = state.auth;

    return {
        postsdetail, userdetails, postcomment

    };
}
export default connect(mapStateToProps)(BlogDetail);