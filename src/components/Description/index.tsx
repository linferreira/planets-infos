import React from "react";
import { Paragraph, Source, Wrapper } from "./styles";
import Icon from "../../assets/icon-source.svg"

interface IProps {
    text: string
}

export const Description: React.FC<IProps> = ({text}) => (
    <Wrapper>
        <Paragraph>
            {text}
        </Paragraph>
        <Source>
            Fonte: <a href="#">Site <img src={Icon}/> </a>
        </Source>
    </Wrapper>
)