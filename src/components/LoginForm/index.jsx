import React, { useState } from "react";
import styles from "./styles.module.scss";
import CheckBoxRS from "../CheckBoxRS";
import ButtonRS from "../ButtonRS";
import InputRS from "../InputRS";
import { useNavigate } from "react-router-dom";
import PhoneInput from "../PhoneInput";

const LoginForm = () => {
  let navigate = useNavigate();
  const [code, setCode] = useState("");

  return (
    <div className={styles.form}>
      <div className={styles.form__header}>
        <p className={styles.form__title}>Вход в личный кабинет</p>
        <p className={styles.form__subtitle}>
          Или{" "}
          <a href="#" className={styles.link}>
            создайте личный кабинет
          </a>
          , если нет личного кабинет
        </p>
      </div>
      <div className={styles.inputs}>
        <div className={styles.input__wrapper}>
          <p className={styles.input__name}>Номер телефона</p>
          <div className={styles.input__container}>
            <PhoneInput
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <ButtonRS
              title={"Получить код"}
              disable={!/[0-9]+/.test(code[17])}
              style={{
                marginLeft: "8px",
                maxWidth: "186px",
              }}
            />
          </div>
        </div>
        <div className={styles.input__wrapper}>
          <p className={styles.input__name}>Код проверки из СМС</p>
          <div className={styles.input__container}>
            <InputRS
              name={"Код проверки из СМС"}
              inputStyle={{ maxWidth: "170px" }}
            />
            <p className={styles.form__notify}>
              Повторно можно
              <br /> отправить код через 59 сек
            </p>
          </div>
        </div>
        <div className={styles.remember}>
          <CheckBoxRS>
            <p className={styles.remember__text}>Запомнить</p>
          </CheckBoxRS>
        </div>
      </div>
      <ButtonRS title={"Войти"} onClick={() => navigate("/account")} />
    </div>
  );
};

export default LoginForm;
