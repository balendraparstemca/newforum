import React, { Component } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { BsPencil } from 'react-icons/bs'
import { RiSendPlane2Line } from 'react-icons/ri'
import Select from "react-select";
import { postModel } from '../../model/postModel';
import SweetAlert from 'react-bootstrap-sweetalert';
import { connect } from "react-redux";
import { fetchCommunityList, fetchFlair } from '../../services/action/common';
import { fetcPostDetail, postUpdate } from '../../services/action/post';

class EditPost extends Component {

    constructor(props) {
        super(props);

        this.handlePost = this.handlePost.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onChangeCommunity = this.onChangeCommunity.bind(this);
        this.onChangeFlare = this.onChangeFlare.bind(this);
        this.onChangeAccessmodifire = this.onChangeAccessmodifire.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.state = {
            description: "",
            title: "",
            url: "",
            accessmodifier: "",
            loading: false,
            pictures: '',
            flare: { label: 'select tag', value: '' },
            comid: { label: 'select community', value: 0 },
            titleurl: '',
            postdetail: {},
            post_id: null

        };

    }

    componentDidMount() {

        this.props.dispatch(fetchCommunityList());
        this.props.dispatch(fetchFlair(3));

        this.postdetail();

    }

    postdetail = () => {
        const userid = this.props.userdetails && this.props.userdetails.id;

        let obj = { canonicalurl: this.props.match.params.url }
        this.props.dispatch(fetcPostDetail(obj)).then(() => {
            if (this.props.postsdetail.length > 0) {
                if (this.props.postsdetail[0].user === userid) {
                    this.setState({
                        post_id: this.props.postsdetail[0].post_id,
                        comid: { label: this.props.postsdetail[0].com_name, value: this.props.postsdetail[0].com_id },
                        description: this.props.postsdetail[0].description,
                        title: this.props.postsdetail[0].title,
                        url: this.props.postsdetail[0].url,
                        flare: { label: this.props.postsdetail[0].flare_tag, value: this.props.postsdetail[0].flare_tag },
                        postdetail: this.props.postsdetail[0]

                    })
                } else {
                    this.props.history.push("/forum/home");
                    window.location.reload();

                }

            }
            else {
                this.props.history.push("/error");
                window.location.reload();
            }
        })
    }


    onChangeDescription(e) {
        this.setState({ description: e.target.value });
    }

    onChangeUrl(e) {
        this.setState({
            url: e.target.value
        });

    }


    onChangeFlare = flare => {
        this.setState({ flare });

    };

    onChangeCommunity = comid => {
        this.setState({ comid });

    };


    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }


    onDrop(picture) {
        this.setState({
            pictures: picture[0].name,
        });

    }

    onChangeAccessmodifire(e) {
        this.setState({
            accessmodifier: e.target.value,
        });
    }

    getAlert = (alerttype, title) => (
        <SweetAlert
            type={alerttype}
            title={title}
            onConfirm={this.onConfirm}
            onCancel={this.onCancel}>
            {this.props.message}
        </SweetAlert>
    );

    handlePost(e) {
        e.preventDefault();

        if (!this.state.comid.value) { alert('please select community'); }
        else if (!this.state.flare.value) { alert('please select flare') }
        else {
            this.setState({
                loading: true
            });
            postModel.post_id = this.state.post_id;
            postModel.title = this.state.title;
            postModel.description = this.state.description;
            postModel.type = this.state.accessmodifier;
            postModel.user = this.props.userdetails.id;
            postModel.flare = this.state.flare.value;
            postModel.groupId = this.state.comid.value;
            postModel.imgUrl = this.state.pictures;
            postModel.url = this.state.url;
            postModel.canonicalurl = this.state.title.split(' ', 6).join(' ').toLowerCase().replace(/ /g, '_').replace(/[^\w-]+/g, '');
            console.log(postModel);
            this.props.dispatch(postUpdate(postModel)).then(() => {


                this.setState({
                    alert: this.getAlert('success', ' successfull updated')
                })



            }).catch(() => {
                this.setState({
                    loading: false, alert: this.getAlert('warning', ' creating post Failed')
                });

            });

        }

    }

    onConfirm = () => {
        this.setState({
            loading: false, alert: null
        });
        this.props.history.push(`/forum/post/${postModel.canonicalurl}`);
        window.location.reload();

    }


    render() {

        const { flare, comid } = this.state;
        const { communitylist, flair } = this.props;
        const community = communitylist ? communitylist.map(com => {
            return { value: `${com.com_id}`, label: `r/${com.communityName}` };
        }) : [];
        const flairlist = flair ? flair.map(item => {
            return { value: `${item.title}`, label: `# ${item.title}` };
        }) : [];


        return (
            <main className="List-map-view2">
                {/* Header */}
                <GeneralHeader />

                <section className="blog-grid margin-top-190px  padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="faq-forum">
                                    <div className="billing-form-item">
                                        <div className="billing-title-wrap">
                                            <h3 className="widget-title">Create favourite Topic</h3>
                                            <div className="short-option mr-3 padding-top-10px">
                                                <Select
                                                    value={comid} onChange={this.onChangeCommunity}
                                                    placeholder="Short by"
                                                    options={community}
                                                />
                                            </div>
                                            <div className="title-shape margin-top-10px"></div>
                                        </div>

                                        <div className="billing-content">
                                            <div className="contact-form-action">
                                                <form method="post" onSubmit={this.handlePost} >
                                                    <div className="input-box">
                                                        <label className="label-text">Title</label>
                                                        <div className="form-group">
                                                            <span className="form-icon"><AiOutlineUser /></span>
                                                            <input className="form-control" type="text" placeholder="Tittle (maxLength 500)" name="title" value={this.state.title} onChange={this.onChangeTitle} required="required" maxLength="500" />
                                                        </div>
                                                    </div>
                                                    <div className="input-box">
                                                        <label className="label-text">Url</label>
                                                        <div className="form-group">
                                                            <span className="form-icon"><FaRegEnvelope /></span>
                                                            <input className="form-control" type="url" placeholder="Any urls for refences" name="url" value={this.state.url} onChange={this.onChangeUrl} />
                                                        </div>
                                                    </div>
                                                    <div className="input-box">
                                                        <label className="label-text">Description</label>
                                                        <div className="form-group">
                                                            <span className="form-icon"><BsPencil /></span>
                                                            <textarea className="message-control form-control" name="description" value={this.state.description} onChange={this.onChangeDescription} placeholder="Write description for post"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="input-box">
                                                        <label className="label-text">Flare Tags</label>
                                                        <div className="form-group">
                                                            <span className="form-icon"><FaRegEnvelope /></span>
                                                            <Select value={flare} onChange={this.onChangeFlare}
                                                                placeholder="Short by"
                                                                options={flairlist}
                                                            />  </div>
                                                    </div>



                                                    <div className="btn-box">
                                                        <button type="submit" className="theme-btn border-0" disabled={this.state.loading}>
                                                            <i><RiSendPlane2Line /></i>  {this.state.loading && (
                                                                <span className="spinner-border spinner-border-sm"></span>
                                                            )} Update Post
                                                         </button>
                                                    </div>
                                                    {this.state.alert}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4">

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

function mapStateToProps(state) {

    const { communitylist } = state.community;
    const { flair } = state.common;
    const { userdetails, isLoggedIn } = state.auth;
    const { isCreated, postsdetail } = state.post;
    return {
        communitylist, flair, userdetails, isCreated, isLoggedIn, postsdetail
    };
}
export default connect(mapStateToProps)(EditPost);