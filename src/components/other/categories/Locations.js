import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Locations extends Component {
    state = {
        locations: [
            {
                img: require('../../../assets/images/flag1.jpg'),
                title: 'United states (2)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag2.jpg'),
                title: 'London (4)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag3.jpg'),
                title: 'Australia (7)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag4.jpg'),
                title: 'Japan (9)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag5.png'),
                title: 'France (12)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag6.png'),
                title: 'Russia (14)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag7.jpg'),
                title: 'New Zealand (17)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag8.jpg'),
                title: 'India (19)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag9.png'),
                title: 'Netherlands (15)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag10.png'),
                title: 'Sweden (17)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag11.png'),
                title: 'Saudi Arabia (29)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag12.jpg'),
                title: 'Scotland (10)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag13.jpg'),
                title: 'Canada (43)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag14.png'),
                title: 'Mexico (45)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag15.jpg'),
                title: 'Bangladesh (50)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag16.jpg'),
                title: 'South Africa (60)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag17.jpg'),
                title: 'Pakistan (48)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag18.jpg'),
                title: 'Costa Rica (33)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag19.svg'),
                title: 'Italy (44)',
                titleUrl: '#'
            },
            {
                img: require('../../../assets/images/flag20.png'),
                title: 'Thailand (55)',
                titleUrl: '#'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row">
                    {this.state.locations.map((item, index) => {
                        return (
                            <div className="col-lg-3 column-td-6" key={index}>
                                <div className="location-item">
                                    <div className="loc-img">
                                        <img src={item.img} alt="flag" />
                                    </div>
                                    <Link to={item.titleUrl} className="loc-name">
                                        {item.title}
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default Locations;