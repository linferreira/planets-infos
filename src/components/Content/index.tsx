import React from "react";
import { Description } from "../Description";
import { Title } from "../Title";
import { Container } from "./styles";

export const Content: React.FC = () => (
  <Container>
    <Title text="Loren" />
    <Description
      text=" Third Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic asperiores dolore voluptatem accusamus dolorum consequuntur totam illo tempore, optio harum doloribus laborum sit sint quod distinctio nihil ab iure."
    />
  </Container>
);
