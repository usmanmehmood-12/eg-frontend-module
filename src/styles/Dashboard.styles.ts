import { deepOrange } from '@mui/material/colors';

export const styles = {
  container: {
    backgroundColor: '#fafafa',
    minHeight: '100vh',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    paddingY: 3,
  },
  title: {
    color: '#1976d2',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: '5px',
    borderBottom: '3px solid #1976d2',
    width: 'fit-content',
    marginX: 'auto',
  },
  cardContainer: {
    padding: 3,
  },
  card: {
    padding: 3,
    marginTop: 3,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 3,
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)',
    },
  },
  avatar: {
    backgroundColor: deepOrange[500],
    marginRight: 2,
  },
  greeting: {
    margin: 0,
    color: '#333',
    fontWeight: '500',
  },
  logoutButton: {
    borderColor: '#d32f2f',
    color: '#d32f2f',
    borderRadius: 2,
    '&:hover': {
      backgroundColor: '#d32f2f',
      color: 'white',
    },
  },
};
