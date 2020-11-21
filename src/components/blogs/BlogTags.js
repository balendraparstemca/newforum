import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BlogTags extends Component {
    state = {
        title: 'Tags: ',
        lists: [
            {
                path: '#',
                title: 'Travel'
            },
            {
                path: '#',
                title: 'Food'
            },
        ]
    }
    render() {
        return (
            <>
                <ul className="tag-list">
                    <li className="font-weight-semi-bold color-text-2">{this.state.title}</li>
                    {this.state.lists.map((item, i) => {
                        return (
                            <li key={i}>
                                <Link to={item.path} className="radius-rounded">{item.title} </Link>
                            </li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default BlogTags;