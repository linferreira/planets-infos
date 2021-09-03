import React from "react";
import { Group } from "./styles";

export const RadioGroup = () => (
  <Group>
    <input
      type="radio"
      id="radioOverview"
      name="radioButton"
      value="overview"
      checked
    />
    <label htmlFor="radioApple"><span>01</span> OVERVIEW</label>

    <input
      type="radio"
      id="radioStructure"
      name="radioButton"
      value="structure"
    />
    <label htmlFor="radioBanana"><span>02</span> INTERNAL STRUCTURE</label>

    <input type="radio" id="radioSurface" name="radioButton" value="surface" />
    <label htmlFor="radioOrange"><span>03</span> SURFACE GEOLOGY</label>
  </Group>
);
