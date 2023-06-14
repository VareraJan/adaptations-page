import { CSSProperties, useMemo } from "react";
import { classNames, Mods } from "../../lib/classNames/classNames";
import DefaultAvatar from '../../assets/image/avatar-default.png'
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  circle?: boolean;
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { className, src, size, alt, circle } = props
  const mods: Mods = {

  };
  const styles = useMemo<CSSProperties>(()  => ({
    width: size || 192,
    height: size || 192,
    borderRadius: circle ? '50%' : undefined,
  }), [circle, size])

  return (
    <img
      src={src || DefaultAvatar}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, mods, [className])}
    />
  )

}
