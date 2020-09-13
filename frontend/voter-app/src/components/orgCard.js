import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function orgCard(props) {
  const classes = useStyles;

  return (
    <Card style={{ maxWidth: 340 }}>
      <CardActionArea>
        <CardMedia
          style={{ height: 140 }}
          image={props.picture}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={props.signUpLink}
          target="_blank"
          onClick={() => {}}
        >
          Sign Up
        </Button>
        <Button
          size="small"
          color="primary"
          href={props.learnMoreLink}
          target="_blank"
          onClick={() => {}}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
