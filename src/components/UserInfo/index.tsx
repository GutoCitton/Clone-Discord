import React from "react";

import { Container, Profile, Avatar, UserData, MicIcon, HeadphonesIcon, SettingsIcon, Icons } from './styles'

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>Augusto Citton</strong>
                    <span>#2432</span>
                </ UserData>
            </Profile>

            <Icons>
                <MicIcon />
                <HeadphonesIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    )
}

export default UserInfo;