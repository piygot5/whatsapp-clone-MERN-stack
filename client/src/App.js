import React, { useEffect, useState } from "react";
import './css/App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js";
import axios from "./axios";

function App() {

  const [messages, setMessages] = useState([]);
  const [lastmessage, setLastmessage] = useState([]);
  console.log("entered app.js")

  useEffect(() => {
    axios.get("/messages/sync")
      .then(response => {
        console.log("message downloading.....")
        setMessages(response.data);
        setLastmessage("Hi");
      });
  }, []);


  useEffect(() => {
    const pusher = new Pusher('2cf60902cdc98d3f75c3', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
      setLastmessage(newMessage.message)
    });
    

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages]);


  return (
    <div className="app">
      <div className="app_body">
        <Sidebar lastmessage={lastmessage} />
        <Chat messages={messages}/>
      </div>
    </div>
    
  );
}

export default App;
