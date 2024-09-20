import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

import { Button, Container, Typography } from '@/shared/ui';
import { ROUTES } from '@/utils/constants';

import { SignUpForm } from './SignUpForm/SignUpForm';

const TEXT = {
  H1: 'sign up',
  SIGN_IN_LINK: 'sign in',
};

const SignUpView = () => {
  return (
    <section className="h-full">
      <Container className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-5 rounded-xl border bg-white p-5">
          <Typography
            tag="h1"
            variant="title-1"
            className="mb-1 underline first-letter:uppercase"
          >
            {TEXT.H1}
          </Typography>
          <SignUpForm />
          <hr className="w-full" />
          <Button
            size="medium"
            variant="filled"
            className="flex items-center gap-2"
          >
            <FcGoogle />
            <span className="flex-1">Sign up with google</span>
          </Button>
          <hr className="w-full" />
          <p>
            Have not registered yet? Go{' '}
            <Link
              href={ROUTES.SIGN_IN.path}
              className="text-amber-800 underline"
            >
              {TEXT.SIGN_IN_LINK}
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export { SignUpView };
