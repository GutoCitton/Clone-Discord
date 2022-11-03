import React, {useRef, useEffect} from "react";

import ChannelMessage, { Mention } from "../ChanneMessage";

import { Container, Messages, InputWrapper, InputIcon, Input } from './styles'

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef])

    return (
        <Container>
            <Messages>

                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage 
                    key={n}
                    author="Roberto Marin"
                    date="30/01/2022"
                    content="Hoje é seu aniversário"
                    />
                ))}

                <ChannelMessage 
                    author='Augusto Citton'
                    date="04/03/2022"
                    content="Hoje é meu aniversário"
                />

                <ChannelMessage 
                    author='Cláudio Macedo'
                    date="01/06/2022"
                    content={
                        <>
                            <Mention>@Augusto Citton</Mention>, sdds jogar um codzin!
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData;