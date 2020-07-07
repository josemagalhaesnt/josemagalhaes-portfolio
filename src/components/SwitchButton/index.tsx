import React, { ReactElement, useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import { shade, transparentize } from 'polished';
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
                handleDiameter={27}
                boxShadow={`0px 1px 5px ${transparentize(0.6, colors.secondary)}`}
                activeBoxShadow={`0px 0px 1px 5px ${transparentize(0.6, colors.secondary)}`}
                offColor={shade(0.15, colors.main)}
                onColor={colors.secondary}
                onHandleColor={shade(0.15, colors.main)}
                id="material-switch"
            />
        </SwitchButtonStyled>
    );
};
