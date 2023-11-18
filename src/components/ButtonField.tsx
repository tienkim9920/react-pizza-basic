import { IcSpinner } from 'icons/IcSpinner';
import { ReactNode } from 'react';

type Props = {
  loading?: boolean;
  children?: ReactNode;
  color?: 'main' | 'primary',
  onClick?: () => void;
}

const ButtonField = ({
  loading,
  children,
  color = 'main',
  onClick,
}: Props) => {
  return (
    <div className={`btn btn-${color}`} onClick={onClick && onClick}>
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
