import { Typography } from "@mui/material";

import PostListItem from "../listitems/Post.listItem";

const PostList = ({ posts, loading }) => {
  if (!loading)
    return (
      <>
        {posts.length > 0 ? (
          posts.map((post) => <PostListItem post={post} key={post._id} />)
        ) : (
          <Typography variant="h5" component="div" color="error.main">
            موردی یافت نشد!
          </Typography>
        )}
      </>
    );
};

export default PostList;
