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
            Fonte: <a href="https://www.google.com/">Site <img src={Icon} alt='Source Figure'/> </a>
        </Source>
    </Wrapper>
)