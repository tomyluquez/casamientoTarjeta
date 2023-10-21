import ConfirmAssistance from './Components/Assistance/ConfirmAssistance';
import CountdownTimer from './Components/Count/Count/CountDowTimer';
import DateMain from './Components/Date/DateMain';
import ImagePpal from './Components/ImagePpal/ImagePpal';
import Music from './Components/Music/Music';
import SectionTarPre from './Components/Tarjets/SectionTarPre';
import OurPhotos from './Components/Photos/OurPhotos';
import Footer from './Components/Footer/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useState } from 'react';
import Success from './Components/General/Success';
import Audio from './Components/Music/Audio';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#F8F0E5',
    },
  },
});

export const alertContext = createContext({
  open: false,
  setOpen: (value: boolean) => {
    console.log(value);
  },
  text: '',
  setText: (value: string) => {
    console.log(value);
  },
});

function App() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  return (
    <ThemeProvider theme={theme}>
      <alertContext.Provider value={{ open, setOpen, text, setText }}>
        <Success />
        <ImagePpal />
        <CountdownTimer />
        <Audio />
        <DateMain />
        <ConfirmAssistance />
        <Music />
        <SectionTarPre />
        <OurPhotos />
        <Footer />
      </alertContext.Provider>
    </ThemeProvider>
  );
}

export default App;
