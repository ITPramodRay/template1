import React, { useRef, useState } from "react";
import AppDownloadMV from "./AppDownloadMV";
import AppDownloadPC from "./AppDownloadPC";

const AppDownload = () => {
  return (
    <>
      <AppDownloadPC />
      <AppDownloadMV />
    </>
  );
};
export default AppDownload;
