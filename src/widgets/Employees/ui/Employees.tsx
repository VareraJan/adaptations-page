import React from "react";
import { memo } from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { EmployeeCard } from "../../../shared/ui/EmployeeCard/EmployeeCard";
import { getUserManager } from "../../UserInfo/model/selectors/getUserData";
import styles from "./Employees.module.scss";

interface EmployeesProps {
  className?: string;
}

export const Employees = memo((props: EmployeesProps) => {
  const { className } = props;

  const { name: managerName, lastName: managerLastName } = getUserManager;

  //Mock
  const name = "Ребекка";
  const lastName = "Ревинсон";

  return (
    <div className={classNames(styles.employees, {}, [className])}>
      <EmployeeCard
        name={managerName}
        lastName={managerLastName}
        position={"Руководитель"}
        marginRight={67}
      />
      <EmployeeCard name={name} lastName={lastName} position={"Наставник"} />
    </div>
  );
});
