import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
const Audio = () => {
  const asi = `${window.location.origin}/asi.mp3`;
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
