import React from "react";
import { useTokenStore } from "../Store/TokenStore";
import { Route, Navigate } from "react-router-dom";

export default function PrivateRoute({
  component: Component,
  ...rest
}: {
  component: Element;
}) {
  const token = useTokenStore((state) => state.token);
  return <></>;
}
