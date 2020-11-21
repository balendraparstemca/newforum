import React, {Component} from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa'
import $ from 'jquery'
import Button from "../../common/Button";
import Select from "react-select";


const timeSlots = [
    {
        value: 0,
        label: 'Time Slots'
    },
    {
        value: 1,
        label: '8:00am - 8:30am'
    },
    {
        value: 2,
        label: '9:00am - 9:30am'
    },
    {
        value: 3,
        label: '10:00am - 10:30am'
    },
    {
        value: 4,
        label: '11:00am - 11:30am'
    },
    {
        value: 5,
        label: '12:00pm - 12:30pm'
    },
    {
        value: 6,
        label: '13:00pm - 13:30pm'
    },
    {
        value: 7,
        label: '14:00pm - 14:30pm'
    },
    {
        value: 8,
        label: '15:00pm - 15:30pm'
    }
]

class WidgetBooking extends Component {
    componentDidMount() {
        $(document).on('click', '.input-number-increment', function() {
            var $input = $(this).parents('.input-number-group').find('.input-number');
            var val = parseInt($input.val(), 10);
            $input.val(val + 1);

        });

        /*==== Quantity number decrement control =====*/
        $(document).on('click', '.input-number-decrement', function() {
            var $input = $(this).parents('.input-number-group').find('.input-number');
            var val = parseInt($input.val(), 10);
            if(val !== 0) {
                $input.val(val - 1);
            }
        });
    }
    state = {
        selectedCatOp: null,
        title: 'Booking',
    }
    handleChangeTime = () => {
        const { selectedTime } = this.state;
        this.setState(
            { selectedTime }
        );
    }
    render() {
        return (
            <>
                <div className="sidebar-widget date-widget">
                    <h3 className="widget-title">
                        {this.state.title}
                    </h3>
                    <div className="title-shape"></div>
                    <div className="contact-form-action padding-top-35px">
                        <form>
                            <div className="form-group">
                                <span className="form-icon">
                                    <FaRegCalendarAlt />
                                </span>
                                <input className="date-range form-control" type="date" name="daterange" defaultValue="04/08/2019"/>
                            </div>
                        </form>
                    </div>
                    <div className="time-slots padding-bottom-30px">
                        <Select
                            value={this.selectedTime}
                            onChange={this.handleChangeTime}
                            placeholder="Time Slots"
                            options={timeSlots}
                        />
                    </div>
                    <div className="booking-content d-flex align-items-center justify-content-between text-center">
                        <div className="input-number-group">
                            <p>Adults</p>
                            <div className="input-group-button">
                                <span className="input-number-decrement">-</span>
                            </div>
                            <input className="input-number" type="number" defaultValue="0" min="0" max="1000" />
                            <div className="input-group-button">
                                <span className="input-number-increment">+</span>
                            </div>
                        </div>
                        <div className="input-number-group">
                            <p>Children</p>
                            <div className="input-group-button">
                                <span className="input-number-decrement">-</span>
                            </div>
                            <input className="input-number" type="number" defaultValue="0" min="0" max="1000" />
                            <div className="input-group-button">
                                <span className="input-number-increment">+</span>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box text-center padding-top-35px">
                        <Button text="request to book" url="#" className="d-block" />
                    </div>
                </div>
            </>
        );
    }
}

export default WidgetBooking;