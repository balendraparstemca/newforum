import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { confirtVerification } from '../services/action/user'
import { connect } from "react-redux";


class Verify extends Component {
    constructor(props) {
        super(props)
        this.state = {
            confirming: true
        }
    }



    componentDidMount = () => {
        if (this.props.match.params.emailid) {
            const obj = { email_key: this.props.match.params.emailid }
            this.props.dispatch(confirtVerification(obj)).then(() => {
                this.setState({ confirming: false })
                this.props.history.push('/')
            })
        }else{
            this.props.history.push('/')
        }

    }

    render = () =>
        <>
            <div className='confirm'>
                <div className="d-flex justify-content-center margin-top-200px text-primary">
                    {this.state.confirming
                        ? <Spinner size='8x' animation="border" role="status" />
                        : <Link to='/login'>
                            <Spinner size='8x' spinning={''} />
                        </Link>
                    }
                </div>
            </div>

        </>
}
function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
        isLoggedIn,
        message
    };
}
export default connect(mapStateToProps)(Verify);