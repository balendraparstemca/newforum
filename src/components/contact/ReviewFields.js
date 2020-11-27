import React, { Component } from 'react';
import { MdStar } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { BsPencil } from 'react-icons/bs'
import { connect } from "react-redux";
import { addListReview, getlistreview } from '../../services/action/list';


class ReviewFields extends Component {
    constructor(props) {
        super(props)
        this.handleReview = this.handleReview.bind(this);
        this.onChangeStar = this.onChangeStar.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.state = {
            name:'',
            email:'',
            message:'',
            star:'',
            title: 'Add a Review',
            subtitle: 'Your email address will not be published. Required fields are marked *'
        }

    }

    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }

    onChangeStar(e) {
        this.setState({
            star: e.target.value,
        });

        console.log(e.target.value)
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    onChangeMessage(e) {
        this.setState({
            message: e.target.value,
        });
    }

  

  handleReview(e) {
        e.preventDefault();

        const obj={
            listing_id:this.props.listingid,
            name:this.state.name,
            email:this.state.email,
            stars:this.state.star,
            review_text:this.state.message,
        }

        console.log(obj)
        this.props.dispatch(addListReview(obj)).then(()=>{
            this.setState({
                name:'',
                email:'',
                message:'',
                star:''

            })
            this.props.dispatch(getlistreview({"listing_id":this.props.listingid}))
        });
    }



    render() {
      
        return (
            <>
                <div className="add-review-listing padding-top-50px" id="review">
                    
                    <h2 className="widget-title">
                        {this.state.title}
                    </h2>
                    <div className="title-shape"></div>
                    <div className="section-heading padding-top-20px">
                        <p className="sec__desc font-size-16">
                            {this.state.subtitle}
                        </p>
                    </div>
                    <ul className="rating-list padding-top-20px">
                        <li>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <label className="review-label">
                                <input type="radio" value="1" onChange={this.onChangeStar} name="review-radio" />
                                <span className="review-mark"></span>
                            </label>
                        </li>
                        <li>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <label className="review-label">
                                <input type="radio" value="2" onChange={this.onChangeStar} name="review-radio" />
                                <span className="review-mark"></span>
                            </label>
                        </li>
                        <li>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <label className="review-label">
                                <input type="radio" value="3" onChange={this.onChangeStar} name="review-radio" />
                                <span className="review-mark"></span>
                            </label>
                        </li>
                        <li>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <label className="review-label">
                                <input type="radio" value="4"  onChange={this.onChangeStar} name="review-radio" />
                                <span className="review-mark"></span>
                            </label>
                        </li>
                        <li>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <span className="la d-inline-block">
                                <MdStar />
                            </span>
                            <label className="review-label">
                                <input type="radio" value="5" onChange={this.onChangeStar} name="review-radio" />
                                <span className="review-mark"></span>
                            </label>
                        </li>
                    </ul>
                    <div className="contact-form-action mt-5">
                        <form  method="post" onSubmit={this.handleReview}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Name</label>
                                        <div className="form-group">
                                            <span className="la form-icon"><AiOutlineUser /></span>
                                            <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.onChangeName} required="required" placeholder="Your Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Email</label>
                                        <div className="form-group">
                                            <span className="la form-icon"><FaRegEnvelope /></span>
                                            <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.onChangeEmail} required="required" placeholder="Email Address" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Review</label>
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
            </>
        );
    }
}

function mapStateToProps(state) {
    const { isLoggedIn, userdetails } = state.auth;
    const { allreviewlist } = state.list;
    return {
        isLoggedIn, userdetails, allreviewlist

    };
}
export default connect(mapStateToProps)(ReviewFields);