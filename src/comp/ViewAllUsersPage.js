import React from 'react';
import { ChakraProvider, Grid, Box, Flex, Avatar, Heading, Text, IconButton, Image, Button } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';

const ViewAllUsersPage = () => {
  return (
    <ChakraProvider>
      <Grid templateColumns='repeat(auto-fill, minmax(200px, 1fr))' gap={4}>
        <Box
          maxW='md'
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          boxShadow='md'
          _hover={{ boxShadow: 'lg' }}
        >
          <Flex p={4} alignItems='center' justifyContent='space-between'>
            <Flex alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
              <Box ml={4}>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
              </Box>
            </Flex>
            <IconButton
              variant='ghost'
              colorScheme='gray'
              aria-label='See menu'
              icon={<BsThreeDotsVertical />}
            />
          </Flex>
          <Box p={4}>
            <Text>
              With Chakra UI, I wanted to sync the speed of development with the speed
              of design. I wanted the developer to be just as excited as the designer to
              create a screen.
            </Text>
          </Box>
          <Image
            w='full'
            h={64}
            objectFit='cover'
            src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Chakra UI'
          />
          <Flex p={4} justifyContent='space-between'>
            <Button
              flex='1'
              variant='ghost'
              leftIcon={<BiLike />}
              _hover={{ backgroundColor: 'blue.500', color: 'white' }}
            >
              Like
            </Button>
            <Button
              flex='1'
              variant='ghost'
              leftIcon={<BiChat />}
              _hover={{ backgroundColor: 'green.500', color: 'white' }}
            >
              Comment
            </Button>
            <Button
              flex='1'
              variant='ghost'
              leftIcon={<BiShare />}
              _hover={{ backgroundColor: 'purple.500', color: 'white' }}
            >
              Share
            </Button>
          </Flex>
        </Box>
      </Grid>
    </ChakraProvider>
  );
};

export default ViewAllUsersPage;
