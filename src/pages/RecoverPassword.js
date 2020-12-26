import React, { Component } from 'react';
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import { Link } from "react-router-dom";
import { FaRegEnvelope } from 'react-icons/fa'
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import { ResetPassword } from '../services/action/user';
import { connect } from "react-redux";
import SweetAlert from 'react-bootstrap-sweetalert';
class RecoverPassword extends Component {
    constructor(props) {
        super(props)
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            breadcrumbimg: require('../assets/images/bread-bg.jpg'),
            email: ''
        }
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    getAlert = (title) => (
        <SweetAlert
            title={title}
            onConfirm={this.onConfirm}
            onCancel={this.onCancel}>
            {this.props.message}
        </SweetAlert>
    );

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            loading: true,
        });

        const obj = {
            emailid: this.state.email
        }
        this.props.dispatch(ResetPassword(obj)).then(() => {
            this.setState({
                 alert: this.getAlert('Reset Password')
            })

        })
    }

    onConfirm = () => {
        this.setState({
            alert: null, loading: false, email: ''
        });
    }

    render() {
        return (
            <main className="recover-pass-page">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Recover Password" MenuPgTitle="Pages" img={this.state.breadcrumbimg} />

                <section className="form-shared padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="billing-form-item mb-0">
                                    <div className="billing-title-wrap">
                                        <h3 className="widget-title font-size-28">Recover Password!</h3>
                                        <p className="font-size-16 font-weight-medium">Enter the email of your account
                                        to reset password.
                                        Then you will receive a link to email to reset the password.If you have any
                                        issue about reset password
                                            <Link to="/contact" className="color-text">contact us</Link>
                                        </p>
                                    </div>
                                    <div className="billing-content">
                                        <div className="contact-form-action">
                                            <form method="post" onSubmit={this.handleSubmit}>
                                                <div className="input-box">
                                                    <label className="label-text">Your Email</label>
                                                    <div className="form-group">
                                                        <span className="la form-icon"><FaRegEnvelope /></span>
                                                        <input className="form-control" value={this.state.email} onChange={this.onChangeEmail} type="email" name="text" required placeholder="Enter email address" />
                                                    </div>
                                                </div>
                                                <div className="btn-box margin-top-20px margin-bottom-20px">
                                                    <button className=" button theme-btn border-0" type="submit">
                                                        reset password
                                                    </button>
                                                </div>
                                                <p className="font-weight-medium">
                                                    <Link to="/login" className="color-text">Login </Link>
                                                    or
                                                    <Link to="/sign-up" className="color-text"> Register</Link>
                                                </p>
                                                {this.state.alert}
                                            </form>
                                        </div>
                                    </div>
                                </div>
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
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
        isLoggedIn,
        message
    };
}
export default connect(mapStateToProps)(RecoverPassword);