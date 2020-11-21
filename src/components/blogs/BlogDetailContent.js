import React, {Component} from 'react';
import ListingDetailsComments from "../contact/ListingDetailsComments";
import BlogCommentFields from "./BlogCommentFields";
import BlogBlockquote from "./BlogBlockquote";
import {Link} from "react-router-dom";
import { FaQuoteRight } from 'react-icons/fa'
import BlogTags from "./BlogTags";
import BlogShare from "./BlogShare";

class BlogDetailContent extends Component {

    state = {
        img: require('../../assets/images/video-img.jpg'),
        author: 'David Wise',
        authorImg: require('../../assets/images/testi-img7.jpg'),
        date: '12 Fab, 2020',
        meta: 'Tips & Tricks',
        metaLink: '#',
        likes: '480',
        title: 'How to Improve Your Customer Service Experience',
        desc1: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed',
        desc2: 'Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.',
        desc3: 'when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed',
        desc4: 'Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price.',

        /* Blockquote */
        bgimg: require('../../assets/images/video-img.jpg'),
        quoteIcon: <FaQuoteRight />,
        desc: 'Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn\'t really do it, they just saw something. It seemed obvious to them after a while. That\'s because they were able to connect experiences they\'ve had and synthesize new things.',
        name: '- Steve Jobs',
        designation: 'Founder of Apple Inc.',

        /* desc Images */
        images: [
            {
                img: require('../../assets/images/img28.jpg')
            },
            {
                img: require('../../assets/images/img29.jpg')
            },
            {
                img: require('../../assets/images/img30.jpg')
            }
        ]
    }
    render() {
        return (
            <>
                <div className="card-item blog-card border-bottom-0">
                    <div className="card-image">
                        <img src={this.state.img} alt="Blog" className="card__img"/>
                    </div>
                    <div className="card-content pl-0 pr-0 pb-0">
                        <ul className="post-author d-flex align-items-center justify-content-between mb-3">
                            <li>
                                <img src={this.state.authorImg} alt="" />
                                    <span className="by__text">By</span>
                                    <span> {this.state.author},</span>
                                    <span>{this.state.date} - <Link to={this.state.metaLink} className="tag__text">{this.state.meta}</Link></span>
                            </li>
                            <li>
                                <Link to="#" className="blog__btn">
                                    {this.state.likes} Likes
                                </Link>
                            </li>
                        </ul>
                        <h2 className="card-title font-size-26">
                            {this.state.title}
                        </h2>
                        <p className="card-sub mt-3">
                            {this.state.desc1}
                        </p>
                        <p className="card-sub mt-3">
                            {this.state.desc2}
                        </p>

                        <BlogBlockquote bgImg={this.state.bgimg} quoteIcon={this.state.quoteIcon} desc={this.state.desc} name={this.state.name} designation={this.state.designation} />

                        <p className="card-sub margin-top-30px">
                            {this.state.desc3}
                        </p>
                        <div className="image-fluid margin-top-30px">
                            <div className="row">
                                {this.state.images.map((img, i) => {
                                    return (
                                        <div className="col-lg-4 column-td-6 mb-4" key={i}>
                                            <img src={img.img} alt="Blog" className="img-fluid radius-round" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <p className="card-sub mb-3">
                            {this.state.desc4}
                        </p>
                        <h3 className="widget-title">Storytelling</h3>
                        <p className="card-sub mb-3">
                            {this.state.desc4}
                        </p>
                        <h3 className="widget-title">Branding</h3>
                        <p className="card-sub">
                            {this.state.desc4}
                        </p>
                        <div className="section-block margin-top-30px margin-bottom-30px"></div>
                        <div className="tag-items d-flex justify-content-between">

                            <BlogTags />

                            <BlogShare />

                        </div>
                        <div className="section-block margin-top-30px margin-bottom-50px"></div>
                        <div className="comments-wrap">
                            <h2 className="widget-title">5 Comments</h2>
                            <div className="title-shape"></div>

                            <ListingDetailsComments />

                        </div>
                        <div className="add-review-listing padding-top-50px">
                            <h2 className="widget-title">Add a Comment</h2>
                            <div className="title-shape"></div>
                            <div className="section-heading padding-top-10px">
                                <p className="sec__desc font-size-16">Your email address will not be published. Required fields are marked *</p>
                            </div>
                            <div className="contact-form-action mt-3">
                                <BlogCommentFields />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BlogDetailContent;