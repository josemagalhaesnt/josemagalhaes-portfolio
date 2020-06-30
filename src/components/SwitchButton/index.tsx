import React, { ReactElement, useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Icon } from '../common/Icon';
import SwitchButtonStyled from './styles';

interface Props {
    toggleTheme(): void;
}

export const SwitchButton = ({ toggleTheme }: Props): ReactElement => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <SwitchButtonStyled>
            <Switch
                className="switch"
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={<Icon prefix="fas" icon="sun" size="xs" />}
                uncheckedIcon={<Icon prefix="fas" icon="moon" size="xs" />}
                height={22}
                prefix="fas"
                width={50}
                handleDiameter={23}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secondary}
            />
        </SwitchButtonStyled>
    );
};
