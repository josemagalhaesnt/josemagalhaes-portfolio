import React, { ReactElement } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';
import Header from './components/Header';

const App = (): ReactElement => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);
    library.add(fab, faCheckSquare, faCoffee, faSun, faMoon);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <GlobalStyle />
                <Navbar toggleTheme={toggleTheme} />
                <Header />
            </div>
        </ThemeProvider>
    );
};

export default App;
