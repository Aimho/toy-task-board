import React, { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import { CssBaseline, ThemeProvider, useTheme } from "@mui/material";

import client from "../apollo";
import { SnackbarProvider } from "notistack";

interface Props {
  children: ReactNode;
}

const Provider = ({ children }: Props) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default Provider;
