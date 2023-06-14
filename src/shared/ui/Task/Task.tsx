import { memo } from 'react';
import { classNames, Mods } from '../../lib/classNames/classNames';
import { Text } from '../Text/Text';
import CheckIcon from '../../assets/image/IconCheck.svg'
import styles from './Task.module.scss';

export enum TaskStatus {
  SUCCESS = 'success',
  EXPIRED = 'expired',
  CURRENT = 'current',
  SHADOW_GREY = 'shadowGrey'
}

export enum StatusText {
  success = 'Сделано',
  expired = 'Просрочено',
  current = 'В процессе',
}

interface TaskProps {
  className?: string;
  text?: string;
  date?: string;
  status?: TaskStatus;
}

export const Task = memo((props: TaskProps) => {
  const { className, text, date, status } = props;

  const mods: Mods = {}

  const color = status === TaskStatus.CURRENT 
    ? TaskStatus.CURRENT : status === TaskStatus.SUCCESS 
    ? TaskStatus.SUCCESS : status === TaskStatus.EXPIRED
    ? TaskStatus.EXPIRED : '';
  
  const statusText = status === TaskStatus.CURRENT
    ? StatusText[TaskStatus.CURRENT] : status === TaskStatus.EXPIRED 
    ? StatusText[TaskStatus.EXPIRED] : status === TaskStatus.SUCCESS
    ? StatusText[TaskStatus.SUCCESS] : ''

  return (
    <li 
      className={classNames(styles.task, mods, [className, styles[color]])}
    >
      <Text text={text} bold/>

      <div className={styles.taskStatus}>
        {status === TaskStatus.SUCCESS && <img src={CheckIcon} width='24px' alt='success'/>}
        {text && <Text text={ statusText } paddingLeft='10px' paddingRight='14px' theme={color ? color : undefined } />}
        {date && <Text text={date} theme={TaskStatus.SHADOW_GREY}/>}
      </div>
    </li>
  )
})
