import { CSSProperties, memo, PropsWithChildren } from 'react';
import { classNames, Mods } from '../../lib/classNames/classNames';
import { TaskStatus } from '../Task/Task';
import styles from './Text.module.scss';

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface TextProps extends PropsWithChildren {
  className?: string;
  text?: string;
  title?: string;
  bold?: boolean;
  align?: TextAlign;
  color?: string;
  size?: number;
  lineHeight?: number;
  theme?: TaskStatus;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  
}

export const Text = memo((props: TextProps) => {
  const { 
    className,
    text,
    title,
    bold,
    theme = '',
    align = TextAlign.LEFT,
    color,
    size,
    lineHeight,
    paddingLeft,
    paddingRight
   } = props;
   
  const mods: Mods = {
    [styles['bold']]: bold,
  }
  const stl: CSSProperties = {
    color: color ? color : undefined,
    paddingLeft,
    paddingRight,
    fontSize: size ? `${size}px` : undefined,
    lineHeight: lineHeight ? `${lineHeight}px` : undefined
  }
  
  return (
    <div 
      className={classNames(styles.Text, mods, [ styles[align], className, styles[theme]])}
    >
      {title && <p className={styles.title} style={stl}>{title}</p>}
      {text && <p className={styles.text} style={stl}>{text}</p>}
    </div>
  )
})
