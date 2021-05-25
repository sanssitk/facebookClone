import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {useStateValue} from "./StateProvider";

function Sidebar() {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className="sidebar">
        <SidebarRow Icon="" src={user.photoURL} title={user.displayName} />
        <SidebarRow Icon={LocalHospitalIcon} src="" title="COVID-19 Information Center" />
        <SidebarRow Icon={EmojiFlagsIcon} src="" title="Pages" />
        <SidebarRow Icon={PeopleIcon} src="" title="Friends" />
        <SidebarRow Icon={ChatIcon} src="" title="Messenger" />
        <SidebarRow Icon={StorefrontIcon} src="" title="Market Place" />
        <SidebarRow Icon={VideoLibraryIcon} src="" title="Videos" />
        <SidebarRow Icon={ArrowDropDownIcon} src="" title="See more" />
        
            
        </div>
    )
}

export default Sidebar
