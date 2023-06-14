import { memo } from 'react';
import { classNames, Mods } from '../../../../shared/lib/classNames/classNames';
import { Task } from '../../../../shared/ui/Task/Task';
import { Text } from '../../../../shared/ui/Text/Text';
import { AdaptationSection } from '../../model/types/adaptation';
import styles from './Section.module.scss';

interface SectionProps {
  section?: AdaptationSection,
  className?: string,
}

export const Section = memo((props: SectionProps) => {
  const { section, className } = props;

  const mods: Mods = {}

  return (
    <div className={classNames(styles.section, mods, [className])} >
      <Text title={section?.title} />
      {section?.taskList && section.taskList.map((task) => 
        <Task key={task.task} text={task.task} date={task.date} status={task.status} />
        )}
    </div>
  )
})
