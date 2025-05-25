import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { Button, CssBaseline } from '@mui/material';
import PlantStore from './pages/PlantStore';

function App() {
  const claroTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#e1d1c8',
        paper: '#c2a39a',
      },
      primary: {
        main: '#c2a39a',
      },
      secondary: {
        main: '#6d4c41',
      },
    },
  });

  const escuroTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#0a3007',
        paper: '#001600',
      },
      primary: {
        main: '#0a3007',
      },
      secondary: {
        main: '#4caf50',
      },
    },
  });

  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = isDark ? escuroTheme : claroTheme;

  return (
    <div className='bordes'>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PlantStore />
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Button onClick={toggleTheme} variant="contained" color="secondary">
          Mudar Tema
        </Button>
      </div>
    </ThemeProvider>
    </div>
  );
}

export default App