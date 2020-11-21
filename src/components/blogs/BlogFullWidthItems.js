import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BlogFullWidthItems extends Component {
    state = {
        items: [
            {
                img: require('../../assets/images/img31.jpg'),
                title: '50 Greatest Event Places in United Kingdom',
                titleLink: '/blog-single',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                date: '25 Dec, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: require('../../assets/images/testi-img7.jpg'),
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: require('../../assets/images/img32.jpg'),
                title: 'Top 10 Best Clothing Shops In Sydney',
                titleLink: '/blog-single',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                date: '25 Dec, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: require('../../assets/images/testi-img7.jpg'),
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: require('../../assets/images/img30.jpg'),
                title: 'Top 15 Greatest Hotels In United States',
                titleLink: '/blog-single',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                date: '27 Dec, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: require('../../assets/images/testi-img7.jpg'),
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '492'
            },
            {
                img: require('../../assets/images/img31.jpg'),
                title: '50 Greatest Event Places In United Kingdom',
                titleLink: '/blog-single',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                date: '27 Dec, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: require('../../assets/images/testi-img7.jpg'),
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '589'
            },
            {
                img: require('../../assets/images/img32.jpg'),
                title: 'Top 10 Best Clothing Shops In Sydney',
                titleLink: '/blog-single',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                date: '27 Dec, 2020',
                meta: 'Tips & Tricks',
                metaLink: '#',
                author: 'David Wise',
                authorImg: require('../../assets/images/testi-img7.jpg'),
                readmore: 'Read More',
                readmoreLink: '/blog-single',
                likes: '134'
            }
        ]
    }
    render() {
        return (
            <>
                {this.state.items.map((item, i) => {
                    return (
                        <div className="card-item blog-card" key={i}>
                            <Link to={item.titleLink} className="card-image-wrap">
                                <div className="card-image">
                                    <img src={item.img} alt="Blog Full Width" className="card__img" />
                                </div>
                            </Link>
                            <div className="card-content pl-0 pr-0">
                                <Link to={item.titleLink} className="card-title">
                                    {item.title}
                                </Link>
                                <ul className="card-meta pl-0 d-flex justify-content-between align-items-center mt-2">
                                    <li>{item.date} - <Link to={item.metaLink} className="tag__text">{item.meta}</Link></li>
                                    <li><Link to="#">{item.likes} Likes</Link></li>
                                </ul>
                                <p className="card-sub mt-3">
                                    {item.desc}
                                </p>
                                <ul className="post-author d-flex align-items-center justify-content-between mt-3">
                                    <li>
                                        <img src={item.authorImg} alt="Author" />
                                        <span className="by__text"> By</span>
                                        <span> {item.author}</span>
                                    </li>
                                    <li>
                                        <Link to={item.readmoreLink} className="blog__btn">
                                            {item.readmore}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default BlogFullWidthItems;