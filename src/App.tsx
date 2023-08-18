import ConfirmAssistance from './Components/Assistance/ConfirmAssistance';
import CountdownTimer from './Components/Count/Count/CountDowTimer';
import DateMain from './Components/Date/DateMain';
import ImagePpal from './Components/ImagePpal/ImagePpal';
import Music from './Components/Music/Music';
import SectionTarPre from './Components/Tarjets/SectionTarPre';
import OurPhotos from './Components/Photos/OurPhotos';
import Footer from './Components/Footer/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#F8F0E5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ImagePpal />
      <CountdownTimer />
      <DateMain />
      <ConfirmAssistance />
      <Music />
      <SectionTarPre />
      <OurPhotos />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
