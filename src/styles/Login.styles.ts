import backgroundImage from '../assets/eg-logo.jpg';

export const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
  },
  backgroundImageBox: {
    flex: 1,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  formBox: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    p: 2,
  },
  formCard: {
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 4,
    boxShadow: '0px 8px 24px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: 400,
  },
  avatar: {
    m: 1,
    width: 56,
    height: 56,
    background: 'linear-gradient(90deg, #F9A825 0%, #F57C00 50%, #D84315 100%)',
    color: 'white',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
  },
  title: {
    mt: 1,
    fontWeight: 'bold',
  },
  alert: {
    width: '100%',
    mt: 2,
  },
  button: {
    mt: 3,
    mb: 2,
    background: '#FF5722',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 2,
    '&:hover': {
      background: '#E64A19',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
    },
  },
  link: {
    mt: 2,
    textAlign: 'center',
  },
};
