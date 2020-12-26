import React, { Component } from 'react';
import { AiOutlineUser } from 'react-icons/ai'
import { FiLock } from 'react-icons/fi'
import { Link } from "react-router-dom";
import SweetAlert from 'react-bootstrap-sweetalert';
import { connect } from "react-redux";
import { login } from '../services/action/auth';
class Login extends Component {
    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            successfull: false,
            breadcrumbimg: require('../assets/images/bread-bg.jpg')

        };
    }

    onReset = () => {

        this.setState({
            username: "",
            password: ""

        })
    }


    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    getAlert = (alerttype, title) => (
        <SweetAlert
            type={alerttype}
            title={title}
            onConfirm={this.onConfirm}
            onCancel={this.onCancel}>
            {this.props.message}
        </SweetAlert>
    );


    handleLogin(e) {
        e.preventDefault();
        this.setState({
            loading: true,
        });
        this.props.dispatch(login(this.state.username, this.state.password))
            .then(() => {
                if (this.props.isLoggedIn) {
                    this.setState({
                        successfull: true, alert: this.getAlert('success', 'Login successfull')
                    })
                }
                else {
                    this.setState({
                        successfull: false, alert: this.getAlert('warning', 'Login Failed')
                    })

                }

            })
            .catch(() => {
                this.setState({
                    successfull: false, loading: false, username: '', password: '', alert: this.getAlert('warning', 'Login Failed')
                });
            });

    }

    onConfirm = () => {
        this.setState({
            alert: null, loading: false, username: '', password: ''
        });

    }



    render() {

        return (


            <section className="form-shared padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="billing-form-item mb-0">
                                <div className="billing-title-wrap border-bottom-0 pr-0 pl-0 pb-0 text-center">
                                    <h3 className="widget-title font-size-28 pb-0">
                                        Login to your account
                                        </h3>

                                </div>
                                <div className="billing-content">
                                    <div className="contact-form-action">
                                        <form method="post" onSubmit={this.handleLogin}>
                                            <div className="row">

                                                <div className="col-lg-12">
                                                    <div className="input-box">
                                                        <label className="label-text">email</label>
                                                        <div className="form-group">
                                                            <span className="form-icon">
                                                                <AiOutlineUser />
                                                            </span>
                                                            <input className="form-control" type="email" name="username" value={this.state.username} onChange={this.onChangeUsername} required="required" placeholder="Username, or email" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input-box">
                                                        <label className="label-text">Password</label>
                                                        <div className="form-group">
                                                            <span className="form-icon">
                                                                <FiLock />
                                                            </span>
                                                            <input className="form-control" type="text" name="password" value={this.state.password} onChange={this.onChangePassword} required="required" placeholder="Password" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="custom-checkbox mr-0 d-flex align-items-center justify-content-between">
                                                            <div>
                                                            </div>
                                                            <div>
                                                                <Link to="/recover" className="color-text font-weight-medium">
                                                                    Forgot password?
                                                                   </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="btn-box margin-top-20px margin-bottom-20px">
                                                        <button className="theme-btn border-0" type="submit" disabled={this.state.loading}>
                                                            {this.state.loading && (
                                                                <span className="spinner-border spinner-border-sm"></span>
                                                            )}
                                                                Login now
                                                            </button>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <p className="font-weight-medium">Not a member? <Link to="/sign-up" className="color-text"> Register</Link></p>
                                                </div>
                                            </div>
                                            {this.state.alert}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


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
export default connect(mapStateToProps)(Login);