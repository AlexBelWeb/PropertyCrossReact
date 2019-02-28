import * as React from 'react';

interface ErrorAlertProps {
  message: string;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => (
  <span className="alert alert-danger text-center" role="alert" style={{display: 'block'}} >
    {message}
  </span>
);
