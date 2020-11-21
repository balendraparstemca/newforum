import React, { Component } from 'react'
import $ from 'jquery'
import Logo from "./Logo";
import Navbar from "./Navbar";
import HeaderAuthorAccess from "../other/account/HeaderAuthorAccess";

export default class HeaderTwo extends Component {
    componentDidMount() {
        $(window).on('scroll', function () {
            //header fixed animation and control
            if ($(window).scrollTop() > 10) {
                $('.header-menu-wrapper').addClass('header-fixed');
            } else {
                $('.header-menu-wrapper').removeClass('header-fixed');
            }
        });
    }
    state = {
        logo: require('../../assets/images/logo2.png')
    }
    render() {
        return (
            <>
                <header className="header-area header-area3 p-0">
                    <div className="header-menu-wrapper after-none">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="menu-full-width">
                                        {/* Logo */}
                                        <div className="logo">
                                            <Logo url={this.state.logo} />
                                        </div>

                                        {/* Navbar */}
                                        <Navbar />

                                        {/* Author Access */}
                                        <HeaderAuthorAccess />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}
