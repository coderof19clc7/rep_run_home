import { Box, Button, GridItem, Image, Stack, Text } from '@chakra-ui/react'
import PrimaryGradientButton from '../primary_gradient_button'
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';

function MainHead() {
  const [ curIndex, setCurIndex ] = useState(1)
  function buildBtn(text, index) {
    const textColor = index === curIndex ? 'white' : ''
    const bgColor = index === curIndex ? '#5a5a5a80' : 'transparent'
    return (
      <Button onClick={() => setCurIndex(index)} size="sm" borderRadius={"12px"} border={"none"} _hover={{border: "none"}} _focus={{outline: "none"}} textColor={`${textColor}`} bg={`${bgColor}`} padding={'8px'}>{text}</Button>
    )
  }
  return (
    <>
      <GridItem colSpan={{lg: '6', md: '5'}} display={{base: 'none', md: 'block'}} top={0} position={'sticky'} zIndex={101}>
        <Stack w={'full'} h={'80px'} paddingStart={'8px'} justifyContent={'center'}>
          <Stack direction='row' w={'fit-content'} spacing='10px' align={'center'} alignItems={'center'} cursor={'pointer'}>
            <Image src='https://rep.run/_next/static/media/RepIcon.41878db9.svg' alt='Rep logo' />
            <Text fontSize={'36px'} fontFamily={'SakkalMajalla'} fontWeight={'bold'}>Rep</Text>
          </Stack>
        </Stack>
      </GridItem>

      <GridItem colSpan={{base: '24', md: '11', lg: '12'}} top={0} position={'sticky'} zIndex={101}>
        <Stack direction={'row'}spacing={'0.5rem'} w={'full'} h={{base: '55px', md: '80px'}} justifyContent={'space-between'}>
          <Stack direction='row' align={'center'} spacing={'10px'} alignItems={'center'} justifyContent={'start'} flex={'1 1 0%'}>
            <Box display={{base: 'block', md: 'none'}}>
              <Stack direction={'column'} align={'start'} alignItems={'start'} justifyContent={'center'} paddingLeft={'8px'}  h={'55px'} w={'full'}>
                <Stack direction={'row'} align={'center'} alignItems={'center'} cursor={'pointer'}>
                  <Image w={'48px'} h={'48px'} src='https://rep.run/_next/static/media/RepIcon.41878db9.svg' alt='Rep logo' />
                </Stack>
              </Stack>
            </Box>
            <Text fontSize={'20px'} fontWeight={'bold'}>Home</Text>
          </Stack>
          <Stack direction='row' align={'center'} alignItems={'center'} justifyContent={'flex-end'} fontSize={{base: '8px', md: '12px'}}>
            {buildBtn('Trending', 0)}
            {buildBtn('New', 1)}
            {buildBtn('Hot', 2)}
          </Stack>
        </Stack>
      </GridItem>

      <GridItem display={{base: 'none', md: 'block'}} colSpan={{ lg: '6', md: '8' }} top={0} position={'sticky'} zIndex={101}>
        <Stack direction='row' w={'full'} h={{base: '55px', md: '80px'}} paddingEnd={'8px'} alignItems={'center'} justifyContent={'end'}>
          <Stack direction='row' w={'full'} align={'center'} alignItems={'center'}>
            <PrimaryGradientButton 
              prefix={<FcGoogle className="tw-me-[0.5rem]"/>}
               btnText='Sign in with Google' 
               textSize={'tw-text-16px'} 
               width={'tw-w-full'}
            />
          </Stack>
        </Stack>
      </GridItem>
    </>
  );
}

export default MainHead;
