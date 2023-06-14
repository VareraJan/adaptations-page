import { memo } from 'react';
import { classNames, Mods } from '../../../shared/lib/classNames/classNames';
import { Text, TextAlign } from '../../../shared/ui/Text/Text';
import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

export const Footer = memo((props: FooterProps) => {
  const { className } = props;

  const mods: Mods = {};

  return (
    <div className={classNames(styles.footer, mods, [className] )}>
      <Text text='Footer' color='#FFFFFF' align={TextAlign.CENTER}/>
    </div>
  )
})
