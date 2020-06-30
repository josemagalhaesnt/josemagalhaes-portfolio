import React, { ReactElement, ReactNodeArray, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
    primary?: boolean;
    children: ReactNode | ReactNodeArray;
}

const StyledButton = styled.button`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.2rem;
    margin: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${(props) => props.theme.colors.background};
    border-radius: 3px;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);

    ${({ primary }: Props) =>
        primary &&
        css`
            background-color: ${(props) => props.theme.colors.primary};
            color: white;
        `}
`;

const StyledButtonRounded = styled(StyledButton)`
    border-radius: 100%;
`;

const Button: React.FC<Props> = ({ primary, children }: Props): ReactElement => {
    return <StyledButton primary={primary}>{children}</StyledButton>;
};

const ButtonRounded: React.FC<Props> = ({ primary, children }: Props): ReactElement => {
    return <StyledButtonRounded primary={primary}>{children}</StyledButtonRounded>;
};

export { Button, ButtonRounded };