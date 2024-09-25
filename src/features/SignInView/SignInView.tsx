import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

import { Button, Typography, Container } from '@/shared/ui';
import { ROUTES } from '@/utils/constants';

import { SignInForm } from './SignInForm/SignInForm';

const TEXT = {
  H1: 'sign in',
  SIGN_IN_BTN: 'sign up',
  SIGN_UP_LINK: 'sign up',
};

const SignInView = () => {
  return (
    <section className="h-full">
      <Container className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-5 rounded-xl border bg-white px-10 py-5">
          <Typography
            tag="h1"
            variant="title-1"
            className="mb-5 underline first-letter:uppercase"
          >
            {TEXT.H1}
          </Typography>
          <SignInForm />
          <hr className="w-full" />
          <Button
            size="medium"
            variant="outlined"
            className="flex items-center gap-2"
          >
            <FcGoogle />
            <span className="flex-1">Sign in with google</span>
          </Button>
          <hr className="w-full" />
          <p>
            Have already registered? Go{' '}
            <Link
              href={ROUTES.SIGN_UP.path}
              className="text-amber-800 underline"
            >
              {TEXT.SIGN_UP_LINK}
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export { SignInView };
