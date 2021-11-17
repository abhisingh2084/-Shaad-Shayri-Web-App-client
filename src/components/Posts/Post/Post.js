import React,{useState, useEffect} from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import {deletePost,likePost} from '../../../actions/posts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {

  const dispatch = useDispatch();
  const classes = useStyles();
  const [ifUserExist, setIfUserExist] = useState({})

  useEffect(()=>{
    const data = localStorage.getItem('profile')
    setIfUserExist(data)
  },[ifUserExist])

  return (
    <Card className={classes.card}>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() =>{
           ifUserExist===null ? toast.error("Please SignIn First"):
          setCurrentId(post._id)
          }}><CreateIcon fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() =>{
          ifUserExist===null ? toast.error("Please SignIn First"):
          dispatch(likePost(post._id))
          }}><ThumbUpAltIcon fontSize="small" color = "inherit"/> Like {post.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => {
           ifUserExist===null ? toast.error("Please SignIn First"):
          dispatch(deletePost(post._id))
          }}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Post;