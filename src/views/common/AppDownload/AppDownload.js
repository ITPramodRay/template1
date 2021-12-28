import React, { useRef, useState } from "react";
import AppDownloadMV from "./AppDownloadMV";
import AppDownloadPC from "./AppDownloadPC";

import "./appdownload.scss";

const AppDownload = () => {
  return (
    <>
      <AppDownloadPC />
      <AppDownloadMV />
    </>
  );
};
export default AppDownload;
