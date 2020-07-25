import styled from 'styled-components';
import { shade } from 'polished';

export const NavbarStyled = styled.nav`
    height: 60px;
    background: ${(props) => shade(0.15, props.theme.colors.background1)};
    font-size: 18px;
    color: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 30px;
`;
