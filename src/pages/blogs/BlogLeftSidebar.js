import React, {Component} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import BlogSidebar from "../../components/sidebars/BlogSidebar";
import BlogTwoColumns from "../../components/blogs/BlogTwoColumns";
import Pagination from "../../components/blogs/Pagination";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";

class BlogLeftSidebar extends Component {
    state = {
        breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
    }
    render() {
        return (
            <main className="blog-left-sidebar-page">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Blog Left Sidebar" MenuPgTitle="Blog" img={this.state.breadcrumbimg} />

                <section className="blog-left-sidebar padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <BlogSidebar />
                            </div>
                            <div className="col-lg-8">
                                <BlogTwoColumns />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <NewsLetter />

                {/* Footer*/ }
                <Footer />

                <ScrollTopBtn />
                
            </main>
        );
    }
}

export default BlogLeftSidebar;