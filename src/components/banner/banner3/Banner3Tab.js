import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { GiPositionMarker } from 'react-icons/gi'
import { IoMdMusicalNotes } from 'react-icons/io'
import { AiOutlineHome } from 'react-icons/ai'
import { FaSearchPlus } from 'react-icons/fa'
import {Link} from "react-router-dom";
import BannerOneSearchInput from "../banner1/BannerOneSearchInput";
import BannerThreeSearchInput2 from "./BannerThreeSearchInput2";
import BannerThreeSearchInput3 from "./BannerThreeSearchInput3";

class Banner3Tab extends Component {
    render() {
        return (
            <>
                <Tabs>
                    <div className="tab-shared">
                        <TabList className="nav nav-tabs" id="myTab">
                            <Tab>
                                <Link className="nav-link theme-btn radius-rounded"  to="#">
                                    <span>
                                        <GiPositionMarker />
                                    </span> places
                                </Link>
                            </Tab>
                            <Tab>
                                <Link className="nav-link theme-btn radius-rounded"  to="#">
                                    <span>
                                        <IoMdMusicalNotes />
                                    </span> Events
                                </Link>
                             </Tab>
                            <Tab>
                                <Link className="nav-link theme-btn radius-rounded"  to="#">
                                    <span>
                                        <FaSearchPlus />
                                    </span> Jobs
                                </Link>
                             </Tab>
                            <Tab>
                                <Link className="nav-link theme-btn radius-rounded"  to="#">
                                    <span>
                                        <AiOutlineHome />
                                    </span> Real Estate
                                </Link>
                             </Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <BannerOneSearchInput />
                    </TabPanel>
                    <TabPanel>
                        <BannerThreeSearchInput2 />
                    </TabPanel>
                    <TabPanel>
                        <BannerOneSearchInput />
                    </TabPanel>
                    <TabPanel>
                        <BannerThreeSearchInput3 />
                    </TabPanel>
                </Tabs>
            </>
        );
    }
}

export default Banner3Tab;