import React, { Component } from 'react';
import { GiChickenOven, GiWineGlass } from 'react-icons/gi'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { gethomeList } from '../../../services/action/list';

class BrowseCategoriesTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alllists: [],
            category: []
        }
    }
    componentDidMount() {

        this.fetchHomelists();

    }

    fetchHomelists = () => {
        this.props.dispatch(gethomeList()).then(() => {
            this.setState({
                alllists: this.props.lists, mainlists: this.props.lists
            })
            this.category();
        });
    }


    category() {
        const array = this.state.alllists;
        const result = [];
        const map = new Map();
        let count = 0;
        for (const item of array) {
            if (map.has(item.listing.categoryname)) {
                let objIndex = result.findIndex((obj => obj.title == item.listing.categoryname));
                result[objIndex].stitle = result[objIndex].stitle + 1;

            }
            else {
                map.set(item.listing.categoryname, true);    // set any value to Map
                result.push({
                    id: item.listing.categoryid,
                    icon: <GiChickenOven />,
                    title: item.listing.categoryname,
                    stitle: 1,
                    img: require('../../../assets/images/img1.jpg')


                });
            }
        }


        this.setState({ category: result })

    }
    
    render() {
        return (
            <>
                <div className="row mt-5">
                    {this.state.category.map((item, index) => {
                        return (
                            <div className="col-lg-2 column-td-6" key={index}>
                                <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
                                    <figure className="category-fig m-0">
                                        <img src={item.img} alt="category" className="cat-img" />
                                        <figcaption className="fig-caption">
                                            <Link to={item.cardLink} className="cat-fig-box">
                                                <div className="icon-element mb-3">
                                                    <span className="d-inline-block">
                                                        {item.icon}
                                                    </span>
                                                </div>
                                                <div className="cat-content">
                                                    <h4 className="cat__title">
                                                        {item.title}
                                                    </h4>
                                                </div>
                                            </Link>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { isLoggedIn, userdetails } = state.auth;
    const { lists, categorylists } = state.list;
    return {
        isLoggedIn, userdetails, lists, categorylists,

    };
}
export default connect(mapStateToProps)(BrowseCategoriesTwo);
