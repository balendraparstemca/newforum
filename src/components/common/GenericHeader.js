import React, { Component } from 'react';
import { BsGrid, BsListUl } from "react-icons/bs";
import Select from "react-select";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from "react-redux";
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { postUpvote, postDownvote, savePost, reportPost } from '../../services/action/post';
import { DeletePosts } from '../../services/action/user';
import moment from 'moment';
import SweetAlert from 'react-bootstrap-sweetalert'
import { BsFillAlarmFill, BsFillBookmarkFill, BsFillExclamationCircleFill, BsLink45Deg, BsPeopleCircle, BsPersonCheck, BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import { FiRefreshCw } from 'react-icons/fi';
import { Badge } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

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
            isloading: true,
            community: '',
            reporttext: "",
            img: require('../../assets/images/post.png'),
            userimg: require('../../assets/images/testi-img2.jpg'),
            allpost: [],
            mainposts: [],
            filter: [],
            cmid: null,
            selectedtagsby: null,
            hasMore: true,
            visible: 10,
            selectedShortby: null
        }

    }





    componentWillReceiveProps() {
        if (this.state.cmid !== this.props.urlid) {
            this.setState({ cmid: this.props.urlid});
            this.fetch();
        }
    }

    componentDidMount() {
        if (this.props.posts.length > 0) {
            this.setState({ allpost: this.props.posts, mainposts: this.props.posts }, () => this.tags())

            this.setState({ isLoading: false })

        }

    }



    fetch = async () => {
        await this.props.updatepostaftervote().then(() => {
            this.setState({ allpost: this.props.posts, mainposts: this.props.posts }, () => this.tags())
        })
    }




    onChangeReport(e) {

        this.setState({
            reporttext: e.target.value
        });

        alert(this.state.reporttext)
    }

    loadMore = () => {
        this.setState((prev) => {
            return { visible: prev.visible + 7 };
        });
    }

    upvote = async (postid) => {
        if (this.props.isLoggedIn) {
            const obj = { 'post_id': postid, 'upvote_by': this.props.userdetails.id };
            await this.props.dispatch(postUpvote(obj));
            this.fetch()
        }
        else {
            alert('login')
        }
    }

    downvote = async (postid) => {

        if (this.props.isLoggedIn) {
            const obj = { 'post_id': postid, 'downvote_by': this.props.userdetails.id };
            await this.props.dispatch(postDownvote(obj));
            this.fetch()
        } else {
            alert('login')
        }
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

        if (this.state.reporttext) {
            const obj = {
                post_id: postid,
                report_by: this.props.userdetails.id,
                reason: this.state.reporttext
            }

            this.props.dispatch(reportPost(obj));
            this.setState({ alert: null })
        }
        else {
            alert('please writes something before submit')
        }

    }

    tags() {
        const { allpost } = this.state
        const map = new Map();
        let lists = [{
            value: 'All',
            label: 'All'
        }]
        allpost.map(com => {
            if (!map.has(com.flare_tag)) {
                map.set(com.flare_tag, true);    // set any value to Map
                lists.push({ value: `${com.flare_tag}`, label: `${com.flare_tag}` })
            }
        })

        this.setState({ filter: lists })
    }




    report = (postid) => {
        if (this.props.isLoggedIn) {
            this.setState({ alert: this.getAlert(postid) })
        } else {
            alert('login')
        }
    }



    DeletePost = (postid) => {
        this.setState({ alert: this.deleteAlert(postid) })

    }

    onDelete(postid) {
        this.props.dispatch(DeletePosts(postid)).then(() => {
            this.fetch()
        });
        this.setState({ alert: null });
    }

    savePost = (postid) => {
        if (this.props.isLoggedIn) {
            const obj = {
                post_id: postid,
                saved_by: this.props.userdetails.id,
            }
            this.props.dispatch(savePost(obj)).then(() => {
                this.fetch()
            });
        }
        else {
            alert('login')
        }


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

    handleChangeTagsby = (selectedtagsby) => {
        this.setState({ selectedtagsby });
        if (selectedtagsby.value === 'All') {

            this.setState({ allpost: this.state.mainposts })
        }
        else {
            let lists = this.state.mainposts;
            let arr = lists.filter(function (item) {
                return item.flare_tag === selectedtagsby.value;
            });
            this.setState({ allpost: arr })

        }

    }


    handleChangeshortby = (selectedShortby) => {

        this.setState({ selectedShortby });

        if (selectedShortby.value === 1) {

            this.sortByTop();

        }


        else if (selectedShortby.value === 2) {

            this.sortBynew();

        }

        else if (selectedShortby.value === 3) {

            this.sortByold();

        }
        else {

            this.setState({ allpost: this.state.mainposts })
        }
    }

    sortByTop = () => {

        let posts = this.state.mainposts;

        let arr = posts.sort(function (a, b) {
            return Number(b.vote) - Number(a.vote);
        });

        this.setState({ allpost: arr })

    }

    sortBynew = () => {
        let posts = this.state.mainposts

        let arr = posts.sort(function (a, b) {
            return Number(b.post_time) - Number(a.post_time);
        });


        this.setState({ allpost: arr })

    }

    sortByold = () => {
        let posts = this.state.mainposts;

        let arr = posts.sort(function (a, b) {
            return Number(a.post_time) - Number(b.post_time);
        });

        this.setState({ allpost: arr })

    }


    render() {




        return (
            <> <div className="container">

                {this.state.isLoading ? (
                    <div className="d-flex justify-content-center margin-top-200px text-primary">

                        <span className="spinner-border spinner-border-sm"></span>
                    </div>
                ) : (<> <Tabs>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="generic-header margin-bottom-30px">
                                <div className="showing__text mr-1 margin-left-2px">

                                </div>
                                <div className="short-option mr-1">
                                    <Select
                                        value={this.selectedShortby}
                                        onChange={this.handleChangeTagsby}
                                        placeholder="Fiter by Tags"
                                        options={this.state.filter}
                                    />
                                </div>
                                <div className="short-option mr-1">
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

                                        {this.state.allpost && this.state.allpost.length === 0 ?
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

                                            this.state.allpost.slice(0, this.state.visible).map((post, i) => (
                                                <div className="central-meta item cardb margin-bottom-10px" key={i}>

                                                    <Dropdown className="float-right">
                                                        <Dropdown.Toggle variant="default" id="dropdown-basic">

                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            {this.props.userdetails && this.props.userdetails.id === post.user ? <Dropdown.Item><Link to={`/forum/post/edit/${post.canonicalurl}`} > <FaEdit /> Edit </Link></Dropdown.Item> : ''}
                                                            {this.props.userdetails && this.props.userdetails.id === post.user ? <Dropdown.Item onClick={() => this.DeletePost(post.post_id)}><AiFillDelete /> Delete</Dropdown.Item> : ''}
                                                            <Dropdown.Item onClick={() => this.report(post.post_id)}><BsFillExclamationCircleFill /> Report</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => this.savePost(post.post_id)}><BsFillBookmarkFill /> save</Dropdown.Item>

                                                        </Dropdown.Menu>
                                                    </Dropdown>
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
                                                    {this.state.visible < this.state.allpost.length &&
                                                        <Badge pill variant="danger" onClick={this.loadMore} className="border-0">
                                                           <h5> <span className="d-inline-block">
                                                                Load More <FiRefreshCw />
                                                            </span></h5>
                                                        </Badge>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div>
                                        {this.state.allpost && this.state.allpost.length === 0 ?
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
                                            ) : this.state.allpost.slice(0, this.state.visible).map((item, i) => {
                                                return (
                                                    <div className="card-item blog-card" key={i}>
                                                        <Dropdown className="float-right">
                                                            <Dropdown.Toggle variant="default" id="dropdown-basic">

                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                {this.props.userdetails && this.props.userdetails.id === item.user ? <Dropdown.Item><Link to={`/forum/post/edit/${item.canonicalurl}`} > <FaEdit /> Edit </Link></Dropdown.Item> : ''}
                                                                {this.props.userdetails && this.props.userdetails.id === item.user ? <Dropdown.Item onClick={() => this.DeletePost(item.post_id)}><AiFillDelete /> Delete</Dropdown.Item> : ''}
                                                                <Dropdown.Item onClick={() => this.report(item.post_id)}><BsFillExclamationCircleFill /> Report</Dropdown.Item>
                                                                <Dropdown.Item onClick={() => this.savePost(item.post_id)}><BsFillBookmarkFill /> save</Dropdown.Item>

                                                            </Dropdown.Menu>
                                                        </Dropdown>

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
                                                                            {item.imgSrc ? <img src={`http://localhost:7999/api/v1/utilities/${item.imgSrc}`} alt={item.imgSrc} className="card__img" width="400px" height="400px" /> : ''}
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
                                                    {this.state.visible < this.state.allpost.length &&
                                                        <Badge pill variant="danger" onClick={this.loadMore} className="border-0">
                                                            <h5><span className="d-inline-block">
                                                                Load More <FiRefreshCw />
                                                            </span></h5>
                                                        </Badge>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </TabPanel>
                            </div>
                        </div>
                    </div>
                </Tabs></>)
                }
            </div>


                {this.state.alert}
            </>
        );
    }
}
function mapStateToProps(state) {
    const { posts, isFetched } = state.post;
    const { userdetails, isLoggedIn } = state.auth;
    const { postsdetail, postcomment, upvoted, downvoted, removevoted } = state.post;
    return {
        posts,
        isFetched, postsdetail, isLoggedIn, postcomment, upvoted, downvoted, removevoted, userdetails
    };
}
export default connect(mapStateToProps)(PostHeader);
