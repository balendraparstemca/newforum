import React, { Component } from 'react';
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import SweetAlert from 'react-bootstrap-sweetalert';
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { login } from '../services/action/auth';
import Login from './Login';
class LoginBox extends Component {
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
            <main className="login-page">

                <Helmet>
                    <title>Login</title>
                    <meta name="description" content="login page for casual desi" />
                    <meta name="keywords" content="casual desi,desi yaaro,sitarafoods,discussion forum ,information" />
                </Helmet>
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Login" img={this.state.breadcrumbimg} />

                <Login/>
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
export default connect(mapStateToProps)(LoginBox);