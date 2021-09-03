import React from "react";
import { Content } from "../Content";
import { MainHeader } from "../MainHeader";
import { Image } from "../Image";
import {Grid} from "./styles";

const Layout: React.FC = () => (
  <Grid>
    <MainHeader/>
    <Image />
    <Content />
  </Grid>
);

export default Layout;
