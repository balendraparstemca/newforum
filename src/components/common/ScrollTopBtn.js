import React, {Component} from 'react';
import {BsChevronUp} from 'react-icons/bs'
import $ from 'jquery';

class ScrollTopBtn extends Component {
    componentDidMount() {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.back-to-top').show();
            } else {
                $('.back-to-top').hide();
            }
        });
        /* ======= Back to Top Button and Navbar Scrolling control ======= */
        $(document).on('click', '.back-to-top', function () {
            $('html, body').animate({ scrollTop: 0 }, 1000);
        });
    }

    render() {
        return (
            <>
                <div className="back-to-top show-back-to-top">
                    <BsChevronUp />
                </div>
            </>
        );
    }
}

export default ScrollTopBtn;