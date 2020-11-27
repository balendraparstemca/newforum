import React, { Component } from 'react';
import WidgetAuthorTwo from "./widgets/WidgetAuthorTwo";
import WidgetCategory from "./widgets/WidgetCategory";
import WidgetTags from "./widgets/WidgetTags";
import WidgetSubscribe from "./widgets/WidgetSubscribe";
import WidgetFollow from "./widgets/WidgetFollow";
import WidgetPopularPost from "./widgets/WidgetPopularPost";
import { connect } from "react-redux";
import moment from 'moment';
import { userdetails } from '../../services/action/user';
class UserSidebar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userdetails: null,
            uid: null,
            userImg: require('../../assets/images/testi-img2.jpg'),
        }
    }


    componentWillReceiveProps() {
        this.setState({
            userdetails: this.props.udetails[0]
        })
    }
    componentDidMount()
    {     let obj = { "id": this.props.userid }
        this.props.dispatch(userdetails(obj)).then(()=>{
            this.setState({
                userdetails: this.props.udetails[0]
            })
        })
    }



    render() {


        return (
            <>
                <div className="sidebar section-bg">

                    <div className="sidebar-widget">
                        <div className="author-bio margin-bottom-20px">
                            <div className="d-flex align-items-center">
                                <img src={this.state.userdetails && this.state.userdetails.profileimg ? `http://localhost:7999/api/v1/utilities/${this.state.userdetails.profileimg}` : this.state.userImg} alt="author" />
                                <div className="author-inner-bio">
                                    <h4 className="author__title font-weight-bold pb-0 mb-1">
                                        u/{this.state.userdetails && this.state.userdetails.userName}
                                    </h4>
                                    <p className="author__meta">
                                        joined : {moment(Number(this.state.userdetails && this.state.userdetails.joined)).fromNow()}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="section-heading">
                            <p className="sec__desc font-size-15 line-height-24">
                                {this.state.content}
                            </p>
                        </div>
                        <div className="section-block-2 margin-top-30px"></div>

                    </div>
                   {/* <WidgetTags /> */}


                </div>
            </>
        );
    }
}


function mapStateToProps(state) {
    const { udetails } = state.user;
    const { message } = state.message;

    return {
        udetails,
        message
    };
}
export default connect(mapStateToProps)(UserSidebar);