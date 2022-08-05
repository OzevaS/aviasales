import { Alert, Spin } from 'antd';
import React from 'react';

export interface IDataState {
  data: unknown[] | null;
  error: Error | null;
  loading: boolean;
  hasNotDataMessage: string;
}

const withStateData = (View: React.ElementType) => {
  return function Wrapper(props: IDataState) {
    const { data, error, loading, hasNotDataMessage } = props;

    const hasData = data && data.length > 0;
    const hasNotData = !error && !loading && data && data.length === 0;
    const hasError = error && !loading && data && data.length === 0;
    const hasLoading = loading && !data;

    return (
      <>
        {hasLoading && <Spin size="large" />}
        {hasError && <Alert message="Error" description={error.message} type="error" showIcon />}
        {hasData && <View data={data} />}
        {hasNotData && <Alert message={hasNotDataMessage} type="warning" showIcon />}
      </>
    );
  };
};

export default withStateData;
