import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import {Link} from "react-router-dom";
import  $ from 'jquery';

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false)

    $(document).on('click', '.side-menu-ul li', function () {
        $(".side-menu-ul li").removeClass('active');
        $(this).toggleClass("active")
    })
    $(document).on('click', '.side-menu-ul li.active', function () {
        $(".side-menu-ul li.active").removeClass('active');
    })

    return (
        <>
            <div className="main-menu-content">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">home <FiChevronDown /></Link>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/">home one</Link></li>
                                <li><Link to="/index2">home two</Link></li>
                                <li><Link to="/index3">home three</Link></li>
                                <li><Link to="/index4">home four </Link></li>
                                <li><Link to="/index5">home five </Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/all-categories">categories <FiChevronDown /></Link>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/all-categories">all categories</Link></li>
                                <li><Link to="/all-locations">all locations</Link></li>
                                <li><Link to="/top-place">top places </Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/listing-grid">listings <FiChevronDown /></Link>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/listing-grid">listing grid</Link></li>
                                <li><Link to="/list-map-view">map view </Link></li>
                                <li><Link to="/list-map-view2">map view 2 </Link></li>
                                <li><Link to="/listing-list">listing list </Link></li>
                                <li><Link to="/list-left-sidebar">left sidebar  </Link></li>
                                <li><Link to="/list-right-sidebar">right sidebar  </Link></li>
                                <li><Link to="/listing-details">listing details</Link></li>
                                <li><Link to="/add-listing">add listing</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/user-profile">pages <FiChevronDown /></Link>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/user-profile">user profile</Link></li>
                                <li><Link to="/top-author">top authors </Link></li>
                                <li><Link to="/dashboard">dashboard</Link></li>
                                <li><Link to="/booking">booking  </Link></li>
                                <li><Link to="/booking-confirmation">booking confirmation </Link></li>
                                <li><Link to="/invoice">invoice</Link></li>
                                <li><Link to="/pricing">pricing</Link></li>
                                <li><Link to="/about">about</Link></li>
                                <li><Link to="/faq">faq</Link></li>
                                <li><Link to="/contact">contact</Link></li>
                                <li><Link to="/page-404">404 page</Link></li>
                                <li><Link to="/recover">recover pass </Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/blog-full-width">blog <FiChevronDown /></Link>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/blog-full-width">full width </Link></li>
                                <li><Link to="/blog-grid">blog grid</Link></li>
                                <li><Link to="/blog-left-sidebar">left sidebar </Link></li>
                                <li><Link to="/blog-right-sidebar">right sidebar </Link></li>
                                <li><Link to="/blog-single">blog detail</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="side-menu-open" onClick={() => setNavOpen(!navOpen)}>
                <span className="menu__bar"></span>
                <span className="menu__bar"></span>
                <span className="menu__bar"></span>
            </div>
            <div className={navOpen ? 'side-nav-container active' : 'side-nav-container'}>
                <div className="humburger-menu">
                    <div className="humburger-menu-lines side-menu-close" onClick={() => setNavOpen(!navOpen)}></div>
                </div>
                <div className="side-menu-wrap">
                    <ul className="side-menu-ul">
                        <li>
                            <Link to="/">home</Link> <span className="la-angle-down"><FiChevronDown /></span>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/index/">home one</Link></li>
                                <li><Link to="/index2/">home two  </Link></li>
                                <li><Link to="/index3/">home three</Link></li>
                                <li><Link to="/index4/">home four </Link></li>
                                <li><Link to="/index5/">home five </Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/all-categories">categories</Link> <span className="la-angle-down"><FiChevronDown /></span>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/all-categories">all categories</Link></li>
                                <li><Link to="/all-locations">all locations</Link></li>
                                <li><Link to="/top-place">top places </Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/listing-grid">listings</Link> <span className="la-angle-down"><FiChevronDown /></span>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/listing-grid">listing grid</Link></li>
                                <li><Link to="/list-map-view">map view  </Link></li>
                                <li><Link to="/list-map-view2">map view 2  </Link></li>
                                <li><Link to="/listing-list">listing list  </Link></li>
                                <li><Link to="/list-left-sidebar">left sidebar  </Link></li>
                                <li><Link to="/list-right-sidebar">right sidebar </Link></li>
                                <li><Link to="/listing-details">listing details</Link></li>
                                <li><Link to="/add-listing">add listing</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/user-profile">pages</Link> <span className="la-angle-down"><FiChevronDown /></span>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/user-profile">user profile</Link></li>
                                <li><Link to="/top-author">top authors </Link></li>
                                <li><Link to="/dashboard">dashboard</Link></li>
                                <li><Link to="/booking">booking  </Link></li>
                                <li><Link to="/booking-confirmation">booking confirmation </Link></li>
                                <li><Link to="/invoice">invoice</Link></li>
                                <li><Link to="/pricing">pricing</Link></li>
                                <li><Link to="/about">about</Link></li>
                                <li><Link to="/faq">faq</Link></li>
                                <li><Link to="/contact">contact</Link></li>
                                <li><Link to="/page-404">404 page</Link></li>
                                <li><Link to="/recover">recover pass</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/blog-full-width">blog</Link> <span className="la-angle-down"><FiChevronDown /></span>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/blog-full-width">full width </Link></li>
                                <li><Link to="/blog-grid">blog grid</Link></li>
                                <li><Link to="/blog-left-sidebar">left sidebar </Link></li>
                                <li><Link to="/blog-right-sidebar">right sidebar </Link></li>
                                <li><Link to="/blog-single">blog detail</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="side-nav-button">
                        <Link to="/login" className="theme-btn">login</Link>
                        <Link to="/sign-up" className="theme-btn">Sign up</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
