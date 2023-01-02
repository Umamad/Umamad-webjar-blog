import Image from "next/image";

import { Grid, Breadcrumbs } from "@mui/material";

import MainBreadcrumbLink from "../links/MainBreadcrumb.link";

import ChevronLeft from "../../public/images/icons/Vector.svg";

export default function MainBreadcrumb({ routeList }) {
  return (
    <Grid container role="presentation" mt={5} mb={10}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<Image src={ChevronLeft} alt="separator" />}
      >
        {routeList.map(({ label, href }, idx) => (
          <MainBreadcrumbLink
            href={href}
            current={idx === routeList.length - 1 ? 1 : 0}
          >
            {label}
          </MainBreadcrumbLink>
        ))}
      </Breadcrumbs>
    </Grid>
  );
}
