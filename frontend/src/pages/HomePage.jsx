import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  Flex,
  VStack,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import taskManagementImage from "../assets/taskmanagement.png";

const HomePage = () => {
  return (
    <Box>
      <Container maxW="container.xl" mt={20}>
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-around"
          py={10}
        >
          <Box textAlign={{ base: "center", md: "left" }}>
            <Heading as="h1" size="2xl" mb={4}>
              Welcome to TaskMasterPro
            </Heading>
            <Text fontSize="xl" color="gray.600" mb={8}>
              Your solution for efficient project management.
            </Text>
            <Button
              colorScheme="teal"
              variant="solid"
              size="lg"
              onClick={() => (window.location.href = "/login")}
            >
              Get Started
            </Button>
          </Box>
          <Box textAlign="center" mt={{ base: 12, md: 0 }}>
            <Image
              src={taskManagementImage}
              alt="Task Management"
              maxH={{ base: "200px", md: "300px" }}
              maxW="100%"
            />
          </Box>
        </Flex>

        <VStack spacing={12} textAlign="center" py={20}>
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Why Choose TaskMasterPro?
            </Heading>
            <Text fontSize="lg" color="gray.600">
              TaskMasterPro offers powerful features to streamline your project
              management workflows and boost team productivity.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="100%">
            <FeatureCard
              title="Easy Collaboration"
              description="Collaborate effortlessly with your team members, assign tasks, and track progress in real-time."
              icon="💬"
            />
            <FeatureCard
              title="Real-time Updates"
              description="Stay informed with real-time updates and notifications on task status changes and project milestones."
              icon="🕒"
            />
            <FeatureCard
              title="Secure File Sharing"
              description="Securely share and manage files related to your projects with integrated file sharing capabilities."
              icon="📂"
            />
          </SimpleGrid>

          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Key Benefits of TaskMasterPro
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Discover why TaskMasterPro is the preferred choice for teams
              worldwide:
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={8}>
              <BenefitCard
                title="Enhanced Productivity"
                description="Boost your team's productivity with streamlined workflows and real-time collaboration tools."
                icon="🚀"
              />
              <BenefitCard
                title="Customizable Dashboards"
                description="Create personalized dashboards to monitor project progress and key metrics at a glance."
                icon="📊"
              />
              <BenefitCard
                title="Scalable Solution"
                description="Scale TaskMasterPro seamlessly as your team grows, with robust performance and security."
                icon="🔒"
              />
              <BenefitCard
                title="Intuitive Interface"
                description="Enjoy a user-friendly interface that simplifies task management and enhances user experience."
                icon="💡"
              />
            </SimpleGrid>
          </Box>

          <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            onClick={() => (window.location.href = "/login")}
          >
            Get Started with TaskMasterPro
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

const FeatureCard = ({ title, description, icon }) => {
  return (
    <Box
      maxW="md"
      p={6}
      borderWidth="1px"
      rounded="lg"
      shadow="md"
      transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
      _hover={{
        transform: "translateY(-4px)",
        shadow: "lg",
      }}
    >
      <Text fontSize="2xl" role="img" aria-label="icon" mb={4}>
        {icon}
      </Text>
      <Heading as="h3" size="lg" mb={4}>
        {title}
      </Heading>
      <Text fontSize="md" color="gray.600">
        {description}
      </Text>
    </Box>
  );
};

const BenefitCard = ({ title, description, icon }) => {
  return (
    <Box
      maxW="md"
      p={6}
      borderWidth="1px"
      rounded="lg"
      shadow="md"
      transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
      _hover={{
        transform: "translateY(-4px)",
        shadow: "lg",
      }}
    >
      <Text fontSize="2xl" role="img" aria-label="icon" mb={4}>
        {icon}
      </Text>
      <Heading as="h3" size="lg" mb={4}>
        {title}
      </Heading>
      <Text fontSize="md" color="gray.600">
        {description}
      </Text>
    </Box>
  );
};

export { HomePage };
