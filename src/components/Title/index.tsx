import React from 'react'
import {Text } from './styles'

interface IProps {
    text: string
}

export const Title: React.FC<IProps> = ({text}) => (
    <Text>{text}</Text>
)