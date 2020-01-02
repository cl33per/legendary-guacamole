import React from 'react';
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('q248zfvps3kj');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic3VwZXItY2hlcnJ5LTYifQ.dgGf8HzOOGb8hdeUo_CSSgtR7HMoVabaiaFn9jKWphI';

// TODO: Need to integrate with user databsase.
chatClient.setUser(
    {
        id: 'super-cherry-6',
        name: 'Super cherry',
        image: 'https://getstream.io/random_svg/?id=super-cherry-6&name=Super+cherry'
    },
    userToken,
);

const filters = { type: 'messaging' };
const sort = { last_message_at: -1 };
// const channels = chatClient.queryChannels(filters, sort); TODO: Commented out since there are no addtional chatrooms currently, need to conffigure.

const ChatRooom = () => (
    <Chat client={chatClient} theme={'messaging light'}>
        <ChannelList
            filters={filters}
            sort={sort}
        />
        <Channel>
            <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
            </Window>
            <Thread />
        </Channel>
    </Chat>
);

export default ChatRooom; 