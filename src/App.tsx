import React, { ReactElement } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faCheckSquare,
    faCoffee,
    faSun,
    faMoon,
    faUserTie,
    faBriefcase,
    faFolderOpen,
    faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Icon } from './components/common/Icon/index';
import AppBar from './components/AppBar';
import ActionButton from './components/common/Button/ActionButton';

const App = (): ReactElement => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);
    library.add(fab, faCheckSquare, faCoffee, faSun, faMoon, faUserTie, faBriefcase, faFolderOpen, faInfoCircle);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <GlobalStyle />
                <Navbar toggleTheme={toggleTheme} />
                <Header />
                <AppBar>
                    <ActionButton link="#about" size={25} transparent>
                        <Icon size="2x" prefix="fas" icon="user-tie" />
                    </ActionButton>
                    <ActionButton link="#experience" size={25} transparent>
                        <Icon size="2x" prefix="fas" icon="briefcase" />
                    </ActionButton>
                    <ActionButton link="#portfolio" size={25} transparent>
                        <Icon size="2x" prefix="fas" icon="folder-open" />
                    </ActionButton>
                    <ActionButton link="#contact" size={25} transparent>
                        <Icon size="2x" prefix="fas" icon="info-circle" />
                    </ActionButton>
                </AppBar>
            </div>
        </ThemeProvider>
    );
};

export default App;
