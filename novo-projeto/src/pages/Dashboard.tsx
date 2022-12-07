import Button from '@mui/material/Button';
import '@fontsource/roboto/500.css';
import { TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
<meta name="viewport" content="initial-scale=1, width=device-width" />

const theme = createTheme({
  palette: {
    primary: blue,
    background: {
      /* default: ""  cor de fundo */
    },
    text: {
     /* primary: ""  cor dos textos */
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

export default function Dashboard(){

  return (
        <ThemeProvider theme={theme}>
          <Container component='main' maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 22,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h1>dashboard</h1>
            </Box>
            
          </Container>
        </ThemeProvider>
  );
}




