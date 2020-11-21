import React, {Component} from 'react';
import { FiHeadphones, FiThumbsUp } from 'react-icons/fi'
import { FaCogs } from 'react-icons/fa'

class HowItWork4 extends Component {
    state = {
        items: [
            {
                icon: <FiHeadphones />,
                title: '24/7 Hours Support',
                desc: 'There are many variations of passages of Lorem Ipsum available. Aenean a quam luctus, finibus tellus'
            },
            {
                icon: <FaCogs />,
                title: 'Admin Panel',
                desc: 'There are many variations of passages of Lorem Ipsum available. Aenean a quam luctus, finibus tellus'
            },
            {
                icon: <FiThumbsUp />,
                title: 'Mobile friendly',
                desc: 'There are many variations of passages of Lorem Ipsum available. Aenean a quam luctus, finibus tellus'
            }
        ]
    }
    render() {
        return (
            <>
                {this.state.items.map((item, i) => {
                    return (
                        <div className="col-lg-4 column-td-6" key={i}>
                            <div className="icon-box icon-box-layout icon-box-layout-3">
                                <div className="info-icon section-bg-3 text-white">
                                    <span className="la">{item.icon}</span>
                                </div>
                                <div className="info-content">
                                    <h4 className="info__title">
                                        {item.title}
                                    </h4>
                                    <p className="info__desc">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default HowItWork4;