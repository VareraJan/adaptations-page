import { memo } from 'react';
import { classNames, Mods } from '../../../shared/lib/classNames/classNames';
import { AdatpationSectionsData } from '../model/service/fetchAdaptationList/fetchAdaptationList';
import { AdaptationSection } from '../model/types/adaptation'
import styles from './AdaptationList.module.scss';
import { Section } from './Section/Section';


interface AdaptationListProps {
  sections?: AdaptationSection,
  className?: string;
}

export const AdaptationList = memo((props: AdaptationListProps) => {
  const { sections, className } = props;

  // Mock sections
  const sectionsData = AdatpationSectionsData;

  const mods: Mods = {}

  return (
    <div className={classNames(styles.adaptationList, mods, [className])}>
      {sectionsData && sectionsData.sections.map((section) => <Section key={section.title} section={section} />)}
    </div>
  )
})
