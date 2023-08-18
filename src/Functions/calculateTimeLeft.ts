import { differenceInSeconds } from "date-fns";
import {type TimeInfo} from "../Data/types";


export function calculateTimeLeft(target: Date | number) : TimeInfo[] {
  const now = new Date();
  const diff = differenceInSeconds(target, now);

  const days = Math.floor(diff / (60 * 60 * 24));
  const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((diff % (60 * 60)) / 60);
  const seconds = diff % 60;

  return [
    {
      time: days,
      title: "Dias",
    },
    {
      time: hours,
      title: "Horas",
    },
    {
      time: minutes,
      title: "Minutos",
    },
    {
      time: seconds,
      title: "Segundos",
    },
  ];
}
