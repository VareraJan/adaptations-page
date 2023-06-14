import { memo } from 'react';
import { classNames, Mods } from '../../../shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC = memo((props: NavbarProps) => {
  const { className } = props;

  const mods: Mods = {};

  return (
    <div className={classNames(styles.navbar, mods, [className])}>
      Navbar
    </div>
  )
});
