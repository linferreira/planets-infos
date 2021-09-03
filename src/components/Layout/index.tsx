import React from "react";
import { Content } from "../Content";
import { MainHeader } from "../MainHeader";
import {Grid} from "./styles";

const Layout: React.FC = () => (
  <Grid>
    <MainHeader/>
    <Content />
  </Grid>
);

export default Layout;
