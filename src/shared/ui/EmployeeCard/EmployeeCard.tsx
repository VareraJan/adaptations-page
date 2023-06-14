import { memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import { Avatar } from '../Avatar/Avatar';
import { TaskStatus } from '../Task/Task';
import { Text } from '../Text/Text';
import styles from './EmployeeCard.module.scss';

interface EmployeeCardProps {
  className?: string;
  name?: string;
  lastName?: string;
  position?: string;
  marginRight?: number;
}

export const EmployeeCard = memo((props: EmployeeCardProps) => {
  const { className, name, lastName, position, marginRight } = props;

  const stl = {
    marginRight: marginRight ? `${marginRight}px` : undefined,
  }

  return (
    <div
      className={classNames(styles.employeeCard, {}, [className])}
      style={stl}
    >
      <Avatar circle alt='employee avatar' size={60} />
      {(name || lastName) && <div className={styles.textBlock}>
        <Text text={`${name} ${lastName}`} size={14} lineHeight={23} />
        <Text text={position} size={12} theme={TaskStatus.SHADOW_GREY} lineHeight={23} />
      </div>}
    </div>
  )
})
