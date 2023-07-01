import { Box, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Text, Stack, Link, Icon, ModalFooter, useToast } from '@chakra-ui/react'
import { BsTwitter, BsReddit, BsLink45Deg } from 'react-icons/bs'
import PropTypes from 'prop-types'

function ModalSharePost({url, onClose}) {
    const toast = useToast()

    function renderShareIconBtn(index) {
        let icon = BsTwitter
        let hoverColor = '#1d9bf0'
        let mediaUrl = 'https://twitter.com/intent/tweet'
        if (index === 1) {
            icon = BsReddit
            hoverColor = '#ff4500'
            mediaUrl = 'https://reddit.com/submit'
        } else if (index === 2) {
            icon = BsLink45Deg
            hoverColor = '#4269F2'
        }
        const iconComponent = <Icon w={'30px'} h={'30px'} as={icon}/>

        let component = <Link onClick={onClose} href={`${mediaUrl}?url=${url}`} textDecoration={'none'} _hover={{textColor: hoverColor, textDecoration: 'none'}} isExternal>
            {iconComponent}
        </Link>

        if (index === 2) {
            component = <Box onClick={async () => {
                if ("clipboard" in navigator) {
                    console.log("ok here")
                    await navigator.clipboard.writeText(url);
                    console.log("ok done here")
                } else {
                    console.log("ok old")
                    document.execCommand("copy", true, url);
                    console.log("ok done old")
                }
                onClose()
                toast({
                    title: 'Copied',
                    status: 'success',
                    position: 'top',
                    duration: 3000,
                    isClosable: true,
                })
            }} _hover={{textColor: hoverColor}} cursor={'pointer'}>
                {iconComponent}
            </Box>
        }

        return component
    }

    return (
        <>
            <ModalOverlay />
            <ModalContent maxWidth={'xs'}>
                <ModalCloseButton border={'none'} _hover={{border: 'none', bg: 'var(--chakra-colors-blackAlpha-100)'}} _focus={{outline: 'none'}} _focusVisible={{outline: 'none', boxShadow: 'var(--chakra-shadows-outline)'}}/>
                <ModalBody>
                    <Box marginY={'20px'}>
                        <Text fontSize={'20px'} fontWeight={'600'}>Share Post To</Text>
                    </Box>
                    <Stack direction={'row'} spacing={'30px'} align={'center'} alignItems={'center'} justifyContent={'center'}>
                        {renderShareIconBtn(0)}
                        {renderShareIconBtn(1)}
                        {renderShareIconBtn(2)}
                    </Stack>
                </ModalBody>
                <ModalFooter/>
            </ModalContent>
        </>
    );
}

ModalSharePost.propTypes = {
    url: PropTypes.string,
    onClose: PropTypes.func.isRequired
}
ModalSharePost.defaultProps = {
    url: '',
}

export default ModalSharePost;
