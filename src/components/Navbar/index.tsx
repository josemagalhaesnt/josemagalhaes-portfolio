import React, { ReactElement } from 'react';

import { NavbarStyled } from './styles';
import { SwitchButton } from '../SwitchButton';

interface Props {
    toggleTheme(): void;
}

const Navbar: React.FC<Props> = ({ toggleTheme }: Props): ReactElement => {
    return (
        <NavbarStyled>
            <SwitchButton toggleTheme={toggleTheme} />
        </NavbarStyled>
    );
};

export default Navbar;
