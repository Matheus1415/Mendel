import React, { useEffect } from 'react';
import { Alert, AlertIcon, CloseButton } from '@chakra-ui/react';

const Notification = ({ message, status, isVisible, setIsVisible }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, setIsVisible]);

  return isVisible ? (
    <Alert
      maxW="400px"
      position="fixed"
      top="10px"
      right="10px"
      bg={status === 'error' ? 'red.500' : 'yellow.500'}
      color="white"
      padding="20px"
      borderRadius="md"
      boxShadow="lg"
      zIndex="1000"
      status={status}
      variant='left-accent'
    >
      <AlertIcon />
      {message}
      <CloseButton
        position="absolute"
        right="8px"
        top="8px"
        color="white"
        onClick={() => setIsVisible(false)}
      />
    </Alert>
  ) : null;
};

export default Notification;
