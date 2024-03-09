import React, { useState } from "react";
import { Box, Flex, Heading, Text, Button, Icon, Stack, Progress, Divider, useColorModeValue, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Image, Avatar, Table, Thead, Tbody, Tr, Th, Td, Input, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { FaUserTie, FaPaintBrush, FaTshirt, FaPenFancy, FaChartBar, FaProjectDiagram, FaFileInvoiceDollar, FaUsers, FaPlusCircle } from "react-icons/fa";

const Index = () => {
  const [clients, setClients] = useState([
    // Dummy client data
    { name: "John Doe", project: "Brand Design", status: "In Progress", revenue: 1200 },
    { name: "Jane Smith", project: "Life Coaching", status: "Completed", revenue: 1500 },
    // Add more clients here
  ]);

  // Generate random sales data for stats
  const totalRevenue = clients.reduce((sum, client) => sum + client.revenue, 0);
  const progress = Math.round((clients.filter((client) => client.status === "Completed").length / clients.length) * 100);

  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={5}>
        <Heading as="h1" size="xl">
          Dashboard
        </Heading>
        <Button leftIcon={<FaPlusCircle />} colorScheme="teal" variant="solid">
          Add New Project
        </Button>
      </Flex>

      <SimpleGrid columns={4} spacing={10} mb={10}>
        <Stat p={5} shadow="md" borderRadius="md" bg={useColorModeValue("white", "gray.700")}>
          <StatLabel>Clients</StatLabel>
          <StatNumber>{clients.length}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23% this month
          </StatHelpText>
        </Stat>

        <Stat p={5} shadow="md" borderRadius="md" bg={useColorModeValue("white", "gray.700")}>
          <StatLabel>Revenue</StatLabel>
          <StatNumber>${totalRevenue}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            12% this month
          </StatHelpText>
        </Stat>

        <Stat p={5} shadow="md" borderRadius="md" bg={useColorModeValue("white", "gray.700")}>
          <StatLabel>Projects</StatLabel>
          <StatNumber>{clients.filter((client) => client.status === "In Progress").length}</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            5% this month
          </StatHelpText>
        </Stat>

        <Stat p={5} shadow="md" borderRadius="md" bg={useColorModeValue("white", "gray.700")}>
          <StatLabel>Completion</StatLabel>
          <Progress value={progress} size="sm" colorScheme="green" />
          <Text mt={2}>{progress}%</Text>
        </Stat>
      </SimpleGrid>

      <Divider my={10} />

      <Heading as="h2" size="lg" mb={5}>
        Projects & Clients
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Client</Th>
            <Th>Project</Th>
            <Th>Status</Th>
            <Th isNumeric>Revenue</Th>
          </Tr>
        </Thead>
        <Tbody>
          {clients.map((client, index) => (
            <Tr key={index}>
              <Td>{client.name}</Td>
              <Td>{client.project}</Td>
              <Td>{client.status}</Td>
              <Td isNumeric>${client.revenue}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Divider my={10} />

      <Heading as="h2" size="lg" mb={5}>
        New Project
      </Heading>
      <Stack spacing={4} as="form">
        <FormControl id="client-name">
          <FormLabel>Client Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="project-type">
          <FormLabel>Project Type</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="project-description">
          <FormLabel>Project Description</FormLabel>
          <Textarea />
        </FormControl>
        <Button leftIcon={<FaPlusCircle />} colorScheme="teal" variant="solid">
          Create Project
        </Button>
      </Stack>
    </Box>
  );
};

export default Index;
