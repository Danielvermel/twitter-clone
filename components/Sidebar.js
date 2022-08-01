import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {HomeIcon} from "@heroicons/react/solid";
import {BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <div>
      {/* Twitter Logo */}
      <div className="hoverEffect">
        <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image>
      </div>
      {/* Menu */}
      <div className="">
        <SidebarMenuItem text="Home" Icon={HomeIcon}/>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
        <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
        <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
        <SidebarMenuItem text="Profile" Icon={UserIcon}/>
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>
      </div>
      
      {/* Button */}
      <button>Tweet</button>
      
      {/* Mini-Profile */}
      
      <div className="hoverEffect">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGfuZm7dCiVuQ/profile-displayphoto-shrink_800_800/0/1650874180152?e=1665014400&v=beta&t=kPifY9vq-ZtQiN_LZeHdNFHtbl24s_LsuEwPzDdefT0" 
             alt="user image" className="h-20 rounded-full"
        />
        <div className="">
          <h4>Daniel Leite</h4>
          <p>@danielvermel</p>
        </div>
        <DotsHorizontalIcon className="h-5"/>
      </div>
    </div>
  )
}
