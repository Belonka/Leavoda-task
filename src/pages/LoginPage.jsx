import React, {useState} from 'react';
 
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Paper,
  } from '@mui/material';



export default function LoginPage({onSubmit}) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
          onSubmit(username.trim());
        }
      };
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold' }}>
          Login
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          gutterBottom
          sx={{ mt: 2 }}
        >
          Welcome user, please enter your name to continue
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
