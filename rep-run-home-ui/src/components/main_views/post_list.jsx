import { GridItem, Stack, Box } from '@chakra-ui/react'
import SearchInput from './search_input';
import PostItemView from './post_list_items/post_item_view';

function PostList() {

    function getListPosts() {
        return  [
            {
                "id": "1654686721_ungest.testnet",
                "account_id": "ungest.testnet",
                "topic": {
                    "id": "default",
                    "admin": "leeddwcs2.testnet",
                    "name": "default",
                    "created_time": "1652456259952152565",
                    "description": "default"
                },
                "title": "Made my own inputs on the rawbot",
                "body": "QmVhEJK1pksZCSRAPq8VKkm2joGd5To8xKEZJvZ5g66iXz",
                "post_type": {
                    "type": "Image",
                    "url": "https://ipfs.infura.io/ipfs/QmZGHcDS61N9gQL95LGkCVsV5HiVLV6L5Ee2PRLUwB1Dha"
                },
                "time": "1654686721377393519"
            },
            {
                "id": "1653094047_z26.testnet",
                "account_id": "z26.testnet",
                "topic": {
                    "id": "default",
                    "admin": "leeddwcs2.testnet",
                    "name": "default",
                    "created_time": "1652456259952152565",
                    "description": "default"
                },
                "title": "Coolest planet I've seen so far.",
                "body": "QmXY5zM3HWLhLqUaSC6YAR4vUn431eF8gWxkr6QDmG97T5",
                "post_type": {
                    "type": "Image",
                    "url": "https://ipfs.infura.io/ipfs/QmYeeg8ScRPDvYgL3Pb4eopHpCs7YxadoS2SajQ9fSigWh"
                },
                "time": "1653094047588303194"
            }
        ]
    }
  
    function renderListWhoToFollow() {
      const listPosts = getListPosts()
      const length = listPosts.length
      const listToRender = []
  
      for (let i = 0; i < length; i++) {
        listToRender.push(
          <PostItemView key={`post_${i}`} data={listPosts[i]}/>
        )
      }
  
      return listToRender
    }

    return (
        <>
        <GridItem colSpan={{base: '24', md: '19', lg: '12'}}>
            <Stack direction='column' spacing='16px' w={'full'} alignItems={'center'}>
                <Box display={{base: 'flex', lg: 'none'}} w={'full'} marginBottom={'15px'}>
                    <SearchInput/>
                </Box>
                
                {renderListWhoToFollow()}
            </Stack>
        </GridItem>
        </>
    );
}

export default PostList;
