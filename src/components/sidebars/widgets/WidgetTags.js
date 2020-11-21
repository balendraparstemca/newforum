import React, {Component} from 'react';
import {Link} from "react-router-dom";

class WidgetTags extends Component {
    state = {
        title: 'Tags Cloud',
        lists: [
            {
                text: 'Travel',
                url: '#'
            },
            {
                text: 'Restaurant',
                url: '#'
            },
            {
                text: 'Gym',
                url: '#'
            },
            {
                text: 'Food',
                url: '#'
            },
            {
                text: 'Office',
                url: '#'
            },
            {
                text: 'Bar',
                url: '#'
            },
            {
                text: 'Health',
                url: '#'
            },
            {
                text: 'Car Parking',
                url: '#'
            },
            {
                text: 'Nightlife',
                url: '#'
            },
            {
                text: 'Doctor',
                url: '#'
            },
            {
                text: 'Bike Parking',
                url: '#'
            },
        ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget tag-widget">
                    <h3 className="widget-title">
                        {this.state.title}
                    </h3>
                    <div className="title-shape"></div>
                    <ul className="tag-list padding-top-30px">

                        {this.state.lists.map((item, i) => {
                            return (
                                <li key={i}>
                                    <Link to={item.url}>{item.text}</Link>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </>
        );
    }
}

export default WidgetTags;