import { IcSpinner } from 'icons/IcSpinner';
import { ReactNode } from 'react';

type Props = {
  loading?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const ButtonField = ({
  loading,
  children,
  onClick,
}: Props) => {
  return (
    <div className="btn-main" onClick={onClick && onClick}>
      {!loading
        ? children
        : <div style={{ display: 'flex', alignItems: 'center', columnGap: '.5rem', color: '#fff'}}>
          <IcSpinner width='32px' height='32px' />
          {children}
        </div>
      }
    </div>
  )
};

export default ButtonField;
