import { memo } from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Avatar } from "../../../shared/ui/Avatar/Avatar";
import { Text } from "../../../shared/ui/Text/Text";
import {
  getSubdivision,
  getUserCompany,
  getUserInfo,
  getUserManager,
} from "../model/selectors/getUserData";
import { TaskStatus } from "../../../shared/ui/Task/Task";
import styles from "./UserInfo.module.scss";
import { Employees } from "../../Employees";
import { Line } from "../../../shared/ui/Line/Line";

interface UserInfoProps {
  className?: string;
}

export const UserInfo = memo((props: UserInfoProps) => {
  const { className } = props;

  const { name, middleName, lastName, position, hireDate, probationExpired } =
    getUserInfo;
  const { companyName } = getUserCompany;

  const { name: subdivision } = getSubdivision;

  return (
    <>
      <div className={classNames(styles.userInfo, {}, [className])}>
        <Avatar alt="avatar" />
        <div className={styles.infoBlock}>
          <div className={styles.fio}>
            <Text text={lastName} size={32} />
            <Text text={`${name} ${middleName}`} size={32} />
          </div>
          <div className={styles.workInfo}>
            <div className={styles.workTitle}>
              <Text text={"Должность"} theme={TaskStatus.SHADOW_GREY} />
            </div>
            <Text text={position} />
          </div>
          <div className={styles.workInfo}>
            <div className={styles.workTitle}>
              <Text text={"ЦА/Дирекция"} theme={TaskStatus.SHADOW_GREY} />
            </div>
            <Text text={companyName} />
          </div>
          <div className={styles.workInfo}>
            <div className={styles.workTitle}>
              <Text text={"Подразделение"} theme={TaskStatus.SHADOW_GREY} />
            </div>
            <Text text={subdivision} />
          </div>
          <div className={styles.workInfo}>
            <div className={styles.workTitle}>
              <Text text={"Работает с"} theme={TaskStatus.SHADOW_GREY} />
            </div>
            <Text text={hireDate} />
          </div>

          <div className={styles.workInfo}>
            <Text
              text={`Испытательный срок до ${probationExpired}`}
              color="#EB5757"
            />
          </div>
        </div>
      </div>
      <Line />
      <Employees />
    </>
  );
});
