import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
const Audio = () => {
  return (
    <div>
      <AudioPlayer
        autoPlay={true}
        loop={true}
        src="./asi.mp3"
        onPlay={(e) => console.log(e)}
        onPause={(e) => console.log(e)}
        showJumpControls={false}
        autoPlayAfterSrcChange={false}
      />
    </div>
  );
};

export default Audio;
