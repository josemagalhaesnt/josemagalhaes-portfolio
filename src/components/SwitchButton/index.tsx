import React, { ReactElement, useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import { shade, transparentize, lighten } from 'polished';
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
                checkedIcon={<Icon prefix="fas" icon="sun" size="sm" color="#fff" />}
                uncheckedIcon={<Icon prefix="fas" icon="moon" size="xs" color="#fff" />}
                height={23}
                width={54}
                handleDiameter={28}
                boxShadow={`0px 1px 5px ${transparentize(0.6, colors.background1)}`}
                activeBoxShadow={`0px 0px 1px 5px ${transparentize(0.6, colors.background1)}`}
                offColor={shade(0.15, colors.highlight2)}
                onColor={lighten(0.35, colors.background2)}
                onHandleColor={shade(0.25, colors.background2)}
                id="material-switch"
            />
        </SwitchButtonStyled>
    );
};
