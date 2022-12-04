import * as React from 'react';
import '@fontsource/roboto/500.css';
import { TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
<meta name="viewport" content="initial-scale=1, width=device-width" />

const theme = createTheme({
  palette: {
    primary: blue,
    background: {
      default: "" /* cor de fundo */
    },
    text: {
     primary: "" /* cor dos textos */
    },
  },

  typography: {
    h1: {
      fontSize: 40,
      color: 'white',
      textAlign: 'center'

    }
  }
})

export const App = () => {

  return (
      <BrowserRouter>
      <AppRoutes />
        <ThemeProvider theme={theme}>
          <Container component='main' maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* icone que é importado em VpnKeyRoundedIcon */}
              <Avatar sx={{ m: 1, bgcolor: 'blueviolet' }}>
                <VpnKeyRoundedIcon />  
              </Avatar>
              <Typography component={'h1'} variant={'h5'} textAlign={'center'}>
                Tela de login usando ReactJS, Material UI e Typescript :)
              </Typography>
              <Box component={'form'} sx={{ mt: 1 }} >
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Endereço de Email'
                  name='email'
                  autoFocus
                />
                <TextField 
                margin='normal'
                required
                fullWidth /* pra deixar o input ocupar toda a box */
                label='Senha'
                type={'password'}
                id='password'
                />
                <FormControlLabel 
                control={<Checkbox value='lembrar-me' color='primary'/>}
                label='lembrar-me'
                />

                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Esqueceu a senha?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant='body2'>
                    {"Criar conta"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
  );
}




