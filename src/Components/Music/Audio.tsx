import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import asi from '/asi.mp3';
const Audio = () => {
  return (
    <div>
      <AudioPlayer
        autoPlay={true}
        loop={true}
        src={asi}
        showJumpControls={false}
        autoPlayAfterSrcChange={false}
      />
    </div>
  );
};

export default Audio;
