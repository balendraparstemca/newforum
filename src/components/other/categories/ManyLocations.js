import React, {Component} from 'react';

class ManyLocations extends Component {
    state = {
        locations: [
            {
                img: require('../../../assets/images/flag1.jpg'),
                country: 'United States (2)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag2.jpg'),
                country: 'London (4)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag3.jpg'),
                country: 'Australia (7)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag4.jpg'),
                country: 'Japan (9)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag5.jpg'),
                country: 'France (12)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag6.jpg'),
                country: 'Russia (14)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag7.jpg'),
                country: 'New Zealand (17)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag8.jpg'),
                country: 'India (19)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag9.jpg'),
                country: 'Netherlands (15)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag10.jpg'),
                country: 'Sweden (17)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag11.jpg'),
                country: 'Saudi Arabia (29)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag12.jpg'),
                country: 'Scotland (10)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag13.jpg'),
                country: 'Canada (43)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag14.jpg'),
                country: 'Mexico (45)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag15.jpg'),
                country: 'Bangladesh (50)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag16.jpg'),
                country: 'South Africa (60)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag17.jpg'),
                country: 'Pakistan (48)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag18.jpg'),
                country: 'Costa Rica (33)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag19.jpg'),
                country: 'Italy (44)',
                countryUrl: '#',
            },
            {
                img: require('../../../assets/images/flag20.jpg'),
                country: 'Thailand (55)',
                countryUrl: '#',
            }
        ]
    }
    render() {
        return (
            <>
                <div className="col-lg-3 column-td-6">
                    <div className="location-item">
                        <div className="loc-img">
                            <img src="images/flag1.jpg" alt="flag" />
                        </div>
                        <a href="#" className="loc-name">United states (2)</a>
                    </div>
                </div>
            </>
        );
    }
}

export default ManyLocations;