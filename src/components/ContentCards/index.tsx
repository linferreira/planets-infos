import React from "react";
import { Card } from "../Card";
import { Container } from "./styles";

export const ContentCards: React.FC = () => (
  <Container>
    <Card label='Tempo de Rotação' info='0.99 days' />
    <Card label='Tempo de Translação' info='365.26 days' />
    <Card label='Raio' info='6,371 km' />
    <Card label='Temperatura Média' info='16°C' />
  </Container>
);
