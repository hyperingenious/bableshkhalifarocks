"use client";
import { useState } from "react";
import { Calendar,  Graph, Users, UsersFour, } from "@phosphor-icons/react";
import {
  Group,
  Indicator,
  Stack,
  Text,
  Title,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import classes from "./AppShell.module.css";
import { ChatCard } from "./Cards";

const tabs= [
  { icon: Users, label: "Friends" },
  { icon: UsersFour, label: "Servers" },
];

export default function AppShell() {
  const [active, setActive] = useState("Releases");
  const mainLinks = tabs.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={classes.mainLink}
        data-active={link.label === active || undefined}
      >
        <link.icon size={22} stroke={'1.5'} />
      </UnstyledButton>
    </Tooltip>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>{mainLinks}</div>
        <Stack p={"md"} gap={0}>
          <Stack p={"md"} gap={0}>
            <Title order={3}>Bablesh Khalifa Rocks.</Title>
            <Group gap={"xs"} ml={"xs"}>
              <Group gap={"xs"}>
                <Indicator
                  color="teal"
                  position="top-center"
                  processing
                ></Indicator>
                <Text size="sm">13 Online</Text>
              </Group>
              <Text size="sm" c={"gray"}>
                33 Friends
              </Text>
            </Group>
          </Stack>
          <ChatCard />
        </Stack>
      </div>
    </nav>
  );
}
