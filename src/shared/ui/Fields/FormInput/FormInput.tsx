import clsx from 'clsx';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { Typography, Input } from '@/shared/ui';

import { Label } from './components';

interface IFormInputProps extends React.ComponentProps<'input'> {
  label?: string;
  errorMessage?: string;
  component?: React.ReactElement;
  useFormRegisterReturn?: UseFormRegisterReturn;
}

const FormInput = ({
  label,
  errorMessage,
  className,
  id: externalId,
  component,
  useFormRegisterReturn,
  ...props
}: IFormInputProps) => {
  const internalId = React.useId();
  const id = externalId ?? internalId;

  const areaInvalid = !!errorMessage;
  const isRequired = useFormRegisterReturn?.required || props.required;

  return (
    <div className={clsx('w-64', className)}>
      <div className="relative">
        <div
          className={clsx(
            `peer flex h-11 rounded border-2 border-amber-700 has-[:focus]:border-orange-400`,
            areaInvalid && 'border-red-400'
          )}
        >
          <Input
            className="px-2 py-4 placeholder-transparent"
            aria-invalid={areaInvalid}
            placeholder=""
            {...props}
            {...useFormRegisterReturn}
            id={id}
          />
          {component && component}
        </div>
        {label && (
          <Label htmlFor={id} isRequired={isRequired}>
            {label}
          </Label>
        )}
      </div>
      {errorMessage && (
        <Typography tag="p" variant="input-error-message">
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};

export { FormInput };
export type { IFormInputProps };
