import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface PasswordToggleIconProps {
  isPassword: boolean;
  onClick: () => void;
}

const PasswordToggleIcon = ({
  isPassword,
  onClick,
}: PasswordToggleIconProps) => {
  const classNames =
    'flex items-center justify-center h-full aspect-square cursor-pointer';

  return isPassword ? (
    <div className={classNames}>
      <FaEye onClick={onClick} />
    </div>
  ) : (
    <div className={classNames}>
      <FaEyeSlash onClick={onClick} />
    </div>
  );
};

export { PasswordToggleIcon };
