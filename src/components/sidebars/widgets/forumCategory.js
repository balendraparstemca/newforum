import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCategory } from '../../../services/action/common';

class ForumCategory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "All Category Lists",
            category: []
        }
    }

    componentDidMount() {

        this.props.dispatch(fetchCategory()).then(() => {
            this.setState({
                category: this.props.category
            })
        });
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
                            <li className="mb-2 pb-2">
                                <Link to={`/forum/community`} className="d-flex justify-content-between align-items-center before-none">
                                    All
                                </Link>
                            </li>
                            {this.props.category && this.props.category.length === 0 ?
                                (
                                    <li className="mb-2 pb-2" >
                                        <Link  to="#" className="d-flex justify-content-between align-items-center before-none">
                                            there is no category
                                         </Link>

                                    </li>
                                ) : this.state.category.map((item, i) => {
                                    return (
                                        <li className="mb-2 pb-2" key={i}>
                                            <Link to={`/forum/community/${item.name}`} className="d-flex justify-content-between align-items-center before-none">
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { category } = state.common;
    return {
        category
    };
}
export default connect(mapStateToProps)(ForumCategory);
