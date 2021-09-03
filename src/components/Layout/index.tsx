import React from "react";
import { MainHeader } from "../MainHeader";
import {Grid} from "./styles";

const Layout: React.FC = ({ children }) => (
  <Grid>
    <MainHeader/>
    {children}
  </Grid>
);

export default Layout;
