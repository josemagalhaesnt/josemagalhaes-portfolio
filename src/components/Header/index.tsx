import React, { ReactElement } from 'react';

// import { ThemeContext } from 'styled-components';
import { HeaderContainer, HeaderMessage } from './styles';
import { Icon } from '../common/Icon';

import ActionButton from '../common/Button/ActionButton';
import { Text } from '../common/Text';
import GroupItems from '../common/GroupItems';

const Header: React.FC = (): ReactElement => {
    // const { colors } = useContext(ThemeContext);

    return (
        <HeaderContainer>
            <HeaderMessage>
                <Text color="white">
                    <small>Hello World! I am</small>
                    <h1>José Magalhães</h1>
                    <h3>A passionate Front-end Developer</h3>
                </Text>
            </HeaderMessage>
            <GroupItems>
                <ActionButton link="https://www.github.com/josemagalhaesnt">
                    <Icon size={25} icon="github" />
                </ActionButton>
                <ActionButton link="https://www.linkedin.com/in/josemagalhaesnt">
                    <Icon size={25} icon="linkedin2" />
                </ActionButton>
            </GroupItems>
        </HeaderContainer>
    );
};

export default Header;
