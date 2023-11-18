import SpinnerLoad from "components/SpinnerLoad";
import { ReactElement } from "react";

type Props = {
  loading?: boolean;
  children?: ReactElement;
};

const LoadingLayout = ({
  loading,
  children
}: Props) => {
  return (
    <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto' }}>
      {
        loading && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <SpinnerLoad />
          </div>
        )
      }
      {
        !loading && children
      }
    </div>
  );
};

export default LoadingLayout;
