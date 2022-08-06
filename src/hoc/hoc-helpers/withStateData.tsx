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

    let styleView = {};
    if (loading)
      styleView = {
        opacity: 0.6,
      };

    return (
      <>
        {loading && <Spin size="large" />}
        {error && <Alert message="Error" description={error.message} type="error" showIcon />}
        {hasNotData && <Alert message={hasNotDataMessage} type="warning" showIcon />}
        {hasData && <View data={data} style={styleView} />}
      </>
    );
  };
};

export default withStateData;
