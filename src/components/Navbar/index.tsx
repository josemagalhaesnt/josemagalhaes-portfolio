import React, { ReactElement } from 'react';

import { NavbarStyled } from './styles';
import { SwitchButton } from '../SwitchButton';
import { Icon } from '../common/Icon';

interface Props {
    toggleTheme(): void;
}

const Navbar: React.FC<Props> = ({ toggleTheme }: Props): ReactElement => {
    return (
        <NavbarStyled>
            <Icon icon="embed2" size={30} />
            <SwitchButton toggleTheme={toggleTheme} />
        </NavbarStyled>
    );
};

export default Navbar;
