import { ButtonGroup, IconButton, Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const SocialMediaLinks = (props) => {
  let navigate = useNavigate();
  return (
    <VStack spacing="5" >
      <ButtonGroup variant="ghost" color="gray.400" {...props}>
        <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
        <IconButton as="a" href="https://github.com/Zulfa-Varvani/WConnect" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
      </ButtonGroup>
      <Button backgroundColor="gray.400" onClick={() => {navigate("/contact-us")}}>Contact Us!</Button>
    </VStack>

  )
}