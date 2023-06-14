import { memo } from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { ProgressBar } from "../../../shared/ui/ProgressBar/ProgressBar";
import { Text } from "../../../shared/ui/Text/Text";
import {
  getAdaptationPath,
  getProgress,
} from "../model/service/selectors/getAdaptationInfo";
import styles from "./AdaptationInfo.module.scss";

interface AdaptationInfoProps {
  className?: string;
}

export const AdaptationInfo = memo((props: AdaptationInfoProps) => {
  const { className } = props;

  const { link } = getAdaptationPath;
  const { total, completed } = getProgress;

  return (
    <div className={classNames(styles.adaptationInfo, {}, [className])}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Text title="Ваш план адаптации" />
      </a>
      <ProgressBar total={total} completed={completed} />
    </div>
  );
});
