import React from "react";
import ChannelButton from "../ChannelButton";

import { Container, Category, AddCategoryIcon } from './styles'

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName='chat-livre'/>
            <ChannelButton channelName='Trabalho'/>
            <ChannelButton channelName='Lolzinho'/>
            <ChannelButton channelName='CoD Warbugs'/>
            <ChannelButton channelName='VemSer'/>
            <ChannelButton channelName='Sleep-chat'/>
        </Container>
    )
}

export default ChannelList;