import React, { useState } from 'react'
import { FiPlus, FiPlusCircle, } from 'react-icons/fi';
import { BsFillChatSquareQuoteFill, BsPower } from 'react-icons/bs'
import { connect } from "react-redux";
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import userimg from '../../../assets/images/team5.jpg'
import { Logoutuser } from '../../../services/action/auth';
import moment from 'moment';
import { getNotification } from '../../../services/action/common';
class HeaderAuthorAccess extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            AuthorAccessOpen: false
        }
    }

    componentDidMount() {
        if (this.props.userdetails) {
            this.props.dispatch(getNotification({ notify_to: this.props.userdetails && this.props.userdetails.id }));


        }
    }



    logout(email) {
        const obj = { emailid: email }
        this.props.dispatch(Logoutuser(obj)).then(() => {
            this.setState({
                AuthorAccessOpen: !this.state.AuthorAccessOpen
            })
            
        });
    }

    setAuthorAccessOpen() {
        this.setState({
            AuthorAccessOpen: !this.state.AuthorAccessOpen
        })
    }

    render() {
        return (
            <>


                <div className="logo-right-content">

                    {this.props.isLoggedIn ? <>   <ul> <li>
                        <Button text="add listing" url="/add-listing" >
                            <FiPlusCircle />
                        </Button>
                    </li></ul> <div className="side-user-menu-open" onClick={() => this.setAuthorAccessOpen()}>
                            <AiOutlineUser />
                        </div></> : (<ul className="author-access-list"> <li>
                            <Link to="/login">login</Link>
                            <span className="or-text">or</span>
                            <Link to="/sign-up">Sign up</Link>
                        </li>
                            <li>
                                <Button text="add listing" url="/add-listing" >
                                    <FiPlusCircle />
                                </Button>
                            </li>
                        </ul>)}

                </div>

                {/* Side User panel */}
                <div className={this.state.AuthorAccessOpen ? 'side-user-panel active' : 'side-user-panel'}>
                    <div className="humburger-menu">
                        <div className="humburger-menu-lines side-menu-close" onClick={() => this.setAuthorAccessOpen()}></div>
                    </div>
                    <div className="side-menu-wrap side-user-menu-wrap">

                        <div className="side-user-img">
                            <img src={this.props.userdetails && this.props.userdetails.profileimg ? process.env.REACT_APP_API_KEY + 'utilities/' + this.props.userdetails.profileimg : userimg} alt="User" />
                            <h5 className="su__name">{this.props.userdetails && this.props.userdetails.userName}</h5>

                            <h4 className="su__name">{this.props.userdetails && this.props.userdetails.emailId}</h4>
                            <span className="su__meta">{moment(Number(this.props.userdetails && this.props.userdetails.joined)).fromNow()}</span>
                            <div className="avatar-icon">
                                <Link to="/dashboard" data-toggle="tooltip" data-placement="top" title="Change Avatar"> <FiPlus /></Link>
                            </div>
                        </div>

                        <ul className="side-menu-ul">
                            <li><Link to="/dashboard"><AiOutlineUser className="user-icon" /> My Profile</Link></li>
                            <li><Link to="/add-listing"><FiPlusCircle className="user-icon" /> add listing</Link></li>
                            <li><Link to={`/forum/user/${this.props.userdetails && this.props.userdetails.userName}`}><FiPlusCircle className="user-icon" /> My Forum</Link></li>
                            <li><Link to="/dashboard"><button type="button" className="btn btn-danger">
                                <BsFillChatSquareQuoteFill className="user-icon" /> Notifications {this.props.notifications && this.props.notifications.length}
                            </button></Link></li>

                            <li><div className="dropdown-divider"></div></li>
                            <li onClick={() => this.logout(this.props.userdetails && this.props.userdetails.emailId)}><Link to="#"><BsPower className="user-icon" /> Sign Out</Link></li>
                        </ul>

                    </div>
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    const { isLoggedIn, userdetails } = state.auth;
    const { notifications } = state.notification;
    const { message } = state.message;
    return {
        isLoggedIn, userdetails, notifications,
        message
    };
}
export default connect(mapStateToProps)(HeaderAuthorAccess);
