import React, {Component} from 'react';
import {Link} from "react-router-dom";

class WidgetCategory extends Component {
    state = {
        title: 'Categories',
        lists: [
            {
                cat: 'Restaurant',
                catNum: 11,
                url: '#'
            },
            {
                cat: 'Shop',
                catNum: 32,
                url: '#'
            },
            {
                cat: 'Fitness',
                catNum: 21,
                url: '#'
            },
            {
                cat: 'Event',
                catNum: 24,
                url: '#'
            },
            {
                cat: 'Bar',
                catNum: 14,
                url: '#'
            },
            {
                cat: 'Salon',
                catNum: 11,
                url: '#'
            },
            {
                cat: 'Beauty',
                catNum: 10,
                url: '#'
            },
        ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <h3 className="widget-title">
                        {this.state.title}
                    </h3>
                    <div className="title-shape"></div>
                    <div className="cat-list padding-top-30px">
                        <ul className="list-items">

                            {this.state.lists.map((item, i) => {
                                return (
                                    <li className="mb-2 pb-2" key={i}>
                                        <Link to={item.url} className="d-flex justify-content-between align-items-center before-none">
                                            {item.cat} <span>{item.catNum}</span>
                                        </Link>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default WidgetCategory;