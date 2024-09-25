import { GetServerSideProps } from 'next';

import { SignUpView } from '@/features';
import { UserLayout } from '@/shared/layout';
import { ROUTES } from '@/utils/constants';
import { checkAuthGSSP } from '@/utils/helpers';

import type { NextPageWithLayout } from '../_app';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isAuthorized = await checkAuthGSSP(context);

  if (isAuthorized) {
    return {
      redirect: {
        destination: ROUTES.ROOT.path,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const SignUp: NextPageWithLayout = () => <SignUpView />;

SignUp.getLayout = function getLayout(page: React.ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default SignUp;
