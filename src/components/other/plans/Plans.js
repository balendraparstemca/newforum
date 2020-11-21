import React, {Component} from 'react';
import SectionDivider from "../../common/SectionDivider";
import { RiPlaneLine } from 'react-icons/ri'
import { IoMdPaperPlane, IoIosRocket } from 'react-icons/io'
import { FiCheck } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import {Link} from "react-router-dom";

class Plans extends Component {
    states = {
        lists: [
            {
                icon: <IoMdPaperPlane />,
                title: 'Basic Plan',
                price: '49',
                currency: '$',
                mo: 'Per Month',
                features: [
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'One Listing',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: '90 Days Availability',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'Non-Featured',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'Limited Support',
                    },
                    {
                        icon: <MdClose />,
                        iconClr: 'text-danger',
                        title: 'Average Price Range',
                    },
                    {
                        icon: <MdClose />,
                        iconClr: 'text-danger',
                        title: 'Business Hours',
                    },
                    {
                        icon: <MdClose />,
                        iconClr: 'text-danger',
                        title: 'Lifetime Availability',
                    },
                    {
                        icon: <MdClose />,
                        iconClr: 'text-danger',
                        title: 'Featured In Search Results',
                    }
                ],
                buttonTxt: 'Continue',
                buttonUrl: '#',
                active: false
            },
            {
                icon: <RiPlaneLine />,
                title: 'Advanced Plan',
                price: '99',
                currency: '$',
                mo: 'Per Month',
                features: [
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'One Listing',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: '90 Days Availability',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'Non-Featured',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'Limited Support',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'Average Price Range',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'Business Hours',
                    },
                    {
                        icon: <MdClose />,
                        iconClr: 'text-danger',
                        title: 'Lifetime Availability',
                    },
                    {
                        icon: <MdClose />,
                        iconClr: 'text-danger',
                        title: 'Featured In Search Results',
                    }
                ],
                buttonTxt: 'Continue',
                buttonUrl: '#',
                active: true
            },
            {
                icon: <IoIosRocket />,
                title: 'Enterprise Plan',
                price: '149',
                currency: '$',
                mo: 'Per Month',
                features: [
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'One Listing',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: '90 Days Availability',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'Non-Featured',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'Limited Support',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'Average Price Range',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'Business Hours',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'Lifetime Availability',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'Featured In Search Results',
                    }
                ],
                buttonTxt: 'Continue',
                buttonUrl: '#',
                active: false
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row">
                    {this.states.lists.map((item, i) => {
                        return (
                            <div className="col-lg-4" key={i}>
                                <div className={ item.active ? 'price-item pricing-active' : 'price-item' }>
                                    <div className="price-head">
                                        <i className="fa price__icon">
                                            {item.icon}
                                        </i>
                                        <h3 className="price__title mt-3">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="price-content">
                                        <div className="price-number">
                                            <p className="price__value">
                                                <sup>{item.currency}</sup>{item.price}
                                            </p>
                                            <p className="price__subtitle">{item.mo}</p>
                                        </div>

                                        <SectionDivider />

                                        <div className="price-list-item">

                                            <ul className="list-items text-left">
                                                {item.features.map((ftitem, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <i className={'la ' + ftitem.iconClr}>{ftitem.icon}</i> {ftitem.title}
                                                        </li>
                                                    )
                                                })}
                                            </ul>

                                            <div className="btn-box text-center margin-top-35px">
                                                <Link to={item.buttonUrl} className={item.active ? ('theme-btn w-100 button-success') : 'theme-btn w-100'}>
                                                    {item.buttonTxt}
                                                </Link>
                                            </div>

                                        </div>
                                    </div>

                                    {item.active ? (
                                        <div className="recommended-wrap padding-bottom-30px">
                                            <i className="la"><FiCheck /></i>
                                            <span>Recommended</span>
                                        </div>
                                    ) : ''}

                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default Plans;