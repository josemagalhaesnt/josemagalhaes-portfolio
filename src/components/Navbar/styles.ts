import styled from 'styled-components';

export const NavbarStyled = styled.nav`
    height: 60px;
    background: ${(props) => props.theme.colors.primary};
    font-size: 18px;
    color: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 30px;
`;
