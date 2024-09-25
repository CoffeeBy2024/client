import { GetServerSideProps } from 'next';

import { UserProfileView } from '@/features';
import { UserLayout } from '@/shared/layout';
import { ROUTES } from '@/utils/constants';
import { checkAuthGSSP } from '@/utils/helpers';

import { NextPageWithLayout } from '../_app';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isAuthorized = await checkAuthGSSP(context);

  if (!isAuthorized) {
    return {
      redirect: {
        destination: ROUTES.SIGN_IN.path,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const UserProfile: NextPageWithLayout = () => <UserProfileView />;

UserProfile.getLayout = function getLayout(page: React.ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default UserProfile;
