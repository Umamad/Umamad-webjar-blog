import dynamic from "next/dynamic";
import Typography from "@mui/material/Typography";

const PageLayout = dynamic(() => import("../src/layouts/Page.layout"));
const BlogView = dynamic(() => import("../src/views/Blog.view"));

export default function Blog() {
  return (
    <PageLayout>
      <Typography variant="h1" component="h1" textAlign="center" mb={8}>
        وبلاگ
      </Typography>
      <BlogView />
    </PageLayout>
  );
}
