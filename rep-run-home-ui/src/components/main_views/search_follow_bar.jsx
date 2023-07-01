import { GridItem, Stack, Text, useDisclosure, Modal } from '@chakra-ui/react'
import WhoToFollowItem from '../who_to_follow_item';
import ModalWhoToFollow from '../modals/modal_who_to_follow';
import SearchInput from './search_input';

function SearchFollowBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  function renderListWhoToFollow() {
    const listWhoToFollow = [
      {userName: 'vlxx try it please!!', userTag: 'vlxx try it please!!', avatar: ''},
      {userName: 'triet triet trong', userTag: 'heloxxccdsfd', avatar: 'https://rep-run.infura-ipfs.io/ipfs/QmVBuDvhJBcZDevbZNb62P7ZYoh5vYADEvvtrMqiQ6d7mu'},
      {userName: 'Rohit Gaikwad', userTag: 'rohitgaikwadderby', avatar: 'https://rep-run.infura-ipfs.io/ipfs/QmbPR1sK2xhadTGMipv5qxmHvW2deg4JBZCVq72DxT7ZiY'},
      {userName: 'bicarotmomo', userTag: 'bicarotmomo', avatar: ''},
      {userName: 'Vipul More', userTag: 'vipulm', avatar: 'https://rep-run.infura-ipfs.io/ipfs/QmQuoGW9UoVmC518jteDoPgX7p2MwASg6o3vfMfbTGQT34'},
      {userName: 'xjdsiicsicnwifninwfwf bdhshchd', userTag: 'hdlwoxjlwlqjfidjwksnofjqlc', avatar: ''},
    ]
    const length = listWhoToFollow.length
    const listToRender = []

    for (let i = 0; i < length; i++) {
      const user = listWhoToFollow[i]
      listToRender.push(
        <WhoToFollowItem key={`whoToFollow_${i}`} userName={user.userName} userTag={user.userTag} avatar={user.avatar}/>
      )
    }

    return listToRender
  }

  return (
    <>
      <GridItem display={{base: 'none', lg: 'block'}} colSpan={{lg: '6'}} top={0} zIndex={101}>
        <Stack direction='column' spacing='16px' w={'full'} alignItems={'center'} position={'sticky'} top={'92px'}>
            <SearchInput/>

            <Stack w='full' padding={'16px 16px 20px'} borderRadius={'12px'} direction={'column'} spacing={'18px'} alignItems={'start'} bg={'chakra-body-bg'} textColor={'#a6a6aa'}>
                <Text fontSize={'20px'} fontWeight={'700'}>Who to follow</Text>
                <Stack direction={'column'} spacing={'8px'} w={'full'} minHeight={'150px'} alignItems={'end'}>
                  <Stack w={'full'} direction={'column'} spacing={'8px'} align={'center'} alignItems={'center'}>
                    {renderListWhoToFollow()}
                  </Stack>
                  <Text onClick={onOpen} fontSize={'12px'} fontWeight={'800'} borderBottom={'1px solid'} lineHeight={'16px'} textAlign={'right'} cursor={'pointer'}>
                    View More
                  </Text>
                </Stack>
            </Stack>
        </Stack>
      </GridItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalWhoToFollow/>
      </Modal>
    </>
  );
}

export default SearchFollowBar;
