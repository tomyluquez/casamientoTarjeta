import { Divider } from '@mui/material';

const AudioPlayer = () => {
  return (
    <>
      <div className="flex items-center justify-center my-4 audio-player">
        <audio controls>
          <source src="./asi.mp3" type="audio/mpeg" />
        </audio>
      </div>
      <Divider className="w-full" />
    </>
  );
};

export default AudioPlayer;
