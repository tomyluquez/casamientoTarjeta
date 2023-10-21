import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface props {
  onClick?: () => void;
  icon: IconDefinition;
  text: string;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonCustom = ({ onClick, icon, text, type }: props) => {
  return (
    <button
      type={type ? type : 'button'}
      onClick={onClick}
      className="bg-button px-4 py-2 text-black flex gap-2 items-center drop-shadow-2xl hover:scale-110 ease-out duration-300"
    >
      <FontAwesomeIcon icon={icon} />
      <p className="font-title text-xl">{text}</p>
    </button>
  );
};

export default ButtonCustom;
