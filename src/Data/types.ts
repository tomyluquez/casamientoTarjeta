import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ReactElement } from "react";

export interface TypeofCeremoni{
    type: string;
    date: string;
    hours: string;
    place: string;
    city: string;
    image: string;
    address: string;
}

export interface TypeofPhotos{
    image: string;
    id: number;
}

export interface TimeInfo {
    time: number;
    title: string;
  }

export interface PropsSectionText {
      description: string
      buttonText: string
      iconText: IconDefinition
      titleModal: string
      textModal: string
      form? : string
}