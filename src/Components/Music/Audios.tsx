import { Divider } from '@mui/material';

const AudioPlayer = () => {
  return (
    <>
      <div className="flex items-center justify-center my-4 audio-player">
        <audio controls preload="none" loop>
          <source src="./asi.mp3" type="audio/mpeg" />
          Your browser does not support the <code>audio</code> element.
        </audio>
      </div>
      <Divider className="w-full" />
    </>
  );
};

export default AudioPlayer;
