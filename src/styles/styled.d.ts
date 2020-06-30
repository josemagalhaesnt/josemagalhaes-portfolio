import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            main: string;

            background: string;
            text: string;
            icon: string;
        };
    }
}
