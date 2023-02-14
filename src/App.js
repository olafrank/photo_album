import React from 'react';
import { Typography, AppBar, Button, Box, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container, Toolbar } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';


const theme = createTheme();

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://olaportfolio.pages.dev/">
        O'TECHNOLOGIES
      </Link>{' '}

      {new Date().getFullYear()}
      {''}
    </Typography>
  );
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <AppBar position='relative'>
          <Toolbar>
            <PhotoCamera />
            <Typography variant='h6'>
              Photo Album
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Box sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }} >
            <Container maxWidth="sm"  >
              <Typography variant='h2' align='center' color="text.primary" gutterBottom>Photo Album</Typography>
              <Typography variant='h5' align='center' color="text.secondary" paragraph>This is a Photo Album,i am using this design to learn the implementation of material ui and how to make properly apply all the props</Typography>
              <Box sx={{ marginTop: '40px' }}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant='contained' color='primary'>
                      checkout photo
                    </Button>

                  </Grid>
                  <Grid item>
                    <Button variant='outlined' color='primary'>
                      secondary action
                    </Button>

                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
          <Container maxWidth="md" sx={{ p: '20px' }}>
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia sx={{ pt: '56.25%' }} image='https://source.unsplash.com/random'
                      title='imagetitle' />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant='h5' >heading</Typography>
                      <Typography>This is a media card you can use to describe the image content</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary'>view</Button>
                      <Button size='small' color='primary'>edit</Button>
                    </CardActions>

                  </Card>

                </Grid>

              ))}

            </Grid>

          </Container>
        </main>
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component='footer'>
          <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
          <Typography variant='subtitle1' align='center' color='text.secondary'>This an otechnologies designs</Typography>
          <Copyright />

        </Box>
      </>
    </ThemeProvider>
  );
}

export default App;
