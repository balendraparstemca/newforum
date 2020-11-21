import React, {Component} from 'react';
import { FiUsers, FiBookOpen } from 'react-icons/fi'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

class IconBoxThree extends Component {
    state = {
        items: [
            {
                id: 1,
                icon: <FiUsers />,
                title: 'Ask Community',
                subtitle: 'Get help from 1M+ Revolut users'
            },
            {
                id: 2,
                icon: <FiBookOpen />,
                title: 'Read our blog',
                subtitle: 'Follow the latest news and stories'
            },
            {
                id: 3,
                icon: <AiOutlineQuestionCircle />,
                title: 'Get help in the app',
                subtitle: 'Just head to << Help >>> in the app'
            },
        ]
    }
    render() {
        return (
            <>
                {this.state.items.map(item => {
                    return (
                        <div className="col-lg-4 column-td-6" key={item.id}>
                            <div className="icon-box icon-box-layout-4">
                                <div className={'info-icon bg-' + item.id + ' text-center'}>
                                    <span>{item.icon}</span>
                                </div>
                                <div className="info-content">
                                    <h4 className="info__title">
                                        {item.title}
                                    </h4>
                                    <p className="info__desc">
                                        {item.subtitle}
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

export default IconBoxThree;