import React, {Component} from 'react';
import WidgetAuthorTwo from './WidgetAuthorTwo';
import WidgetCategory from './WidgetCategory';
import WidgetTags from './WidgetTags';
import WidgetFollow from './WidgetFollow';
import WidgetPopularPost from './WidgetPopularPost';
import WidgetSubscribe from './WidgetSubscribe';

class HomeSidebar extends Component {
    render() {
        return (
            <>
                <div className="sidebar section-bg">
                    <WidgetAuthorTwo />
                    <WidgetCategory />
                    <WidgetTags />
                    <WidgetPopularPost />
                    <WidgetSubscribe />
                    <WidgetFollow />
                </div>
            </>
        );
    }
}

export default HomeSidebar;