import React from 'react'
import "./css/Chat.css";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';


function Chat() {
    return (
        <div className="chat">

            {/* chat header */}
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>User name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            {/* chat header end */}

            {/* chat body */}
            <div className="chat_body scrollbar-thin">
                <p className="chat_message"> 
                    <span className="chat_name">Piyush </span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat_message"> 
                    <span className="chat_name">Piyush </span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat_message chat_receiver"> 
                    <span className="chat_name">Piyush </span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                
                
            </div>
            {/* chat body end */}

            {/* chat footer */}
            <div className="chat_footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton> 
                <form >
                    <input type="text" name="" id="" placeholder="Type a message"/>
                    <button type="submit">Send the message</button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>

                    

            </div>

            {/* chat footer end */}

            
        </div>
    )
}

export default Chat
