import Link from 'next/link';

import { Container, Typography } from '@/shared/ui';
import { ROUTES } from '@/utils/constants';

const TEXT = {
  H1: 'sign up page',
  SIGN_IN_LINK: 'sign in',
};

const SignUpView = () => {
  return (
    <section className="h-full">
      <Container>
        <Typography tag="h1" variant="title-1">
          {TEXT.H1}
        </Typography>
        <Link href={ROUTES.SIGN_IN.path} className="bg-orange-300">
          {TEXT.SIGN_IN_LINK}
        </Link>
      </Container>
    </section>
  );
};

export { SignUpView };
