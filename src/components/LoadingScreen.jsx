import React from "react";
import BarLoader from "react-spinners/BarLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
  backgroundColor: "rgba(17, 24, 39, 0.3)",
  borderRadius: "9999px",
};

const LoadingScreen = (props) => {
  return (
    <BarLoader
      color="rgb(245, 245, 245)"
      loading={props.loading}
      cssOverride={override}
      aria-label="Loading"
      data-testid="loader"
    />
  );
};

export default LoadingScreen;
