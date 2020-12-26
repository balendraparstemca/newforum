import React, { Component } from 'react';
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import { connect } from "react-redux";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import { BsPencil } from 'react-icons/bs';
import Encryptionservice from '../services/Enrcyption';
import { updatePassword } from '../services/action/user';

class ChangePassword extends Component {
    constructor(props) {
        super(props)
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onChangeCurrentPassword = this.onChangeCurrentPassword.bind(this);
        this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.state = {
            confirming: true,
            currentpass: '',
            newpass: '',
            confirmpass: '',
            emailid: '',
            breadcrumbimg: require('../assets/images/bread-bg.jpg'),
            loading: false,
            submit: false
        }
    }

    onChangeCurrentPassword(e) {
        this.setState({
            currentpass: e.target.value,
        });
    }

    onChangeNewPassword(e) {
        this.setState({
            newpass: e.target.value,
        });
    }

    onChangeConfirmPassword(e) {
        if (this.state.newpass === e.target.value) {
            this.setState({
                submit: false
            })

        } else {
            this.setState({
                submit: true
            })

        }


        this.setState({
            confirmpass: e.target.value,
        });
    }

    handleChangePassword(e) {
        e.preventDefault();
        this.setState({
            loading: true,
        });

        const obj = {
            email_id:this.state.emailid,
            currentpassword: this.state.currentpass,
            newpassword: this.state.newpass
        }
        console.log(obj)
        this.props.dispatch(updatePassword(obj))

    }
    onReset() {


    }



    componentDidMount = () => {
        if (this.props.match.params.emailid) {
            const emailKey = decodeURIComponent(this.props.match.params.emailid);
            const email = Encryptionservice.decyrptData(emailKey).trim();
            this.setState({ emailid: email })
            /*const obj = { email_key: this.props.match.params.emailid }
            this.props.dispatch(confirtVerification(obj)).then(() => {
                this.setState({ confirming: false })
                this.props.history.push('/')
            })*/
        } else {
            this.props.history.push('/')
        }

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
                                    <div className="billing-title-wrap border-bottom-0 pr-0 pl-0 pb-0 text-center">
                                        <h3 className="widget-title font-size-28 pb-0">
                                            change password
                                        </h3>

                                    </div>
                                    <div className="billing-content">
                                        <div className="user-form-action">
                                            <div className="billing-form-item">
                                                <div className="billing-title-wrap">
                                                    <h3 className="widget-title pb-0">Change Password</h3>
                                                    <div className="title-shape margin-top-10px"></div>
                                                </div>
                                                <div className="billing-content">
                                                    <div className="contact-form-action">
                                                        <form method="post" onSubmit={this.handleChangePassword}>
                                                            <div className="input-box">
                                                                <label className="label-text">Current Password</label>
                                                                <div className="form-group">
                                                                    <span className="la form-icon"><BsPencil /></span>
                                                                    <input className="form-control" type="password" value={this.state.currentpass} onChange={this.onChangeCurrentPassword} name="current" required="required" placeholder="Current Password" />
                                                                </div>
                                                            </div>
                                                            <div className="input-box">
                                                                <label className="label-text">New Password</label>
                                                                <div className="form-group">
                                                                    <span className="la form-icon"><BsPencil /></span>
                                                                    <input className="form-control" type="password" name="new password" value={this.state.newpass} onChange={this.onChangeNewPassword} required="required" placeholder="New Password" />
                                                                </div>
                                                            </div>
                                                            <div className="input-box">
                                                                <label className="label-text">Confirm New Password</label>
                                                                <div className="form-group">
                                                                    <span className="la form-icon"><BsPencil /></span>
                                                                    <input className="form-control" type="password" name="confirm password" value={this.state.confirmpass} onChange={this.onChangeConfirmPassword} required="required" placeholder="Confirm New Password" />
                                                                </div>
                                                            </div>
                                                            {this.state.submit && (
                                                                <span className="label-danger">password does not match</span>
                                                            )}
                                                            <div className="btn-box">
                                                                <button type="submit" className="theme-btn button-success border-0" disabled={this.state.loading || this.state.submit}>
                                                                    {this.state.loading && (
                                                                        <span className="spinner-border spinner-border-sm"></span>
                                                                    )} updated password
                                                            </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
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
    const { isLoggedIn, userdetails } = state.auth;
    const { message } = state.message;
    return {
        isLoggedIn, userdetails,
        message
    };
}
export default connect(mapStateToProps)(ChangePassword);