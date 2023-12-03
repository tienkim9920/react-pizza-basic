import { IcSpinner } from 'icons/IcSpinner';
import { ReactNode } from 'react';

type Props = {
  loading?: boolean;
  children?: ReactNode;
  color?: 'main' | 'primary',
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonField = ({
  loading,
  children,
  color = 'main',
  onClick,
  disabled,
}: Props) => {
  const handleOnClick = () => {
    if (disabled) return;
    onClick && onClick();
  }

  return (
    <div className={`btn btn-${color} ${disabled ? 'disabled' : ''}`} onClick={handleOnClick}>
      {!loading
        ? children
        : <div style={{ display: 'flex', alignItems: 'center', columnGap: '.5rem', color: '#fff'}}>
          <IcSpinner width='28px' height='28px' />
          {children}
        </div>
      }
    </div>
  )
};

export default ButtonField;
