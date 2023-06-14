import { memo } from 'react';
import styles from './Line.module.scss';

interface LineProps {
  widthContainer?: number;
  widthLine?: number;
  justifyContent?: string;
}

export const Line = memo((props: LineProps) => {
  const { widthContainer, widthLine, justifyContent } = props;

  const stlContainer = {
    width: widthContainer ? widthContainer : undefined,
    justifyContent: justifyContent ? justifyContent : undefined,
  }

  const stlLine = {
    width: widthLine ? widthLine : undefined,
  }

  return (
    <div style={stlContainer} className={styles.lineContainer}>
      <div className={styles.line} style={stlLine} />
    </div>
  )
})


