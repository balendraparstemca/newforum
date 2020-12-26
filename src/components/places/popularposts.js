import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { BsFillAlarmFill, BsPeopleCircle } from 'react-icons/bs';
import moment from 'moment';
class PopularPosts extends Component {
    states = {
        img: require('../../assets/images/post.png'),

    }
    responsive = {
        // breakpoint from 0 up
        0: {
            items: 1
        },
        // breakpoint from 480 up
        480: {
            items: 2
        },
        // breakpoint from 768 up
        768: {
            items: 4
        }
    }
    render() {
        return (
            <div className="row">

                <div className="col-lg-12">
                    <h2 className="card-title">Trending Posts</h2>
                    <OwlCarousel
                        className="card-carousel"
                        loop={false}
                        center={false}
                        margin={10}
                        autoplay={true}
                        nav={false}
                        navText={[
                            "<i class='icon icon-left'></i>",
                            "<i class='icon icon-right'></i>"
                        ]}
                        rewind={true}
                        items={4}
                        smartSpeed={10000}
                        animateOut={"slideOutDown"}
                        animateIn={"fadeIn"}
                        responsive={this.responsive}
                    >


                        {this.props.posts && this.props.posts.map((post, index) => {
                            return (
                                <div className="card-item" key={index}>
                                                                   <Link to={`/forum/post/${post.canonicalurl}`} className="card-image-wrap">
                                        <div className="card-image">
                                            {post.imgSrc ? <img src={`http://localhost:7999/api/v1/utilities/${post.imgSrc}`} alt={post.imgSrc} className="card__img" width="200px" height="200px" /> : <img src={this.states.img} width="200px" height="200px"></img>}
                                        </div>
                                      <h5>  <span className="badge badge-secondary badge-pill">{post.flare_tag}</span></h5>
   
                                    </Link>
                                    <div className="card-content-wrap">
                                        <Link to={{ pathname: `/forum/post/${post.canonicalurl}`, aboutProps: { postid: post.post_id } }} style={{ textDecoration: 'none', color: 'black' }} className="thumbnail self" >
                                            <b> {post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title}</b></Link>
                                        <p>
                                            <Link to={`/forum/r/${post.com_name}`}><b> <BsPeopleCircle /> r/{post.com_name}</b></Link> <BsFillAlarmFill /> <span>{moment(Number(post.post_time)).fromNow()}</span>
                                        </p>
                                    </div>
                                </div>
                            )
                        })}


                    </OwlCarousel>

                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { posts, isFetched } = state.post;
    const { userdetails, isLoggedIn } = state.auth;
    return {
        posts, isFetched, userdetails, isLoggedIn
    };
}
export default connect(mapStateToProps)(PopularPosts);