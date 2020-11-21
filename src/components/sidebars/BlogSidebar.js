import React, {Component} from 'react';
import WidgetAuthorTwo from "./widgets/WidgetAuthorTwo";
import WidgetCategory from "./widgets/WidgetCategory";
import WidgetTags from "./widgets/WidgetTags";
import WidgetSubscribe from "./widgets/WidgetSubscribe";
import WidgetFollow from "./widgets/WidgetFollow";
import WidgetSearchTwo from "./widgets/WidgetSearchTwo";
import WidgetPopularPost from "./widgets/WidgetPopularPost";

class BlogSidebar extends Component {
    render() {
        return (
            <>
                <div className="sidebar section-bg">
                    <WidgetSearchTwo />
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

export default BlogSidebar;