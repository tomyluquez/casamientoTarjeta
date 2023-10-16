import { Parallax } from 'react-parallax';
import ArrowDown from './ArrowDown';

const ImagePpal = () => {
  return (
    <Parallax
      bgImage={'portadaUs.webp'}
      strength={300}
      bgImageStyle={{
        width: '350px',
        height: '100%',
        maxWidth: 'none',
      }}
    >
      <div className="h-[90vh] flex flex-col gap-20 justify-end items-center mb-8">
        <div className="text-white absolute bottom-[5px] left-[30px] flex flex-col">
          <h1 className="text-5xl font-title">Celi y Tomi</h1>
          <p className="self-end">¡ Nos casamos !</p>
        </div>

        <ArrowDown />
      </div>
    </Parallax>
  );
};

export default ImagePpal;
