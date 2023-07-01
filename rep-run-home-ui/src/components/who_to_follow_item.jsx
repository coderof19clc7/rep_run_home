import { Box, Stack, Text, Avatar, useColorMode } from '@chakra-ui/react'
import PrimaryGradientButton from './primary_gradient_button';
import PropTypes from "prop-types";
import { useContext } from 'react';
import AskSignInModalContext from '../contexts/ask_sign_in_modal';

function WhoToFollowItem({userName, userTag, avatar}) {
  const { onOpen } = useContext(AskSignInModalContext)
  const { colorMode } = useColorMode()
  function getAvatarName() {
    let avatarName = userTag
    if (avatarName.length > 0) {
      const firstWhiteSpaceIndex = avatarName.indexOf(' ')
      if (firstWhiteSpaceIndex > -1) {
          avatarName = avatarName.substring(0, firstWhiteSpaceIndex)
      }
    }
    return avatarName
  }

  function onClickFollow() {
    let isSignedIn = false
    if (isSignedIn) {
      console.log(`followed ${userName} (${userTag})`)
    } else {
      onOpen()
    }
  }


  return (
    <Stack w={'full'} direction={'column'} spacing={'8px'} align={'center'} alignItems={'center'}>
        <Stack w={'full'} direction={'row'} align={'center'} alignItems={'center'} justifyContent={'space-between'}>
        <Stack direction={'row'} spacing={'0.5rem'} align={'center'} alignItems={'center'} w={'calc(100% - 88px)'} cursor={'pointer'}>
            <Box w={'48px'} h={'48px'}>
            <Avatar name={getAvatarName()} src={avatar}/>
            </Box>
            <Stack direction={'column'} spacing={'0'} align={'start'} alignItems={'start'} w={'calc(100% - 56px)'}>
            <Text textAlign={'start'} w='full' textColor={colorMode === 'light' ? '#3A3A3A' : '#A6A6AA'} fontSize={'12px'} fontWeight={'700'} overflow={'hidden'} textOverflow={'ellipsis'} orientation='vertical' noOfLines={'1'}>
                {userName}
            </Text>
            <Text textAlign={'start'} w='full' textColor={'#A6A6AA'} fontSize={'10px'} fontWeight={'600'} overflow={'hidden'} textOverflow={'ellipsis'} orientation='vertical' noOfLines={'1'}>
                @{userTag}
            </Text>
            </Stack>
        </Stack>
        <PrimaryGradientButton onClick={onClickFollow} btnText='Follow' textSize={'tw-text-[12px]'} width={'tw-w-[68px]'} height={'tw-h-fit'} paddingY={'tw-py-[8px]'}/>
        </Stack>
    </Stack>
  );
}

WhoToFollowItem.propTypes = {
    userName: PropTypes.string,
    userTag: PropTypes.string,
    avatar: PropTypes.string
}
WhoToFollowItem.defaultProps = {
    userName: '',
    userTag: '',
    avatar: ''
}

export default WhoToFollowItem;
