"use client";
import { useState } from "react";
import { Calendar, Check, Graph, PushPin } from "@phosphor-icons/react";
import {
  Avatar,
  Card,
  Group,
  Indicator,
  Stack,
  Text,
  Title,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import classes from "./AppShell.module.css";

const mainLinksMockdata = [
  { icon: Calendar, label: "Home" },
  { icon: Graph, label: "Settings" },
];

export default function AppShell() {
  const [active, setActive] = useState("Releases");
  const mainLinks = mainLinksMockdata.map((link) => (
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

  function ChatCard() {
    return (
      <Card p={"xs"} withBorder shadow="xs"  miw={350} radius={'lg'}>
        <Group justify="space-between">
          <Group>
           <Avatar size={'lg'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXDCW1g-XdnBuzGFd4kucWVE1si43FyTYwsQ&s" />
           <Stack gap={0}>
            <Title order={4}>Kamal Kumar</Title>
            <Group gap={'xs'} mt={'-4'}>
              <Check size={16} color="gray" weight="bold" />
              <Text c={'gray'} truncate="end" maw={150}>
                  Bandi he nhi hai bhai
              </Text>
            </Group>
          </Stack>
          </Group>

          <Stack align="flex-end">
            <Text size="xs" c={'gray'}>1:37pm</Text>
            <PushPin size={18} color="dark" weight="bold" />
          </Stack>

        </Group>
      </Card>
    );
  }

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
