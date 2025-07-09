
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../redux/slices/userSlice';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Divider,
  
} from '@mui/material';

export default function DashboardPage() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const userData = useSelector((state) => state.user.userData);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/users/${userId}`);
        const data = await res.json();
        dispatch(setUserData(data));
      } catch (err) {
        console.error( err);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [dispatch, userId]);

  if (!userData) {
    return <Typography align="center">Loading...</Typography>;;
  }
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Card elevation={4}>
        <CardContent>

          <Typography variant="h5" gutterBottom>
            Top info
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={3}>
              <Avatar
                src={userData.image}
                alt={userData.firstName}
                sx={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography variant="h6">
                {userData.firstName} {userData.lastName}
              </Typography>
              <Typography>Gender: {userData.gender === 'male' ? 'Чоловік' : 'Жінка'}</Typography>
              <Typography>Age: {userData.age} years</Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h5" gutterBottom>
            Address
          </Typography>
          <Typography>
            {userData.address.address}, {userData.address.city}, {userData.address.state}, {userData.address.postalCode}
          </Typography>

          <Divider sx={{ my: 3 }} />

          
          <Typography variant="h5" gutterBottom>
            Working place
          </Typography>
          <Typography>Company Name: {userData.company.name}</Typography>
          <Typography>Department: {userData.company.department}</Typography>
          <Typography>Job Title: {userData.company.title}</Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom>
            Contact information
          </Typography>
          <Typography>Name: {userData.firstName} {userData.lastName}</Typography>
          <Typography>Phone number: {userData.phone}</Typography>
          <Typography>Email: {userData.email}</Typography>

        </CardContent>
      </Card>
    </Container>
  )
}
