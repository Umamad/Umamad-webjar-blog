import { useState, useEffect } from "react";

import { Grid } from "@mui/material";

import useFetchBlogPageData from "../../hooks/useFetchBlogPageData";

import SearchInput from "../inputs/Search.input";
import BlogFilterSidebar from "../sidebars/BlogFilter.sidebar";
import PostList from "../lists/Post.list";

const BlogView = () => {
  const {
    loading,
    categories,
    posts,
    categoryValues,
    handleCategoriesChange,
    filterDataHandler,
  } = useFetchBlogPageData();

  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(null);

  const handleSearchValueChange = (e) => setSearchValue(e.target.value);

  useEffect(() => {
    filterDataHandler(searchValue, setFilteredData);
  }, [categoryValues, searchValue]);

  return (
    <Grid container>
      <SearchInput
        placeholder="جستجو کنید ..."
        value={searchValue}
        onChange={handleSearchValueChange}
        sx={{ maxWidth: 760, mx: "auto", mb: 9 }}
      />
      <Grid container>
        <Grid item xs={3}>
          <BlogFilterSidebar
            categories={categories.data}
            loading={loading}
            categoryValues={categoryValues}
            handleCategoriesChange={handleCategoriesChange}
          />
        </Grid>
        <Grid container item flexDirection="row" rowGap="100px" pr={8} pb={5} xs={9}>
          <PostList
            posts={filteredData ? filteredData : posts.data}
            loading={loading}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BlogView;
