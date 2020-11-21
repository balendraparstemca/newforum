import React, {Component} from 'react';

class WidgetFilterTags extends Component {
    state = {
        title: 'Filter by Tags',
        tags: [
            {
                path: '#',
                title: 'technology'
            },
            {
                path: '#',
                title: 'fashion'
            },
            {
                path: '#',
                title: 'art'
            },
            {
                path: '#',
                title: 'design'
            },
            {
                path: '#',
                title: 'food'
            },
            {
                path: '#',
                title: 'development'
            },
            {
                path: '#',
                title: 'marketing'
            },
            {
                path: '#',
                title: 'video'
            },
            {
                path: '#',
                title: 'music'
            },
            {
                path: '#',
                title: 'lifestyle'
            },
            {
                path: '#',
                title: 'adventure'
            }
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
                    <ul className="tag-list mt-4">
                        {this.state.tags.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.path}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </>
        );
    }
}

export default WidgetFilterTags;