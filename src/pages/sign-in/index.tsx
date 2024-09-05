import { SignInView } from '@/features';
import { UserLayout } from '@/shared/layout';

import type { NextPageWithLayout } from '../_app';

const SignIn: NextPageWithLayout = () => <SignInView />;

SignIn.getLayout = function getLayout(page: React.ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default SignIn;
