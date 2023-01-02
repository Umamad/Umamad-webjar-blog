import { useState, useEffect, useCallback } from "react";

import useGetApi from "./useGetApi";

function useFetchBlogPageData() {
  const categories = useGetApi("/post-categories");
  const posts = useGetApi("/posts");

  const [categoryValues, setCategoryValues] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categories.loading && !posts.loading) setLoading(false);
    if (categories.data) {
      const tempCategoryValues = {};
      categories.data.forEach(({ _id }) => {
        tempCategoryValues[_id] = false;
      });
      setCategoryValues(tempCategoryValues);
    }
  }, [categories.loading, posts.loading]);

  const handleCategoriesChange = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    setCategoryValues({ ...categoryValues, [name]: checked });
  }

  function filterDataHandler(searchValue, setFilteredData) {
    let isCategoryInvolves = false;
    const trueCategoryKeys = [];

    for (const name in categoryValues) {
      if (categoryValues[name]) {
        isCategoryInvolves = true;
        trueCategoryKeys.push(name);
      }
    }

    if (!searchValue && !isCategoryInvolves && trueCategoryKeys.length === 0) {
      setFilteredData(null);
      return;
    }

    const filtered = posts.data.filter(({ title, category }) => {
      if (isCategoryInvolves) {
        trueCategoryKeys.forEach((key) => {
          if (
            (searchValue
              ? title.toLowerCase().includes(searchValue.toLocaleLowerCase())
              : true) &&
            category === key
          )
            return true;
          return false;
        });
      } else {
        if (title.toLowerCase().includes(searchValue.toLocaleLowerCase()))
          return true;
        return false;
      }
    });

    setFilteredData(filtered);
  }

  return {
    categories,
    posts,
    loading,
    categoryValues,
    handleCategoriesChange,
    filterDataHandler,
  };
}

export default useFetchBlogPageData;
