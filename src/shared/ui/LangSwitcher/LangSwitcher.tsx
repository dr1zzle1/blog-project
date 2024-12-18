import React from "react";
import { classNames } from "shared/lib/classNames/classNames";

import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "../Button/Button";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button theme={ButtonTheme.CLEAR} onClick={toggle} className={classNames("", {}, [className])}>
      {t(short ? "Короткий язык" : "Язык")}
    </Button>
  );
};
