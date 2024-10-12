import { USER_AUTH_ROUTES, ROUTES } from '@/utils/constants';
import { useAuth } from '@/utils/hooks';

import { CustomNavLink } from './CustomNavLink/CustomNavLink';

const NavBar = () => {
  const { isAuthenticated } = useAuth();
  const routesToRender = isAuthenticated ? USER_AUTH_ROUTES : ROUTES;
  return (
    <nav>
      <ul className="flex items-center justify-between gap-5">
        {Object.values(routesToRender).map((route) => (
          <li key={route.id}>
            <CustomNavLink path={route.path}>{route.name}</CustomNavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { NavBar };
