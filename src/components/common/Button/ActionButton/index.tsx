import React, { ReactNode, ReactNodeArray, ReactElement } from 'react';

import { Container } from './styles';

interface Props {
    primary?: boolean;
    children: ReactNode | ReactNodeArray;
    link: string;
}

const ActionButton: React.FC<Props> = ({ primary, children, link }: Props): ReactElement => {
    return (
        <Container primary={primary}>
            <a href={link}>{children}</a>
        </Container>
    );
};

export default ActionButton;
