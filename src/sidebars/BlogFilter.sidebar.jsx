import {
  Typography,
  FormGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

import BlogSidebarContainer from "../containers/BlogSidebar.container";
import CheckboxInput from "../inputs/Checkbox.input";

const BlogFilterSidebar = ({
  categories,
  loading,
  categoryValues,
  handleCategoriesChange,
}) => {
  return (
    <BlogSidebarContainer>
      <FormControl>
        <Typography variant="h5">دسته بندی</Typography>
        <FormGroup column>
          {!loading &&
            categories.map(({ _id, name }) => (
              <FormControlLabel
                value={categoryValues[_id]}
                onChange={handleCategoriesChange}
                name={_id}
                control={<CheckboxInput />}
                label={
                  <Typography fontSize={18} color="text.secondary">
                    {name}
                  </Typography>
                }
                labelPlacement="start"
                key={_id}
                sx={{ justifyContent: "space-between", m: 0 }}
              />
            ))}
        </FormGroup>
      </FormControl>
    </BlogSidebarContainer>
  );
};

export default BlogFilterSidebar;
