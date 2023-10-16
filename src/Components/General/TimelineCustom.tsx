import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChampagneGlasses,
  faChurch,
  faFlagCheckered,
  faMusic,
  faRing,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { type Itinerario } from '../../Data/types';

export default function TimelineCustom({
  itinerario,
}: {
  itinerario: Itinerario[];
}) {
  return (
    <Timeline
      position="alternate"
      className="mt-24 mb-4 bg-button w-[90%] m-auto rounded-xl"
    >
      <span className="m-auto mb-4 text-2xl">Esquema de la boda</span>
      {itinerario.map((item: any) => (
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {item.hora}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ bgcolor: '#EADBC8' }}>
              <FontAwesomeIcon
                icon={
                  item.icon === 'faChurch'
                    ? faChurch
                    : item.icon === 'faUtensils'
                    ? faUtensils
                    : item.icon === 'faChampagneGlasses'
                    ? faChampagneGlasses
                    : item.icon === 'faRing'
                    ? faRing
                    : item.icon === 'faMusic'
                    ? faMusic
                    : faFlagCheckered
                }
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ m: 'auto 0' }}>
            <Typography variant="h6" component="span">
              {item.title}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
