import { Avatar } from '@material-ui/core';
import React from 'react'
import "./css/SidebarChat.css";

function SidebarChat() {
    return (
        <div className="sidebarChat">
           <Avatar />
           <div className="sidebarChat_info">
                <h2>User Name</h2>
                <p>This is the last message</p>
           </div>
        </div>
    )
}

export default SidebarChat
