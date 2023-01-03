import { Typography, Grid } from "@mui/material";

import PostListItem from "../listitems/Post.listItem";
// import PrimaryButton from "../buttons/Primary.buttons";

// import divider from "../../utils/divider";

const PostList = ({ posts, loading }) => {
  if (!loading) {
    // const separatedPosts = divider(10, posts);
    // console.log(separatedPosts);
    return (
      <>
        {posts.length > 0 ? (
          posts.map((post) => <PostListItem post={post} key={post._id} />)
        ) : (
          <Typography variant="h5" component="div" color="error.main">
            موردی یافت نشد!
          </Typography>
        )}

        {/* <Grid container flexWrap='nowrap'>
          <PrimaryButton variant="outlined">
            
          </PrimaryButton>
        </Grid> */}
      </>
    );
  }
};

export default PostList;
