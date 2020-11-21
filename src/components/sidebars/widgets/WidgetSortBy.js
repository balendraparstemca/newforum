import React, {Component} from 'react';

class WidgetSortBy extends Component {
    state = {
        title: 'Sort by',
        items: [
            {
                id: 1,
                title: 'Best sellers'
            },
            {
                id: 2,
                title: 'Newest'
            },
            {
                id: 3,
                title: 'Best Rated'
            },
            {
                id: 4,
                title: 'Oldest'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <h3 className="widget-title">
                        {this.state.title}
                    </h3>
                    <div className="title-shape"></div>
                    <div className="check-box-list mt-4">

                        {this.state.items.map(item => {
                            return (
                                <div className="custom-checkbox" key={item.id}>
                                    <input type="checkbox" id={'chb3-'+item.id} />
                                    <label htmlFor={'chb3-'+item.id}>
                                        {item.title}
                                    </label>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </>
        );
    }
}

export default WidgetSortBy;