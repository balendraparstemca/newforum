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
import PhotoUploader from '../../components/addlisting/PhotoUploader';
import { postModel } from '../../model/postModel';
import SweetAlert from 'react-bootstrap-sweetalert';
import { connect } from "react-redux";
import { fetchCommunityList, fetchFlair } from '../../services/action/common';
import { createpost } from '../../services/action/post';

class NewPost extends Component {

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
           
        };

    }

    componentDidMount() {

        this.props.dispatch(fetchCommunityList());
        this.props.dispatch(fetchFlair(3));
        if (this.props.match.params.communityname) {
       this.state.comid.label = 'r/' + this.props.match.params.communityname
      }

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
            this.props.dispatch(createpost(postModel)).then(() => {
 
                 if (this.props.isCreated) {
                     this.setState({
                         alert: this.getAlert('success', ' successfull created')
                     })
                 }
                 else {
                     this.setState({
                         alert: this.getAlert('warning', 'creating post Failed')
                     })
                 }
 
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
                                                            )} Create Post
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
    const { isCreated } = state.post;
    return {
        communitylist, flair, userdetails, isCreated, isLoggedIn
    };
}
export default connect(mapStateToProps)(NewPost);