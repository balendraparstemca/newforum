import React, {Component} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Pagination from "../../components/blogs/Pagination";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import GenericHeader from "../../components/common/GenericHeader";
import Post from '../../components/blogs/post';
import { fetchCommunityPost } from '../../services/action/post';
import HomeSidebar from '../../components/sidebars/widgets/homeleftbar';

class BlogFullWidth extends Component {
    constructor(props)
    {
        super(props)
    }

   

    state = {
        breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
    }
    render() {
        return (
            <main className="List-map-view2">
            {/* Header */}
            <GeneralHeader />

                <section className="blog-grid margin-top-190px  padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                            <div className="margin-top-0px">
                                    <GenericHeader />
                                </div>
                                <Post />
                            </div>
                            <div className="col-lg-4">
                                <HomeSidebar />
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

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}

export default BlogFullWidth;