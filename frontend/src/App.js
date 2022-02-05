import { Box, makeStyles } from '@material-ui/core';
// components
import Header from './components/Header.jsx'
import InfoHeader from './components/InfoHeader.jsx';
import Articles from './components/Articles.jsx';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 110,
    width: '59%',
    // center align from left right
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      width: '75%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '85%'
    }
  }
}))
function App() {
  const classes = useStyles();
  return (
    <Box>
      {/* making componenets */}
      <Header />
      <Box className={classes.container}>
        <InfoHeader />
        <Articles />
      </Box>
    </Box>
  );
}

export default App;
