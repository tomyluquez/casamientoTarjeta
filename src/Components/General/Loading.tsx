import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loading = () => {
  return (
    <div className="w-full bg-opacity-50 backdrop-blur-sm p-8 rounded-lg text-timer text-5xl h-screen fixed top-0 left-0 flex justify-center items-center z-[5000]">
      <FontAwesomeIcon icon={faCircleNotch} spin />
    </div>
  );
};

export default Loading;
