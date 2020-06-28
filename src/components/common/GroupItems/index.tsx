import React, { ReactNode, ReactNodeArray } from 'react';

import { Container } from './styles';

interface Props {
    size?: number;
    children: ReactNode | ReactNodeArray;
}

const GroupItems: React.FC<Props> = ({ children }: Props) => {
    return <Container>{children}</Container>;
};

export default GroupItems;
