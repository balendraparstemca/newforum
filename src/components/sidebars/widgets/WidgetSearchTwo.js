import React, {Component} from 'react';
import { FiSearch } from 'react-icons/fi'

class WidgetSearchTwo extends Component {
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <div className="contact-form-action">
                        <form>
                            <div className="form-group">
                                <span className="form-icon">
                                    <FiSearch />
                                </span>
                                <input className="form-control" type="text" placeholder="Search..." />
                                <button type="submit" className="theme-btn submit-btn border-0">search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default WidgetSearchTwo;