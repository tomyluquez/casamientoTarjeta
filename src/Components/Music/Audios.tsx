import { Divider } from '@mui/material';

const AudioPlayer = () => {
  return (
    <>
      <div className="flex items-center justify-center my-4 audio-player">
        <audio controls>
          <source src="./asi.mp4" />
          <source src="./asi.mp3" />
          Tu navegador no soporta este tipo de <code>audio</code>.
        </audio>
      </div>
      <Divider className="w-full" />
    </>
  );
};

export default AudioPlayer;
