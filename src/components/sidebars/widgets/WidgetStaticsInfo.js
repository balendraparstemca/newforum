import React, {Component} from 'react';
import { BsListCheck, BsBookmark, BsEye } from 'react-icons/bs'
import { MdStarBorder } from 'react-icons/md'
import { FiExternalLink, FiHeart } from 'react-icons/fi'
import { FaRegComment } from 'react-icons/fa'

class WidgetStaticsInfo extends Component {
    state = {
        title: 'Statics info',
        lists: [
            {
                icon: <BsListCheck />,
                text: '12 Listings'
            },
            {
                icon: <MdStarBorder />,
                text: '4.4 Ratings'
            },
            {
                icon: <BsBookmark />,
                text: '24 Bookmark'
            },
            {
                icon: <BsEye />,
                text: '745 Views'
            },
            {
                icon: <FiExternalLink />,
                text: '120 Share'
            },
            {
                icon: <FaRegComment />,
                text: '20 Comments'
            },
            {
                icon: <FiHeart />,
                text: '120 Likes'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <h3 className="widget-title">
                        {this.state.title}
                    </h3>
                    <div className="title-shape"></div>
                    <div className="info-list static-info padding-top-35px">
                        <ul>
                            {this.state.lists.map((item, index) => {
                                return (
                                    <li className="mb-2" key={index}>
                                        <i className="la">{item.icon}</i> {item.text}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default WidgetStaticsInfo;