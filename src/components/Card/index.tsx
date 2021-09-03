import React from "react";
import { Container } from "./styles";

interface IProps {
    label: string,
    info: string
}

export const Card: React.FC<IProps> = ({label, info}) => (
    <Container>
        <label>{label}</label>
        <span>{info}</span>
    </Container>
)