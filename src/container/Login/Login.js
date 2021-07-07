import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useDispatch } from 'react-redux';
import * as action from "../../store/actions/taskAction";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      textAlign: "center"
    },
  },
  header: {
      textAlign: "center",
      color: "grey"
  },
  paper: {
    width: "500px",
    height: "250px",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    padding: "20px 30px 20px 20px"
  },
  textField: {
      width: "100%",
      textAlign: "center",
  },
  button: {
    width: "50%",
    marginTop: "15px",
    textAlign: "center"
  },
  title: {
    textAlign: "center",
    marginTop: "75px",
    fontSize: "35px",
    color: "#3f51b5"
  }
}));

function Login(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const handleLogin = () => {
        localStorage.setItem("isLoggedIn", true);
        dispatch(action.loginAct());
    }
    return (
        <>
        <h2 className={classes.title}>JIRA</h2>
        <Paper className={classes.paper} elevation={3}>
            <h3 className={classes.header}> Login </h3>
            <form style={{textAlign: "center"}} className={classes.root} noValidate autoComplete="off">
              <TextField fullWidth className={classes.textField} id="email" label="Email ID" />
              <TextField fullWidth className={classes.textField} id="password" label="Password" />
              <Button onClick={handleLogin} className={classes.button} variant="contained" color="primary">
                Login
              </Button>
            </form>
        </Paper>
        </>
    );
}

export default Login;