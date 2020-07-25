import styled from 'styled-components';

import headerBackground from '../../assets/photos/header/header_deeyks_c_scale,w_1391.jpg';

export const HeaderContainer = styled.header`
    background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
        url(${headerBackground});
    background-color: ${(props) => props.theme.colors.background1};
    background-size: cover;
    background-position: center top;
    width: auto;
    height: 100vh;
    position: relative;
    margin: 0;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    padding: 6rem 2.5rem;
`;

export const HeaderMessage = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    margin: 3.5rem 0;
    width: auto;
    max-height: 25rem;
`;
