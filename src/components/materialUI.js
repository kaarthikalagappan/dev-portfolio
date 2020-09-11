import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const MaterialUIProgressBar = withStyles(() => ({
    root: {
      height: 30,
      borderRadius: 3,
      maxWidth: '25em',
      marginTop: '15px',
      display: 'block',
      marginBottom: '15px',
      marginRight: '15px',
      marginLeft: '15px',
    },
    colorPrimary: {
      backgroundColor: '#2B2B2B',
    },
    bar: {
      borderRadius: 0,
      backgroundColor: '#7EC5E6',
    },
  }))(LinearProgress);

  export default MaterialUIProgressBar;