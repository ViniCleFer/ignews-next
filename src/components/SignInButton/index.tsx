import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
  const isUserLoggedIn = true;

  return (
    <button type='button' className={styles.signInButton}>
      <FaGithub color={isUserLoggedIn ? '#04D361' : '#eba417'} />
      <span>{isUserLoggedIn ? 'ViniCleFer' : 'Sign in with Github'}</span>
      {isUserLoggedIn && <FiX color='#737380' size={14} />}
    </button>
  );
}
