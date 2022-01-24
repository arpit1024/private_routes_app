import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getToken } from "../store/actions";

export const Todos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToken(JSON.parse(localStorage.getItem("todo_user_token"))));
  }, []);

  return (
    <>
      <h1>Welcome To Homepage</h1>
    </>
  );
};
