import React, { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginActions } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const {
    username, password, isLoading, error
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t("Форма авторизации")} />
      {error && <Text text={t("Вы ввели неправильный логин или пароль")} theme={TextTheme.ERROR} />}
      <Input
        autofocus
        placeholder={t("Введите username")}
        className={cls.input}
        type="text"
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder={t("Введите пароль")}
        className={cls.input}
        type="text"
        onChange={onChangePassword}
        value={password}
      />
      <Button
        disabled={isLoading}
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
      >
        {t("Войти")}
      </Button>
    </div>
  );
});
