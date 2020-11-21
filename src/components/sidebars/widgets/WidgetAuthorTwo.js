import React, {Component} from 'react';
import SocialProfile from "../../other/account/SocialProfile";

class WidgetAuthorTwo extends Component {
    state = {
        img: require('../../../assets/images/testi-img2.jpg'),
        name: 'Mark Williamson',
        designation: 'Senior Web Developer',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorem illo laborum magni, maxime omnis quam quod totam voluptatem voluptatibus?'
    }
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <div className="author-bio margin-bottom-20px">
                        <div className="d-flex align-items-center">
                            <img src={this.state.img} alt="author" />
                            <div className="author-inner-bio">
                                <h4 className="author__title font-weight-bold pb-0 mb-1">
                                    {this.state.name}
                                </h4>
                                <p className="author__meta">
                                    {this.state.designation}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section-heading">
                        <p className="sec__desc font-size-15 line-height-24">
                            {this.state.content}
                        </p>
                    </div>
                    <div className="section-block-2 margin-top-30px"></div>
                    <SocialProfile />
                </div>
            </>
        );
    }
}

export default WidgetAuthorTwo;