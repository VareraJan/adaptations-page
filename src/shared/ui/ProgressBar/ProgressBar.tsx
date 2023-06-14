import { memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import { TaskStatus } from '../Task/Task';
import { Text } from '../Text/Text';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  className?: string;
  total?: number;
  completed?: number;
}

export const ProgressBar = memo((props: ProgressBarProps) => {
  const { className, completed, total } = props;

  let percent = 0

  if (completed && total) {
    percent = Math.round(completed / total * 100)
  }

  return (
    <div className={classNames(styles.progressBar, {}, [className])}>
      <div
        className={styles.fill}
        style={{width: `${percent}%`}}
      >
        <div className={styles.text}>
          <Text text={`${percent}%`} theme={TaskStatus.SHADOW_GREY} />
        </div>
      </div>
    </div>
  )
})
