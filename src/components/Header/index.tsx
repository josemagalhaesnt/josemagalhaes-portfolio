import React, { ReactElement } from 'react';
import { HeaderContainer, HeaderMessage } from './styles';
import ActionButton from '../common/Button/ActionButton';
import { Text } from '../common/Text';
import GroupItems from '../common/GroupItems';
import { Icon } from '../common/Icon';
import { Avatar } from '../common/Avatar';
import profilePicture from '../../assets/photos/profile.png';

const Header: React.FC = (): ReactElement => {
    return (
        <HeaderContainer>
            <Avatar picture={profilePicture} />
            <HeaderMessage>
                <Text color="white">
                    <small>Hello World! I am</small>
                    <h1>José Magalhães</h1>
                    <h4>A passionate Front-end Developer</h4>
                </Text>
            </HeaderMessage>
            <GroupItems spacing={30}>
                <ActionButton link="https://www.github.com/josemagalhaesnt" size={50} transparent>
                    <Icon prefix="fab" size="4x" icon="github-square" color="white" />
                </ActionButton>
                <ActionButton link="https://www.dev.to/josemagalhaesnt" size={50} transparent>
                    <Icon prefix="fab" size="4x" icon="dev" color="white" />
                </ActionButton>
                <ActionButton link="https://www.linkedin.com/in/josemagalhaesnt" size={50} transparent>
                    <Icon prefix="fab" size="4x" icon="linkedin" color="white" />
                </ActionButton>
            </GroupItems>
        </HeaderContainer>
    );
};

export default Header;
