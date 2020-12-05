import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { GiChickenOven, GiWineGlass } from 'react-icons/gi'
import { connect } from "react-redux";
import { gethomeList } from '../../../services/action/list';

class PopularCategories extends Component {

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
                {this.state.category && this.state.category.map((item, index) => {
                    return (
                        <div className="col-lg-3 column-td-6" key={index}>
                            <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
                                <figure className="category-fig m-0">
                                    <img src={item.img} alt="category" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <Link to={`/listing-list/${item.id}`} className="cat-fig-box">
                                            <div className="icon-element mb-3">
                                                {item.icon}
                                            </div>
                                            <div className="cat-content">
                                                <h4 className="cat__title mb-3">{item.title}</h4>
                                                <span className="badge">{item.stitle} Listing</span>
                                            </div>
                                        </Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    )
                })}
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
export default connect(mapStateToProps)(PopularCategories);
