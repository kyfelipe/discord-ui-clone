import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: UI;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, .2) 0 1px 0 0;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  
  background-color: var(--gray);
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-left: 8px;
  
  > strong {
    color: var(--white);
    font-size: 12px;
    display: block;
  }
  
  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  
  > svg:not(:first-child) {
    margin-left: 1px;
  }
`;

export const MicIcon = styled(Mic)`
  width: 28px;
  height: 28px;
  padding: 3px;
  
  color: var(--white);
  opacity: .7;
  cursor: pointer;
  
  transition: opacity .2s;
  
  &:hover {
    opacity: 1;
    border-radius: 5px;
    background-color: var(--quinary);
  }
`;

export const HeadphoneIcon = styled(Headset)`
  width: 30px;
  height: 30px;
  padding: 5px;
  
  color: var(--white);
  opacity: .7;
  cursor: pointer;
  
  transition: opacity .2s;
  
  &:hover {
    opacity: 1;
    border-radius: 5px;
    background-color: var(--quinary);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 30px;
  height: 30px;
  padding: 5px;
  
  color: var(--white);
  opacity: .7;
  cursor: pointer;
  
  transition: opacity .2s;
  
  &:hover {
    opacity: 1;
    border-radius: 5px;
    background-color: var(--quinary);
  }
`;
