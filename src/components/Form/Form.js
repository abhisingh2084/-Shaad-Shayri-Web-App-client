import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import Lottie from "react-lottie";
import login from "../../images/login.json"

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';
import { Link } from 'react-router-dom';


const Form = ({ currentId, setCurrentId }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
};
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const [ifUserExist, setIfUserExist] = useState({})
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  useEffect(()=>{
    const data = localStorage.getItem('profile')
    setIfUserExist(data)
  },[ifUserExist])

  
  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      {ifUserExist==null ?
        <div style = {{padding : "10px"}}>
          <Typography variant="h6">SignIn First To Express Yourself.</Typography>
          <Lottie options={defaultOptions} height= {50} width = {200}/>
          <Link to = "/auth" style = {{textDecoration : "none"}}>
            <Button className={classes.buttonSubmit} style = {{marginTop : "20px"}} variant="contained" color="primary" size="medium" type="submit" fullWidth>Sign Here</Button>
          </Link>
        </div> : 
        <form autoComplete="off"  className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Ek शायरी Pesh किया जाए!'}</Typography>
        <TextField name="creator" variant="outlined" label="Shayar" required fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Sheerशक" required fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Kavita/शायरी" required fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="टैग/Tags (coma separated)" required fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>इरshaad</Button>
        <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>क्लिyar</Button>
      </form>
      }
      
    </Paper>
  );
};

export default Form;