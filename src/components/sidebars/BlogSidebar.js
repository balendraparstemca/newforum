import React, {Component} from 'react';
import { BsEye } from 'react-icons/bs'
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import moment from 'moment';
import { communitydetails } from '../../services/action/community';
class BlogSidebar extends Component {
    state = {
        img: require('../../assets/images/default.png'),
        title: 'Similar Posts',
        communitydetails: {},
        cmid:null,
        items: [
            {
                img: require('../../assets/images/post.png'),
                title: 'The best sale marketer of the next year',
                titleLink: '/blog-single',
                date: '20 Jan, 2019',
                author: 'TechyDevs',
                authorUrl: 'https://techydevs.com',
                cardClass: 'mb-3',
            },
            {
                img: require('../../assets/images/post.png'),
                title: 'How to make your ideas became true',
                titleLink: '/blog-single',
                date: '20 Jan, 2019',
                author: 'TechyDevs',
                authorUrl: 'https://techydevs.com',
                cardClass: 'mb-3',
            },
            {
                img: require('../../assets/images/post.png'),
                title: 'What gets in the way of strategy',
                titleLink: '/blog-single',
                date: '20 Jan, 2019',
                author: 'TechyDevs',
                authorUrl: 'https://techydevs.com',
                cardClass: 'mb-3',
            },
            {
                img: require('../../assets/images/post.png'),
                title: 'What gets in the way of strategy',
                titleLink: '/blog-single',
                date: '20 Jan, 2019',
                author: 'TechyDevs',
                authorUrl: 'https://techydevs.com',
                cardClass: '',
            },
        ]
    }

    componentDidUpdate(prevProps){
        if (this.state.cmid !== this.props.comid) {
        this.setState({ cmid: this.props.comid });
        let obj = { "com_id": this.props.comid }
        this.props.dispatch(communitydetails(obj)).then(()=>{
            this.setState({
                communitydetails: this.props.communitydetails[0]
            })
        })
    }
      
    }

    render() {
        return (
            <>
                <div className="sidebar section-bg">
                <div className="sidebar-widget">
                        <div className="author-bio margin-bottom-20px">
                            <div className="align-items-center">
                                <div className=""><img src={this.state.img} alt="author" /></div>
                                <div className="author-inner-bio">
                                   <Link to={`/forum/r/${this.state.communitydetails && this.state.communitydetails.communityName}`}>
                                       <b>
                                        r/{this.state.communitydetails && this.state.communitydetails.communityName}
                                      </b>
                                    
                                    </Link> 
                                    <p className="author__meta">
                                     created : { moment(Number(this.state.communitydetails && this.state.communitydetails.Date)).fromNow()}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="section-heading">
                            <p className="sec__desc font-size-15 line-height-24">
                                {this.state.communitydetails && this.state.communitydetails.about}
                            </p>
                        </div>
                        <div className="section-block-2 margin-top-30px"></div>
                    </div>

                  
                    <div>
              {/*  <div className="sidebar-widget similar-widget">
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
                    
                </div>*/}
            </div>
    
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { communitydetails, communitylist } = state.community;
    const { message } = state.message;
    const { category } = state.common;
    const { posts } = state.post;

    return {
        communitydetails, category, communitylist,posts,
        message
    };
}
export default connect(mapStateToProps)(BlogSidebar);
