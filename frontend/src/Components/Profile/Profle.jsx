import React, { useEffect, useState } from 'react';
import Service from '../../utils/http';
import {
  Center,
  Text,
  Card,
  Avatar,
  Stack,
  Divider,
  Group,
} from '@mantine/core';

export default function Profile() {
  const [user, setUser] = useState({});

  const obj = new Service();

  const getProfileData = async () => {
    try {
      const data = await obj.get('user/me');
      setUser(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <Center style={{ marginTop: '4rem' }}>
      <Card shadow="md" padding="xl" radius="md" withBorder  style={{
    width: 400,
    backgroundColor: '#f0f4ff', 
  }}
>
        <Stack align="center" spacing="md">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFH6ZObO8B4i4oJJbWi6YOEp5EV3zgEl87A&s"
            size={200}
            radius="xl"
          />
          <Text
            size="lg"
            weight={500}
            color="dark"
            style={{
              whiteSpace: 'nowrap',
            //   overflow: 'hidden',
            //   textOverflow: 'ellipsis',
              maxWidth: '100%',
              textAlign: 'center',
            }}
          >
            {user?.name || 'MOHAMMED ABDUL JAHANGEER PASHA'}
          </Text>
          <Text size="sm" color="dimmed">
            {user?.email || '2210040109@klh.edu.in'}
          </Text>

          <Divider my="sm" />

          <Group position="apart" style={{ width: '100%' }}>
            <Text size="sm" color="gray">Start Date:</Text>
            <Text size="sm" weight={500}>01-Aug-2023</Text>
          </Group>

          <Group position="apart" style={{ width: '100%' }}>
            <Text size="sm" color="gray">End Date:</Text>
            <Text size="sm" weight={500}>31-May-2026</Text>
          </Group>
        </Stack>
      </Card>
    </Center>
  );
}