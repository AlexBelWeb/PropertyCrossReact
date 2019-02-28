import * as React from 'react';

interface ErrorAlertProps {
  message: string;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = (
  props: ErrorAlertProps
) => {
  const { message } = props;
  return (
    <div className="alert alert-danger text-center" role="alert">
      {message}
    </div>
  );
};
