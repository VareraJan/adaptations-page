import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '../../lib/classNames/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;


  return (
    <Link
      to={to}
      className={classNames(styles.appLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
})
