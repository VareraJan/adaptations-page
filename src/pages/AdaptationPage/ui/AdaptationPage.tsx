import { memo } from 'react';
import { classNames, Mods } from '../../../shared/lib/classNames/classNames';
import { AdaptationInfo } from '../../../widgets/AdaptationInfo';
import { AdaptationList } from '../../../widgets/AdaptationList';
import { UserInfo } from '../../../widgets/UserInfo';
import styles from './AdaptationPage.module.scss';

interface AdaptationPageProps {
  className?: string;
}

export const AdaptationPage = memo((props: AdaptationPageProps) => {
  const { className } = props;
  const mods: Mods = {};

  return (
    <div className={classNames(styles.adaptationPage, mods, [className])}>
      <UserInfo />
      <AdaptationInfo />
      <AdaptationList />
    </div>
  )
})
