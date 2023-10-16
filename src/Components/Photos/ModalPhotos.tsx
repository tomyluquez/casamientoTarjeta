import { Modal } from '@mui/material';
import { ModalProps } from '../../Data/types';
import ourPhoto1 from '/our1.webp';
import ourPhoto2 from '/our2.webp';
import ourPhoto3 from '/our3.webp';
import ourPhoto4 from '/our4.webp';
import ourPhoto5 from '/our5.webp';
import ourPhoto6 from '/our6.webp';
import ourPhoto7 from '/our7.webp';
import ourPhoto8 from '/our8.webp';
import ourPhoto9 from '/our9.webp';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalPhotos = ({ open, setOpen }: ModalProps) => {
  const handleClose = () => setOpen(false);
  const modalOpen = Boolean(open);
  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <div className="w-[90%] h-[90%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src={
            open === 1
              ? ourPhoto1
              : open === 2
              ? ourPhoto2
              : open === 3
              ? ourPhoto3
              : open === 4
              ? ourPhoto4
              : open === 5
              ? ourPhoto5
              : open === 6
              ? ourPhoto6
              : open === 7
              ? ourPhoto7
              : open === 8
              ? ourPhoto8
              : ourPhoto9
          }
          alt="foto nuestra"
          className="object-cover w-full h-full"
        />
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute top-4 right-4 cursor-pointer"
          onClick={handleClose}
        />
      </div>
    </Modal>
  );
};

export default ModalPhotos;
