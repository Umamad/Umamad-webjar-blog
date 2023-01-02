import dynamic from "next/dynamic";
import Typography from "@mui/material/Typography";

const PageLayout = dynamic(() => import("../src/layouts/Page.layout"))

export default function Services() {
  return (
    <PageLayout>
      <Typography variant="h1" component="h1" textAlign="center">
        خدمات
      </Typography>
    </PageLayout>
  );
}
