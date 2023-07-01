import { Stack, Text, useDisclosure, Modal, Box, Avatar, Wrap, WrapItem, Popover, PopoverTrigger, Icon, PopoverContent, PopoverBody, Button, useColorModeValue, AspectRatio, Image } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'
import { FiUserPlus, FiBookmark, FiHeart, FiMessageSquare, FiRepeat, FiShare } from 'react-icons/fi'
import ModalSharePost from '../../modals/modal_share_post'
import { useContext } from 'react'
import AskSignInModalContext from '../../../contexts/ask_sign_in_modal'
import PropTypes from 'prop-types'
import moment from 'moment/moment'

function PostItemView({ data }) {
    const { onOpen: onOpenAskSIgnInModal } = useContext(AskSignInModalContext)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const textColor = useColorModeValue('#3A3A3A', '#a6a6aa')
    const textTimeAgoColor = useColorModeValue('#4269F2', '#a6a6aa')
    
    function getAvatarName() {
        let avatarName = data['account_id']
        if (avatarName.length > 0) {
            const firstWhiteSpaceIndex = avatarName.indexOf(' ')
            if (firstWhiteSpaceIndex > -1) {
                avatarName = avatarName.substring(0, firstWhiteSpaceIndex)
            }
        }
        console.log(avatarName)
        return avatarName
    }

    function getTimeDifferenceString() {
        const timeAgoDuration = moment.duration(moment(moment.now()).diff(moment(parseInt(data['time'])/1000000)))
        let fullString = ''
        let shortString = ''
        
        if (timeAgoDuration.years() >= 1) {
            shortString = `${timeAgoDuration.years()}y`
            fullString = timeAgoDuration.years() > 1 ? `${timeAgoDuration.years()} years ago` : 'a year ago'
        } else if (timeAgoDuration.months() >= 1) {
            shortString = `${timeAgoDuration.months()}m`
            fullString = timeAgoDuration.months() > 1 ? `${timeAgoDuration.months()} months ago` : 'a month ago'
        } else if (timeAgoDuration.weeks() >= 1) {
            shortString = `${timeAgoDuration.weeks()}w`
            fullString = timeAgoDuration.weeks() > 1 ? `${timeAgoDuration.weeks()} weeks ago` : 'a week ago'
        } else if (timeAgoDuration.days() >= 1) {
            shortString = `${timeAgoDuration.days()}d`
            fullString = timeAgoDuration.days() > 1 ? `${timeAgoDuration.days()} days ago` : 'a day ago'
        } else if (timeAgoDuration.hours() >= 1) {
            shortString = `${timeAgoDuration.hours()}h`
            fullString = timeAgoDuration.hours() > 1 ? `${timeAgoDuration.hours()} hours ago` : 'a hour ago'
        } else if (timeAgoDuration.minutes() >= 1) {
            shortString = `${timeAgoDuration.minutes()}min`
            fullString = timeAgoDuration.minutes() > 1 ? `${timeAgoDuration.minutes()} minutes ago` : 'a minute ago'
        } else {
            fullString = 'a moment ago'
            shortString = 'now'
        }

        return [fullString, shortString]
    }
    const listTimAgoString = getTimeDifferenceString()

    function renderPopover(triggerComponent, padding, icon1, icon2, text1, text2, onClick1, onClick2, isRetweetMenu) {
        let isSignedIn = false
        function renderMenuBtn(icon, text, onClick) {
            return (
                <Button onClick={() => {
                    if (isSignedIn) {
                        onClick()
                    } else {
                        onOpenAskSIgnInModal()
                    }
                }} 
                variant={isRetweetMenu ? '' : 'ghost'} 
                bg={'none'} w={'full'} 
                minW={'auto'} h={'fit-content'} 
                paddingY={isRetweetMenu ? '0px' : '7px'} 
                paddingInlineStart={isRetweetMenu ? '0px' : 'var(--chakra-space-3)'} 
                paddingInlineEnd={isRetweetMenu ? '0px' : 'var(--chakra-space-3)'} 
                justifyContent={'left'} 
                border={'none'} 
                _hover={{bgColor: isRetweetMenu ? 'none' : '#55555522', border: 'none'}}
                _focus={{outline: 'none'}} 
                _focusVisible={{boxShadow: 'none', outline: 'none'}} 
                fontWeight={isRetweetMenu ? '800' : '400'}>
                    <Stack direction={'row'} spacing={'0.5rem'} align={'center'} alignItems={'center'} cursor={'pointer'} stroke={'#a6a6aa'} color={textColor} opacity={'1'} _hover={{opacity: isRetweetMenu ? '0.75' : '1'}}>
                        <Icon w={'24px'} h={'24px'} as={icon}/>
                        <Text fontSize={isRetweetMenu ? '12px' : '15px'} overflow={'hidden'} textOverflow={'ellipsis'} orientation='vertical' noOfLines={'1'} wordBreak={'break-all'}>
                            {text}
                        </Text>
                    </Stack>
                </Button>
            );
        }

        return <Popover placement='bottom-end'>
            <PopoverTrigger>
                {triggerComponent}
            </PopoverTrigger>
            <PopoverContent minW={'max-content'} width={'fit-content'} maxW={'313px'} padding={padding} border={'transparent'} boxShadow={'var(--chakra-shadows-xl)'} _focusVisible={{outline: 'none'}}>
                <PopoverBody padding={'0'}>
                    <Stack w={'full'} direction={'column'} spacing={isRetweetMenu ? '25px' : '5px'} align={'start'} alignItems={'start'} >
                        {renderMenuBtn(icon1, text1, onClick1)}
                        {renderMenuBtn(icon2, text2, onClick2)}
                    </Stack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    }

    return (
        <>
            <Stack w='full' direction={'column'} align={'center'} alignItems={'center'} cursor={'pointer'} pointerEvents={'all'} opacity={'1'}>
                <Stack padding={{base: '16px 12px', md: '16px'}} w='full' direction={'column'} align={'start'} alignItems={'start'} bg={'chakra-body-bg'} borderRadius={'12px'}>
                    <Stack w='full' direction={'row'} spacing={{base: '10px', md: '18px'}} align={'start'} alignItems={'start'}>
                        <Avatar w={'48px'} h={'48px'} name={getAvatarName()} src={''}/>
                        <Stack flex={'1 1 0%'} direction={'column'} spacing={'8px'} align={'start'} alignItems={'start'}>
                            {/* user's name, tag, time post, top action menu */}
                            <Stack w={'full'} direction={'row'} spacing={'0.5rem'} justifyContent={'space-between'} sx={{
                                '.chakra-popover__popper': {
                                    'box-shadow': '5px 5px 10px #0005',
                                    'border-radius': '8px'
                                }
                            }}>
                                <Stack flex={'1 1 0%'} direction={'row'} spacing={'16px'} justifyContent={'space-between'}>
                                    <Wrap w={'fit-content'} maxW={{base: '1000px', md: '330px', lg: '230px'}} spacing={'0'} overflow={'hidden'} fontSize={{base: '12px', md: '16px'}} _hover={{opacity: 0.75}} sx={{
                                        'ul:first-of-type': {
                                            '--chakra-wrap-x-spacing': '7px',
                                            '--chakra-wrap-y-spacing': '0px',
                                            '--wrap-x-spacing': 'calc(var(--chakra-wrap-x-spacing) / 2)',
                                            '--wrap-y-spacing': 'calc(var(--chakra-wrap-y-spacing) / 2)',
                                            margin: 'calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)'
                                        }
                                    }}>
                                        <WrapItem sx={{
                                            margin: 'var(--wrap-y-spacing) var(--wrap-x-spacing)'
                                        }}>
                                            <Text maxW={{base: '90px', md: '150px'}} textColor={textColor} fontWeight={'800'} overflow={'hidden'} textOverflow={'ellipsis'} orientation='vertical' noOfLines={'1'}>
                                                {data["account_id"]}
                                            </Text>
                                        </WrapItem>
                                        <WrapItem sx={{
                                            margin: 'var(--wrap-y-spacing) var(--wrap-x-spacing)'
                                        }}>
                                            <Text maxW={{base: '90px', md: '150px'}} fontWeight={'600'} textColor={'#a6a6aa'} overflow={'hidden'} textOverflow={'ellipsis'} orientation='vertical' noOfLines={'1'} wordBreak={'break-all'}>
                                                @{data["account_id"]}
                                            </Text>
                                        </WrapItem>
                                    </Wrap>
                                    <Box paddingRight={'10px'} textColor={textTimeAgoColor} fontSize={{base: '12px', md: '16px'}} fontWeight={'700'}>
                                        <Box display={{base: 'none', md: 'block'}}>{listTimAgoString[0]}</Box>
                                        <Box display={{base: 'block', md: 'none'}}>{listTimAgoString[1]}</Box>
                                    </Box>
                                </Stack>
                                {renderPopover(
                                    <Stack direction={'column'} cursor={'pointer'}>
                                        <Stack direction={'row'} cursor={'pointer'} align={'center'} alignItems={'center'} stroke={textColor} textColor={textColor} opacity={'1'}>
                                            <Icon as={BsThreeDots} w={{base: '16px', md: '24px'}} h={{base: '16px', md: '24px'}}/>
                                        </Stack>
                                    </Stack>,
                                    '8px',
                                    FiUserPlus,
                                    FiBookmark,
                                    'Follow',
                                    'Add bookmark',
                                    () => {},
                                    () => {},
                                )}
                            </Stack>

                            {/* title of post */}
                            <Text w={'full'} h={'fit-content'} paddingBottom={'16px'} textSize={{base: '14px', md: '16px'}} textAlign={'left'} wordBreak={'break-word'} whiteSpace={'pre-wrap'}>
                                {`${data['title']}\n${data['body']}`}
                            </Text>
                            {/* post content */}
                            <Box w={'full'}>
                                <AspectRatio>
                                    <Box w='full' h='full' borderRadius={'12px'} overflow={'hidden'} position={'absolute'} inset={'0'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                        <Image src={data['post_type']['url']} alt=''/>
                                    </Box>
                                </AspectRatio>
                            </Box>

                            {/* post interactions */}
                            <Stack w={'full'} direction={'column'} align={'start'} alignItems={'start'}>
                                <Stack w={'full'} h={'var(--chakra-sizes-10)'} direction={'row'} align={'center'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Stack onClick={onOpenAskSIgnInModal} direction={'row'} spacing={'0.5rem'} align={'center'} alignItems={'center'} cursor={'pointer'} stroke={'#a6a6aa'} color={'#a6a6aa'} opacity={'1'} _hover={{opacity: '0.75'}}>
                                        <FiHeart size={'24px'}/>
                                        <Text textColor={'#a6a6aa'} overflow={'hidden'} textOverflow={'ellipsis'} orientation='vertical' noOfLines={'1'} wordBreak={'break-all'}>
                                            1
                                        </Text>
                                    </Stack>

                                    <Stack direction={'row'} spacing={'0.5rem'} align={'center'} alignItems={'center'} cursor={'pointer'} stroke={'#a6a6aa'} color={'#a6a6aa'} opacity={'1'} _hover={{opacity: '0.75'}}>
                                        <FiMessageSquare size={'24px'}/>
                                        <Text textColor={'#a6a6aa'} overflow={'hidden'} textOverflow={'ellipsis'} orientation='vertical' noOfLines={'1'} wordBreak={'break-all'}>
                                            0
                                        </Text>
                                    </Stack>
                                    
                                    {renderPopover(
                                        <Stack direction={'column'} cursor={'pointer'} align={'center'} alignItems={'center'} justifyContent={'center'}>
                                            <Stack direction={'row'} spacing={'0.5rem'} align={'center'} alignItems={'center'} cursor={'pointer'} stroke={'#a6a6aa'} color={'#a6a6aa'} opacity={'1'} _hover={{opacity: '0.75'}}>
                                                <FiRepeat size={'24px'}/>
                                                <Text textColor={'#a6a6aa'} overflow={'hidden'} textOverflow={'ellipsis'} orientation='vertical' noOfLines={'1'} wordBreak={'break-all'}>
                                                    0
                                                </Text>
                                            </Stack>
                                        </Stack>,
                                        '23px 27px',
                                        FiRepeat,
                                        FiRepeat,
                                        'ReRep',
                                        'Quote Rep',
                                        () => {},
                                        () => {},
                                        true
                                    )}

                                    <Stack onClick={onOpen} direction={'row'} spacing={'0.5rem'} align={'center'} alignItems={'center'} cursor={'pointer'} stroke={'#a6a6aa'} color={'#a6a6aa'} opacity={'1'} _hover={{opacity: '0.75'}}>
                                        <FiShare size={'24px'}/>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalSharePost onClose={onClose} url={'https://rep.run/post/account/vipulm.testnet/1688129878_vipulm.testnet'}/>
            </Modal>
        </>
    );
}

PostItemView.propTypes = {
    data: PropTypes.object.isRequired
}

export default PostItemView;
