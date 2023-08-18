import { Parallax } from 'react-parallax';
import ArrowDown from './ArrowDown';

const ImagePpal = () => {
  return (
    <Parallax
      bgImage="./fondo.png"
      strength={300}
      bgImageStyle={{
        width: '1450px',
        height: '100vh',
        position: 'absolute',
        maxWidth: 'none',
      }}
    >
      <div className="h-screen flex flex-col gap-20 justify-end items-center mb-8">
        <ArrowDown />
      </div>
    </Parallax>
  );
};

export default ImagePpal;
