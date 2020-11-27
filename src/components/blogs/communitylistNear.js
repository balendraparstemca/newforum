import React, {Component} from 'react';

import { BsEye } from 'react-icons/bs'
import {Link} from "react-router-dom";
import Button from '../common/Button';

class CommunityListNear extends Component {
    state = {
        title: 'Community list Near you',
        items: [
            {
                img: require('../../assets/images/img34.jpg'),
                title: 'The best sale marketer of the next year',
                titleLink: '/blog-single',
                date: '20 Jan, 2019',
                author: 'TechyDevs',
                authorUrl: 'https://techydevs.com',
                cardClass: 'mb-3',
            },
            {
                img: require('../../assets/images/img35.jpg'),
                title: 'How to make your ideas became true',
                titleLink: '/blog-single',
                date: '20 Jan, 2019',
                author: 'TechyDevs',
                authorUrl: 'https://techydevs.com',
                cardClass: 'mb-3',
            },
            {
                img: require('../../assets/images/img36.jpg'),
                title: 'What gets in the way of strategy',
                titleLink: '/blog-single',
                date: '20 Jan, 2019',
                author: 'TechyDevs',
                authorUrl: 'https://techydevs.com',
                cardClass: 'mb-3',
            },
            {
                img: require('../../assets/images/img37.jpg'),
                title: 'What gets in the way of strategy',
                titleLink: '/blog-single',
                date: '20 Jan, 2019',
                author: 'TechyDevs',
                authorUrl: 'https://techydevs.com',
                cardClass: '',
            },
        ]
    }
    render() {
        return (
            <div>
                <div className="sidebar-widget similar-widget">
                    {this.state.title ? (
                        <h3 className="widget-title">{this.state.title}</h3>
                    ) : ''}
                    <div className="title-shape"></div>
                    <div className="similar-list padding-top-30px">

                        {this.state.items.map((item, i) => {
                            return (
                                <div key={i} className="recent-item mb-3">
                                    <div className="recent-img">
                                        <Link to={item.titleLink}>
                                            <img src={item.img} alt="blog" />
                                        </Link>
                                    </div>
                                    <div className="recentpost-body">
                                        <h4 className="recent__link">
                                            <Link to={item.titleLink}>{item.title}</Link>
                                        </h4>
                                        <p className="recent__meta">{item.date} by <a href={item.authorUrl}>{item.author}</a></p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                 
                </div>
            </div>
        );
    }
}

export default CommunityListNear;