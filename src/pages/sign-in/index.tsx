import { UserLayout } from '@/components';
import { SignInView } from '@/modules';

import type { NextPageWithLayout } from '../_app';

const SignIn: NextPageWithLayout = () => <SignInView />;

SignIn.getLayout = function getLayout(page: React.ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default SignIn;
