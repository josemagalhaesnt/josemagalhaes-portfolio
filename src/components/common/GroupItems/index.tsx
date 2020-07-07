import React, { ReactNode, ReactNodeArray } from 'react';
import styled, { css } from 'styled-components';

interface Props {
    size?: number;
    children: ReactNode | ReactNodeArray;
    spacing?: number;
}

const GroupItems: React.FC<Props> = ({ children, spacing }: Props) => {
    return <StyledGroupItems spacing={spacing}>{children}</StyledGroupItems>;
};

export const StyledGroupItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    /* ${({ spacing }: Props) =>
        spacing &&
        css`
            & > * {
                margin-right: ${spacing / 10}rem;
                margin-left: ;
            }
        `} */
`;

export default GroupItems;
