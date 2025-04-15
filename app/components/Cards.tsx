import { Avatar, Card, Group, Stack, Text, Title } from "@mantine/core"
import { Check, PushPin } from "@phosphor-icons/react"

function ChatCard(){
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
    )
}
export {ChatCard}