import React, { Suspense, lazy } from "react";
import Chats from "./chats";
import Conversation from "../../components/conversation";
import { Stack } from "@mui/material";

const GeneralApp = () => {

  return (
    <>
      <Chats />
      <Conversation />
    </>
  );
};

export default GeneralApp;