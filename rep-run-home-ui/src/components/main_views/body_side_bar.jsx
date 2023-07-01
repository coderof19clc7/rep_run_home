import { Box, GridItem, Stack, Text, Wrap, Link, useColorMode } from '@chakra-ui/react'
import PrimaryGradientButton from '../primary_gradient_button'
import { FaRetweet } from "react-icons/fa6";
import { FiMoon, FiSun, FiHome } from "react-icons/fi";
import { useContext, useState } from 'react';
import AskSignInModalContext from '../../contexts/ask_sign_in_modal';

function BodySideBar() {
  const [ curTab, setCurTab ] = useState(0)
  const { colorMode, toggleColorMode } = useColorMode()
  const { onOpen } = useContext(AskSignInModalContext)

  function buildTab(icon, text, tabIndex) {
    const textColor = tabIndex === curTab ? '!tw-text-[#4269F2]' : ''
    return (
      <Box onClick={() => setCurTab(tabIndex)} w={'full'} cursor={'pointer'} _hover={{opacity: '0.75'}}>
          <Box w={'full'} pointerEvents={'auto'}>
          <Stack className={`${textColor}`} direction={'row'} w={'full'} spacing={'27px'} cursor={'pointer'} align={'center'}>
              {icon({size: 24, className: `tw-truncate ${textColor}`})}
              <Text display={{base: 'none', lg: 'block'}} fontWeight={'800'}>{text}</Text>
          </Stack>
          </Box>
      </Box>
    )
  }

  function buildLink(href, text) {
    return (
        <Link _hover={{textColor: '#a6a6aa', textDecoration: 'underline'}} href={href} isExternal>
            {text}
        </Link>
    )
  }

  return (
    <GridItem display={{base: 'none', md:'block'}} colSpan={{lg: '6', md: '5'}} top={0} zIndex={101}>
        <Stack direction='column' spacing='16px' w={'full'} alignItems={'center'} position={'sticky'} top={'92px'}>
            <Stack direction='column' spacing={'30px'} paddingX={'15px'} paddingTop={'34px'} paddingBottom={'27.5'} borderRadius={'12px'} bg={'chakra-body-bg'} align={'center'} alignItems={'center'} minWidth={'125px'} w={'full'}>
                <Stack  direction='column' spacing='32px' w={'full'} paddingX={'22px'} align={'start'} alignItems={'start'}>
                    {buildTab(FiHome, 'Home', 0)}
                    {buildTab(FaRetweet, 'Blog', 1)}
                </Stack>
                <PrimaryGradientButton onClick={onOpen} btnText='Say'/>
                <Stack onClick={() => toggleColorMode()} direction={'row'} spacing={'12px'} borderRadius={'full'} paddingX={'2.3px'} paddingY={'2px'} bg={colorMode == 'light' ? '#cbcbd4' : '#252630'} cursor={'pointer'}>
                    <Box borderRadius={'full'} bg={colorMode == 'light' ? 'transparent' : '#4269f2'} padding={'2px'}>
                        <FiMoon stroke={colorMode === 'light' ? '#a6a6aa' : '#3a3a3a'}/>
                    </Box>
                    <Box borderRadius={'full'} bg={colorMode == 'light' ? '#4269f2' : 'transparent'} padding={'2px'}>
                        <FiSun stroke={colorMode === 'light' ? 'white' : '#3a3a3a'}/>
                    </Box>
                </Stack>
            </Stack>

            <Stack paddingX={'22px'} direction={'column-reverse'} spacing={'0.5rem'} alignItems={'start'} justifyContent={'start'} textColor={'#a6a6aa'}>
                <Text fontSize={'10px'} fontWeight={'700'}>© 2023 Rep.</Text>
                <Wrap spacingX={'8px'} fontSize={'10px'} fontWeight={'700'}>
                    {buildLink('https://rep.run/privacy/terms-of-service', 'Term of Services')}
                    {buildLink('https://rep.run/privacy/privacy-policy', 'Privacy Policy')}
                    {buildLink('https://rep.run/privacy/cookies-policy', 'Cookies Policy')}
                </Wrap>
            </Stack>
        </Stack>
    </GridItem>
  );
}

export default BodySideBar;
