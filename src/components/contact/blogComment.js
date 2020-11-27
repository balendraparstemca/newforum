import React, { Component } from 'react';
import { MdStar } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { BsPencil } from 'react-icons/bs'
import { connect } from "react-redux";
import { addListReview, getlistreview } from '../../services/action/list';


class BlogComment extends Component {
    constructor(props) {
        super(props)
        this.handleReview = this.handleReview.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.state = {
            message: '',
        }

    }


    onChangeMessage(e) {
        this.setState({
            message: e.target.value,
        });
    }



    handleReview(e) {
        e.preventDefault();
        if(this.state.message)
        {
        this.props.postcomment(this.state.message)
        }
        else{
            alert ("please write some text")
        }


    }



    render() {

        return (
            <>
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
export default connect(mapStateToProps)(BlogComment);