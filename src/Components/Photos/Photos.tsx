import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ModalProps, TypeofPhotos } from '../../Data/types';
import ourPhotosJson from '../../Data/ourPhotos.json';

const Photos = ({ setOpen }: ModalProps) => {
  const itemData: TypeofPhotos[] = ourPhotosJson.data.map((photo) => photo);
  return (
    <ImageList
      className="w-full tablet:w-[60%]"
      variant="woven"
      cols={3}
      gap={8}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={item.image}
            loading="lazy"
            className="drop-shadow-2xl cursor-zoom-in"
            onClick={() => setOpen(item.id)}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Photos;
