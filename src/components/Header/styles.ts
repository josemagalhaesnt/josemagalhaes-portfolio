import styled from 'styled-components';

import headerBackground from '../../assets/photos/header.jpg';

export const HeaderContainer = styled.header`
    background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
        url(${headerBackground});
    background-color: ${(props) => props.theme.colors.secondary};
    background-size: cover;
    background-position: center;
    width: auto;
    height: 100vh;
    position: relative;
    margin: 0;
`;

export const HeaderMessage = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    width: auto;
    height: 25rem;
`;
