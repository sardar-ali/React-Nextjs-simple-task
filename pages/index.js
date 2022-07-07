import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getTitle, incrementCount, decrementCount, resetCount } from "../redux";
import Login from "../component/Login";

export default function Home() {
  const dispatch = useDispatch();
  const { title } = useSelector((state) => state.home);
  const { count } = useSelector((state) => state.count);
  return (
    <div>
      <Login />
      {/**
      <h1>this is home pages</h1>
      <p className="text-danger"> {title && title} </p>
      <p> {count && count ? count : 0} </p>
      <button onClick={() => dispatch(getTitle())}>showTitle</button>
      <button onClick={() => dispatch(incrementCount())}>Increment by 1</button>
      <button onClick={() => dispatch(decrementCount())}>decrement by 1</button>
  */}
    </div>
  );
}
