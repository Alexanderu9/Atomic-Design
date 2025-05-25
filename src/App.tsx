import { Button, Paper } from '@mui/material';
import './App.css';
import PlantCard from './components/molecules/molecules';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

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

  const [isEscureTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const atualTheme = isEscureTheme ? escuroTheme : claroTheme;

  return (
    <ThemeProvider theme={atualTheme}>
      <Paper
        style={{
          minHeight: '100vh',
          padding: '2rem',
          backgroundColor: atualTheme.palette.background.default,
        }}
        elevation={0}
      >
        <PlantCard
          buttonText="Comprar Planta"
          name="Planta"
          price={12.32}
          buttonVariant='primary'
          iconSize="lg"
          sx={{ color: 'green' }}
          id={1}
          light="shade"
        />
        <Button
          variant="contained"
          onClick={toggleTheme}
          color="secondary"
          sx={{ marginTop: '1rem' }}
        >
          Mudar Tema
        </Button>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

