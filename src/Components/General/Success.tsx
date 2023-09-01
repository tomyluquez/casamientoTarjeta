import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect } from 'react';
import { alertContext } from '../../App';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Success = () => {
  const { open, setOpen, text } = useContext(alertContext);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  }, [open]);

  return (
    <div
      className={`bg-button border-2 border-white p-4 w-[80%] tablet:w-[30%] rounded-lg fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        open ? 'alert-success' : 'alert-closed'
      }`}
    >
      <div className="flex items-center justify-start gap-4">
        <FontAwesomeIcon icon={faHeart} bounce />
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Success;
