import React, {Component} from 'react'
import { connect } from "react-redux";
import { fetchCategory } from '../../../services/action/common';
 class BannerOneHeroHeading extends Component {
    constructor(props) {
        super(props)
        this.state  = {
            title: 'What are you interested in ',
            category:[],
            titleHighlight: [
                {
                    active: true,
                    text: 'Hotels'
                }
              
            ],
            desc: 'Discover the best places to stay, eat, shop & visit the city nearest to you.'
        }
    }
     
   
    
   
    render() {
       
        let category=[];
        let titleHighlight= [
            {
                active: true,
                text: 'Hotels'
            }
          
        ]

        category=titleHighlight.concat(  this.props.category &&  this.props.category.length ? this.props.category.map(cat => {
            return { active: false, text: `${cat.name}` };
        }) : [{
            active: true,
            text: 'category not fetched'
        }])
       
        return (
            <>
                <div className="hero-heading">
                    <div className="section-heading">
                        <h2 className="sec__title cd-headline zoom">
                            {this.state.title}
                            <span className="cd-words-wrapper">
                                {category.map((item, index) => {
                                    return (
                                        <b className={item.active ? 'is-visible' : ' '} key={index}> {item.text}</b>
                                    )
                                })}
                            </span>
                        </h2>
                        <p className="sec__desc">
                            {this.state.desc}
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    const { isLoggedIn,userdetails } = state.auth;
    const {category } = state.common;
    return {
        isLoggedIn, category, userdetails
    
    };
}
export default connect(mapStateToProps)(BannerOneHeroHeading);
