import { useState } from 'react';

import { FormInput, IFormInputProps } from '@/shared/ui';

import { PasswordToggleIcon } from './components';

interface PasswordInputProps
  extends Omit<IFormInputProps, 'type' | 'component'> {}

const PasswordInput = (props: PasswordInputProps) => {
  const [isPassword, setIsPassword] = useState(true);
  const onClick = () => setIsPassword((prev) => !prev);

  const component = (
    <PasswordToggleIcon isPassword={isPassword} onClick={onClick} />
  );

  return (
    <FormInput
      {...props}
      type={isPassword ? 'password' : 'string'}
      component={component}
    />
  );
};

export { PasswordInput };
