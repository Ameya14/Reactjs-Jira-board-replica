import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Card.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "10px",
    border: "1px solid lightgrey",
    textAlign: "left"
  },
  media: {
    height: 140,
  },
});

function MediaCard(props) {
  const classes = useStyles();
  const priorityColor = (props.data.priority === "Low") ? "seagreen" : 
    (props.data.priority === "Medium" ? "goldenrod" : (props.data.priority === "High" ?
    "darkorange": "red")) 
  return (
    <Card className="cardRoot">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Owner: 
            <span style={{fontWeight: 600, color: "#3f51b5"}}> {props.data.assigned}</span>
          </Typography>
          <Typography style={{marginTop: "10px"}} variant="body2" color="textSecondary" component="p">
            <span style={{    
                backgroundColor: priorityColor,
                fontWeight: "bold",
                color: "white",
                padding: "5px",
                borderRadius: "5px"
            }}>{props.data.priority}</span>
          </Typography>
        </CardContent>
    </Card>
  );
}

export default MediaCard;