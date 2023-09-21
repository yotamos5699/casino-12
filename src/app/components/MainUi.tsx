"use client";

import React, { useEffect } from "react";
import { User } from "./UserData";
import useLocalStorage from "../useLocalStorage";
import { AppTheme } from "../Style";

function MainUi({ user }: { user: User }) {
  const [languages, setLenguages] = useLocalStorage("lang", null);
  useEffect(() => {
    setLenguages(() => navigator?.languages);
  }, []);
  return <div className={AppTheme.main}>MainUi</div>;
}

export default MainUi;
