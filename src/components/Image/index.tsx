import React from "react";
import earth from '../../assets/planet-earth.svg'
import { ImageContainer } from "./styles";

export const Image = () => (
    <ImageContainer>
        <img src={earth} alt='Planet Figure' />
    </ImageContainer>
)