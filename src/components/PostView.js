import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import parse from 'html-react-parser';

const PostView = () => {

  const urlRestApi = 'https://comunitics.com/wp-json/wp/v2/posts'
  const [posts, setPosts] = useState([]);
  const [posts1, setPosts1] = useState([]);
  const [posts2, setPosts2] = useState([]);
  const [posts3, setPosts3] = useState([]);
  const [posts4, setPosts4] = useState([]);
  const [posts5, setPosts5] = useState([]);
  const [posts6, setPosts6] = useState([]);
  const [posts7, setPosts7] = useState([]);
  const [posts8, setPosts8] = useState([]);
  const [posts9, setPosts9] = useState([]);
  useEffect(() => {
    async function loadPosts() {
      const res = await fetch(`${urlRestApi}`);
      // const rem = res.replace("<p>" ,"");
      const posts = await res.json();
      setPosts(posts[0]);
      setPosts1(posts[1]);
      setPosts2(posts[2]);
      setPosts3(posts[3]);
      setPosts4(posts[4]);
      setPosts5(posts[5]);
      setPosts6(posts[6]);
      setPosts7(posts[7]);
      setPosts8(posts[8]);
      setPosts9(posts[9]);
    }
    loadPosts();
    console.log(posts);
    // posts
  }, []);

  return (
    <Fragment>
     
    {/* {parse(posts5.content.rendered)}  */}
     
    </Fragment>
  );
};

export default PostView;
