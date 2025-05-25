import type { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';

type StoreLayoutProps = {
  children: ReactNode;
};

function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">🌿 PlantStore</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {children}
      </Container>

      <Box component="footer" sx={{ py: 3, textAlign: 'center', backgroundColor: 'primary.main', color: 'white' }}>
        <Typography variant="body2">© 2025 PlantStore. Todos os direitos reservados.</Typography>
      </Box>
    </>
  );
}

export default StoreLayout;
