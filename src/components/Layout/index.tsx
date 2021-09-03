import React from "react";
import { ContentInfos } from "../ContentInfos";
import { MainHeader } from "../MainHeader";
import { Image } from "../Image";
import { Grid } from "./styles";
import { ContentCards } from "../ContentCards";

const Layout: React.FC = () => (
  <Grid>
    <MainHeader />
    <Image />
    <ContentInfos />
    <ContentCards />
  </Grid>
);

export default Layout;
