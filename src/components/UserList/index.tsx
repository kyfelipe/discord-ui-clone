import React from 'react';

import { Container, Avatar, User, Role } from './styles';
import ChannelMessage from '../ChannelMessage';
import {Messages} from '../ChannelData/styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot
}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Guilherme Rodz" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Diego Fernandes" isBot />
      {Array.from(Array(17).keys()).map((n) => (
        <UserRow key={n} nickname="Fulano" />
      ))}
    </Container>
  );
};

export default UserList;
