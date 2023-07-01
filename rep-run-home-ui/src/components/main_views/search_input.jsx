import { Stack, Input } from '@chakra-ui/react'
import { FiSearch } from "react-icons/fi"

function SearchInput() {

  return (
    <Stack direction='row' spacing={'13px'} paddingX={'13px'} paddingY={'10px'} borderRadius={'12px'} bg={'chakra-body-bg'} textColor={'#3A3A3A'} align={'center'} alignItems={'center'} w={'full'}>
        <FiSearch color='#4269f2' size={'24px'}/>
        <Input placeholder='Search Rep' h='auto' padding={'0'} bg='transparent' fontSize={'12px'} borderRadius={'0'} border={'none'} _focusVisible={{border: 'none', zIndex: '0'}} fontWeight={'700'}/>
    </Stack>
  );
}

export default SearchInput;
