import '@mantine/core/styles.css';
import type { Metadata } from "next";
import { createTheme, MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
  title: "Bablesh Khalifa Rocks",
  description: "A brand new chatting experience",
};


const theme = createTheme({
  /** Put your mantine theme override here */
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider defaultColorScheme='dark' theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
