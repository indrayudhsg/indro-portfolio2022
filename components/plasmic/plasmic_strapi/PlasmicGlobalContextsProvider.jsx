// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pnayxrZQDQNLaMhqWY9Kua
import * as React from "react";
import { StrapiCredentialsProvider } from "@plasmicpkgs/plasmic-strapi"; // plasmic-import: Nz3wPi974V7/codeComponent

export default function GlobalContextsProvider(props) {
  const { children, strapiCredentialsProviderProps } = props;
  return (
    <StrapiCredentialsProvider
      {...strapiCredentialsProviderProps}
      host={
        strapiCredentialsProviderProps &&
        "host" in strapiCredentialsProviderProps
          ? strapiCredentialsProviderProps.host
          : "https://strapi-plasmic.herokuapp.com"
      }
      token={
        strapiCredentialsProviderProps &&
        "token" in strapiCredentialsProviderProps
          ? strapiCredentialsProviderProps.token
          : ""
      }
    >
      {children}
    </StrapiCredentialsProvider>
  );
}