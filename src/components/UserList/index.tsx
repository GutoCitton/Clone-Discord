import React from "react";

import { Container, Role, User, Avatar } from './styles'

interface UserProps {
    nickname: string;
    isBrother?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBrother}) => {
    return (
        <User>
            <Avatar className={isBrother ? 'brother' : ''}/>

            <strong>{nickname}</strong>

            {isBrother && <span> Manin </span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível  - 1</Role>
            <UserRow nickname="Augusto Citton" />

            <Role>Offline - 18</Role>
            <UserRow nickname="Bruno Artemio" isBrother />
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
        </Container>
    )
}

export default UserList;