import React, {useState} from 'react';
 
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Paper,
  } from '@mui/material';
  import { useDispatch } from 'react-redux';
  import { login } from '../redux/slices/authSlice';
  import { useNavigate } from 'react-router-dom';


export default function LoginPage() {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!username.trim()) return;

        try {
            const res = await fetch(`https://dummyjson.com/users/filter?key=username&value=${username}`)
            const data = await res.json()
            const user = data.users?.[0]

            if(user) {
                dispatch(login(user.id));
                navigate('/dashboard')
            }else{
                alert('User not found')
            }
        }catch(err) {
            console.log(err)
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
