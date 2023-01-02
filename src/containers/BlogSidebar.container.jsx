import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const BlogSidebarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  borderRadius: `${theme.shape.borderRadius} 0 0 ${theme.shape.borderRadius}`,
  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.1)",
  padding: '30px 10px',
  position: 'sticky',
  top: 10,
  "& > div > h5": {
    marginBottom: 30,
  },
  '& > div > div':{
    maxHeight: 380,
    overflowX: 'auto',
    flexWrap: 'nowrap'
  }
}));

export default BlogSidebarContainer;
