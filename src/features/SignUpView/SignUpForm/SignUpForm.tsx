import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  Button,
  Typography,
  FormInput,
  PasswordInput,
  AuthFormRootError,
} from '@/shared/ui';
import { isFieldRequired } from '@/utils/helpers/auth';
import { useAuth } from '@/utils/hooks';

import { signUpInputs, signUpSchema, signUpSchemaShape } from './schema';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<signUpInputs>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(signUpSchema),
  });

  const router = useRouter();
  const { registerUser, loginUser } = useAuth();

  const onSubmit: SubmitHandler<signUpInputs> = async (data) => {
    try {
      const { email, password } = data;
      await registerUser(data);
      await loginUser({ email, password });
      router.push('/');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError('root', {
          message: err.response?.data.message,
        });
      } else {
        setError('root', {
          message: 'Something went wrong :(',
        });
        console.error('Unexpected Error:', err);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-2 flex flex-col items-center gap-5"
    >
      {errors.root && (
        <AuthFormRootError>{errors.root.message}</AuthFormRootError>
      )}
      <div className="flex flex-col items-center gap-8">
        <section>
          <Typography tag="h2" variant="title-form-section">
            Personal Info
          </Typography>
          <div className="grid grid-cols-2 gap-5">
            <FormInput
              useFormRegisterReturn={{
                ...register('firstName'),
                required: isFieldRequired(signUpSchemaShape, 'firstName'),
              }}
              type="text"
              label="First name"
              autoComplete="given-name"
              errorMessage={errors.firstName?.message}
            />

            <FormInput
              useFormRegisterReturn={{
                ...register('lastName'),
                required: isFieldRequired(signUpSchemaShape, 'lastName'),
              }}
              type="text"
              label="Last name"
              autoComplete="family-name"
              errorMessage={errors.lastName?.message}
            />
          </div>
        </section>
        <section>
          <Typography tag="h2" variant="title-form-section">
            Credentials
          </Typography>
          <div className="grid grid-cols-2 gap-5">
            <FormInput
              useFormRegisterReturn={{
                ...register('email'),
                required: isFieldRequired(signUpSchemaShape, 'email'),
              }}
              type="email"
              label="Email"
              autoComplete="email"
              errorMessage={errors.email?.message}
            />

            <PasswordInput
              useFormRegisterReturn={{
                ...register('password'),
                required: isFieldRequired(signUpSchemaShape, 'password'),
              }}
              label="Password"
              errorMessage={errors.password?.message}
            />

            <PasswordInput
              useFormRegisterReturn={{
                ...register('confirmPassword'),
                required: isFieldRequired(signUpSchemaShape, 'confirmPassword'),
              }}
              label="Confirm password"
              errorMessage={errors.confirmPassword?.message}
              className="col-start-2"
            />
          </div>
        </section>
      </div>
      <Button
        variant="filled"
        size="medium"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Loading' : 'Submit'}
      </Button>
    </form>
  );
};

export { SignUpForm };
