import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, FormInput, PasswordInput } from '@/shared/ui';
import { isFieldRequired } from '@/utils/helpers';
import { useAuth } from '@/utils/hooks';

import { SignInInputs, signInSchema, signInSchemaShape } from './schema';

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInInputs>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(signInSchema),
  });

  const router = useRouter();
  const { loginUser } = useAuth();

  const onSubmit: SubmitHandler<SignInInputs> = async (data) => {
    try {
      await loginUser(data);
      router.push('/');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Status:', err.status);
        console.error('Message:', err.message);
      } else {
        console.error('Unexpected Error:', err);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-2 flex flex-col items-center gap-5"
    >
      <section className="flex flex-col gap-5">
        <FormInput
          useFormRegisterReturn={{
            ...register('email'),
            required: isFieldRequired(signInSchemaShape, 'email'),
          }}
          type="email"
          label="Email"
          autoComplete="email"
          errorMessage={errors.email?.message}
        />

        <PasswordInput
          useFormRegisterReturn={{
            ...register('password'),
            required: isFieldRequired(signInSchemaShape, 'password'),
          }}
          label="Password"
          errorMessage={errors.password?.message}
        />
      </section>
      <Button
        variant="filled"
        size="medium"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Loading' : 'Sign In'}
      </Button>
    </form>
  );
};

export { SignInForm };
