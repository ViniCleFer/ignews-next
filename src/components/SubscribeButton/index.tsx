import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const isUserLoggedIn = true;

  return (
    <button type='button' className={styles.buttonSubscribe}>
      {/* <FaGithub color={isUserLoggedIn ? '#04D361' : '#eba417'} /> */}
      <span>{isUserLoggedIn ? 'Subscribe now' : 'Sign in with Github'}</span>
      {/* {isUserLoggedIn && <FiX color='#737380' size={14} />} */}
    </button>
  );
}
