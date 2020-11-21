import React, {Component} from 'react';
import SectionsHeading from "../../common/SectionsHeading";
import { GoFile } from 'react-icons/go'
import { FiFilter } from 'react-icons/fi'
import { AiOutlineQuestionCircle, AiOutlineApple, AiFillAndroid } from 'react-icons/ai'
import Button from "../../common/Button";

export default class CtaOne extends Component {
    stateList = {
        img: require('../../../assets/images/mobile.png'),
        lists: [
            {
                icon: <GoFile />,
                text: 'Real Time Listing'
            },
            {
                icon: <FiFilter />,
                text: 'Budget Filter For Budget'
            },
            {
                icon: <AiOutlineQuestionCircle />,
                text: 'Notification Price Reduction'
            }
        ],
        symbolImg: [
            {
                img: require('../../../assets/images/symble1.png')
            },
            {
                img: require('../../../assets/images/symble2.png')
            },
            {
                img: require('../../../assets/images/symble3.png')
            },
            {
                img: require('../../../assets/images/symble4.png')
            }
        ]
    }
    render() {
        return (
            <>
                    {this.stateList.symbolImg.map((img, index) => {
                        return (
                            <img src={img.img} key={index} alt="CTA Symbol" className="symble-img" />
                        )
                    })}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="mobile-img">
                                    <img src={this.stateList.img} alt="mobile-img" />
                                </div>
                            </div>
                            <div className="col-lg-6 ml-auto">
                                <div className="mobile-app-content">
                                    <SectionsHeading title="Dirto Android and IOS App is Available!" titleClass="mb-3" desc="Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet Lorem ipsum dolor sit amet." descClass="font-size-17 mb-4" />
                                    <ul className="info-list contact-links">
                                        {this.stateList.lists.map((item, index) => {
                                            return (
                                                <li className="d-flex align-items-center mb-2" key={index}>
                                                    <span className="la">{item.icon}</span> {item.text}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <div className="btn-box text-left margin-top-40px">
                                        <Button text="app store" url="#" className="download-btn">
                                            <span className="la">
                                                <AiOutlineApple />
                                            </span>
                                        </Button>
                                        <Button text="google play" url="#" className="download-btn">
                                            <span className="la">
                                                <AiFillAndroid />
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
}
