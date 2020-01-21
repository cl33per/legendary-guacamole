import React, { Component } from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import API from "utils/API";
import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('dng8nyary62h');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiaGlkZGVuLXRydXRoLTMifQ.mNwLvjjiot46wV_DwcZgZKGzS6PE3FAx_BO1TeVopio';

chatClient.setUser(
    {
        id: 'hidden-truth-3',
        name: 'Hidden truth',
        image: 'https://getstream.io/random_svg/?id=hidden-truth-3&name=Hidden+truth'
    },
    userToken,
);

const channel = chatClient.channel('messaging', 'godevs', {
    // add as many custom fields as you'd like
    image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
    name: 'Talk about Go',
});

export default class chatRoom extends Component{
    componentDidMount() {
        this.loadUserData();
    }
    loadUserData = () => {
        API.userData()
            .then(res => console.log(res.data)
            )
            .catch(err => console.log(err));
    };

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
