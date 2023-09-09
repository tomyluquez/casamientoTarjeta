import { Parallax } from 'react-parallax';
import ArrowDown from './ArrowDown';
import { useEffect, useState } from 'react';

const ImagePpal = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  return (
    <Parallax
      bgImage={isMobile ? './portadaUs.jpg' : 'portada.png'}
      strength={300}
      bgImageStyle={{
        width: isMobile ? '350px' : 'auto',
        height: '100%',
        maxWidth: 'none',
      }}
    >
      <div className="h-[90vh] flex flex-col gap-20 justify-end items-center mb-8">
        {isMobile && (
          <div className="text-white absolute bottom-[5px] left-[30px] flex flex-col">
            <h1 className="text-5xl font-title">Celi y Tomi</h1>
            <p className="self-end">¡ Nos casamos !</p>
          </div>
        )}
        <ArrowDown />
      </div>
    </Parallax>
  );
};

export default ImagePpal;
