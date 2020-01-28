import React, { Component } from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window, MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import 'stream-chat-react/dist/css/index.css';
import API from '../utils/API'

const clientchatId = process.env.REACT_APP_STREAM_CHAT_ID;
const clientchatKey = process.env.REACT_APP_STREAM_CHAT_KEY;
const chatClient = new StreamChat(clientchatKey, clientchatId);

// const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiaGlkZGVuLXRydXRoLTMifQ.mNwLvjjiot46wV_DwcZgZKGzS6PE3FAx_BO1TeVopio';


chatClient.setUser(
    {
        id: 'jlahey',
        name: 'Jim Lahey',
        image: 'https://i.imgur.com/fR9Jz14.png',
    },
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiamxhaGV5In0.OEJe2Q3Z-J_KYhBgoEUuiDy14BrkbMOd0TUWWxB1jvQ",
);

const channel = chatClient.channel('messaging', 'godevs', {
    mage: '../../src/assets/img/guaclogo.png',
    name: 'Family Room',
});


export default class chatRoom extends Component{
    componentDidMount() {
        // this.loadUserData();
    }
    loadUserData = () => {
        API.userData()
            .then(res => console.log(res.data)
            )
            .catch(err => console.log(err));
    };
    assignUser = () =>{

    }

render() {
    return(
    <Chat client={chatClient} theme={'messaging light'}>
        <Channel channel={channel}>
            <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
            </Window>
            <Thread />
        </Channel>
    </Chat>
        )
    }
};
