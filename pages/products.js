import dynamic from "next/dynamic";
import Typography from "@mui/material/Typography";

const PageLayout = dynamic(() => import("../src/layouts/Page.layout"))

export default function Products() {
  return (
    <PageLayout>
      <Typography variant="h1" component="h1" textAlign="center">
        محصولات
      </Typography>
    </PageLayout>
  );
}
