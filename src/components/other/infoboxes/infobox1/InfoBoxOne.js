import React, {Component} from 'react';
import {FiMap, FiMail} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'

class InfoBoxOne extends Component {
    states = {
        items: [
            {
                id: '1',
                icon: <FiMap />,
                title: 'Find Interesting Place',
                description: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.'
            },
            {
                id: '2',
                icon: <FiMail />,
                title: 'Contact a Few authors',
                description: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.'
            },
            {
                id: '3',
                icon: <AiOutlineUser />,
                title: 'Make a Reservation',
                description: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.'
            }
        ]
    }
    render() {
        return (
            <>
                {this.states.items.map(item => {
                    return (
                        <div className="col-lg-4 column-td-6" key={item.id}>
                            <div className="icon-box">
                                <div className="info-icon">
                                    {item.icon}
                                    <span className="info-number">{item.id}</span>
                                </div>
                                <div className="info-content">
                                    <h4 className="info__title">
                                        {item.title}
                                    </h4>
                                    <p className="info__desc">
                                        {item.description}
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

export default InfoBoxOne;