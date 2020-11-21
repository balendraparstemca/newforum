import React, {Component} from 'react';

moment.locale('ja', {
    week: {
        dow: 1,
    }
});

class ThemeDatePicker extends Component {

    constructor(props){
        super(props)
        this.state = {date: moment()};
        this.dateChanged = this.dateChanged.bind(this);
    }

    dateChanged(d){
        this.setState({date: d});
    }

    render() {
        return (
            <div>
                <DatePicker selected={this.state.date}
                            onChange={this.dateChanged} />
            </div>
        );
    }
}

export default ThemeDatePicker;