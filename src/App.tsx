import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';
import TextField from '@mui/material/TextField';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    setEmailError(email === '');
    setPasswordError(password === '');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #8ED1FC, #3A7ADB)',
      }}
    >
      <Paper sx={{ padding: 2, maxWidth: 800 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <LockOutlinedIcon sx={{ fontSize: 80, color: '#FFF', opacity: 0.5, marginBottom: 2 }} />
            <Typography variant="body2" component="div" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: 1, borderRadius: 1, backdropFilter: 'blur(5px)', maxWidth: 200 }}>
            <LockOutlinedIcon sx={{ fontSize: 30, marginRight: 2 }} />
              Digital platform for distance learning.
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                Hey, Hello
                <LockOutlinedIcon sx={{ fontSize: 30, marginRight: 2 }} />
              </span>
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    fullWidth
                    variant="outlined"
                    value={email}
                    error={emailError}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                      startAdornment: <EmailOutlinedIcon sx={{ color: '#6F7E8C', marginRight: 1 }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={password}
                    error={passwordError}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      startAdornment: <LockOutlinedIcon sx={{ color: '#6F7E8C', marginRight: 1 }} />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <FormControlLabel control={<Checkbox />} label="Remember me" sx={{ color: '#6F7E8C', marginRight: 1 }} />
                  <Typography variant="body2" sx={{ color: '#6F7E8C' }}>
                    Forgot password?
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth onClick={handleLogin}>
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
            <Divider sx={{ margin: '12px 0' }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#6F7E8C',
                  backgroundColor: '#FFF',
                  padding: '0 8px',
                }}
              >
                or
              </Typography>
            </Divider>
            <Button variant="outlined" fullWidth startIcon={<GoogleIcon />} sx={{ borderColor: '#000', color: '#000' }}>
              Sign in with Google
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default App;
