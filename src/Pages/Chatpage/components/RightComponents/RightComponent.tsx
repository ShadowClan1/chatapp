import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import HeaderRight from "./HeaderRight";
import { Send, WhatsApp } from "@mui/icons-material";
import ChatLayout from "../ChatLayout/ChatLayout";
import { useSelector } from "react-redux";
import TypingAnimation from "../../../../components/TypingAnimation";
import HeroBanner from "./HeroBanner";

const RightComponent = () => {
  const screen = useSelector((state): any=>state.screen)
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
{
  screen.type === 'DEFAULT' ? (<>
<HeroBanner/>
  
  </>) : (<>
    <HeaderRight />
     <ChatLayout/>
  </>)
}

    




    </div>
  );
};

export default RightComponent;
