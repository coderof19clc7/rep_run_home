import { Box, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Grid } from '@chakra-ui/react'
import WhoToFollowItem from '../who_to_follow_item'

function ModalWhoToFollow() {

  function renderListWhoToFollow() {
    const listWhoToFollow = [
      {userName: 'vlxx try it please!!', userTag: 'vlxx try it please!!', avatar: ''},
      {userName: 'triet triet trong', userTag: 'heloxxccdsfd', avatar: 'https://rep-run.infura-ipfs.io/ipfs/QmVBuDvhJBcZDevbZNb62P7ZYoh5vYADEvvtrMqiQ6d7mu'},
      {userName: 'Rohit Gaikwad', userTag: 'rohitgaikwadderby', avatar: 'https://rep-run.infura-ipfs.io/ipfs/QmbPR1sK2xhadTGMipv5qxmHvW2deg4JBZCVq72DxT7ZiY'},
      {userName: 'bicarotmomo', userTag: 'bicarotmomo', avatar: ''},
      {userName: 'Vipul More', userTag: 'vipulm', avatar: 'https://rep-run.infura-ipfs.io/ipfs/QmQuoGW9UoVmC518jteDoPgX7p2MwASg6o3vfMfbTGQT34'},
      {userName: 'xjdsiicsicnwifninwfwf bdhshchd', userTag: 'hdlwoxjlwlqjfidjwksnofjqlc', avatar: ''},
      {userName: 'bfjsjciek', userTag: 'jfkwllslvkwpejhtwojcngna', avatar: ''},
      {userName: 'repruntesters', userTag: 'repruntesters', avatar: ''},
      {userName: 'Vinay  Datir', userTag: 'vinay_1', avatar: 'https://rep-run.infura-ipfs.io/ipfs/QmZuF1D76KEXuPFHz7qa3HK7SPCwaV15yB4b5Y2rbaqZGU'},
      {userName: 'vinay_1_1', userTag: 'vinay_1_1', avatar: ''},
      {userName: 'vinay', userTag: 'newvina', avatar: 'https://rep-run.infura-ipfs.io/ipfs/QmRDJmUgoGCnUkmcivmspCQiSQnPaAcywErhmHppByfQMV'},
      {userName: 'aneeqahmed', userTag: 'aneeqahmed', avatar: ''},
      {userName: 'vinay910', userTag: 'vinay910', avatar: ''},
      {userName: '<3', userTag: 'vlxx_collab_xnxx', avatar: ''},
      {userName: 'Vipul  More', userTag: 'morevipul', avatar: ''},
      {userName: 'neilharan3', userTag: 'neilharan3', avatar: ''},
      {userName: 'Vipul', userTag: 'shroud', avatar: ''},
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
        <ModalOverlay />
        <ModalContent maxWidth={'xl'}>
          <ModalHeader>Top Users</ModalHeader>
          <ModalCloseButton border={'none'} _hover={{border: 'none', bg: 'var(--chakra-colors-blackAlpha-100)'}} _focus={{outline: 'none'}} _focusVisible={{outline: 'none', boxShadow: 'var(--chakra-shadows-outline)'}}/>
          <ModalBody>
            <Box h={'350px'} sx={{
                '&::-webkit-scrollbar': {
                    width: '5px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background:' #a6a6aa88',
                    'border-radius': '10px',
                },
                '&::-webkit-scrollbar-track': {
                    'box-shadow':' inset 0 0 5px #00000033',
                    'border-radius': '10px',
                }
            }}>
                <Grid padding={'5px'} templateColumns='repeat(auto-fit, minmax(200px, 1fr))' gap={'20px'} maxH={'full'} overflowY={'auto'} >
                {renderListWhoToFollow()}
                </Grid>
            </Box>
          </ModalBody>
        </ModalContent>
    </>
  );
}

export default ModalWhoToFollow;
