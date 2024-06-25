import React from 'react';
import { Box, Heading, Text, Badge } from '@chakra-ui/react';

const TaskCard = ({ task }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl">{task.name}</Heading>
      <Text mt={4}>{task.description}</Text>
      <Badge mt={2} colorScheme={getStatusColor(task.status)}>
        {task.status}
      </Badge>
    </Box>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'pending':
      return 'yellow';
    case 'in_progress':
      return 'blue';
    case 'completed':
      return 'green';
    default:
      return 'gray';
  }
};

export {TaskCard};
