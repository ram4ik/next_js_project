import { useEffect } from 'react';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import { themeDark, themeLight } from 'lib/theme';

export default function MyApp({ Component, pageProps}) {
    useEffect(() => {
        const jsStyles = document.querySelector('#jss-server-side');
        if (jsStyles && jsStyles.parentNode) {
            jsStyles.parentNode.removeChild(jsStyles);
        }
    }, [])

    return ( 
        <ThemeProvider theme={false ? themeDark : themeLight}>
            <CssBaseline />
            <Component {...pageProps} /> 
        </ThemeProvider>
        
    )
}
