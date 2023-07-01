import { Box, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Text, Stack, ModalFooter, ModalHeader, Image, Button } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import PrimaryGradientButton from '../primary_gradient_button';
import * as nearAPI from "near-api-js"

function ModalAskSignIn() {

    async function tryNearApiJS() {
        // function executes the "Connect to NEAR WALLET" (first_ requirement)
        const { keyStores } = nearAPI;
        const myKeyStore = new keyStores.BrowserLocalStorageKeyStore()
    
        const { connect } = nearAPI
    
        const connectionConfig = {
            networkId: "testnet",
            keyStore: myKeyStore, // first create a key store 
            nodeUrl: "https://rpc.testnet.near.org",
            walletUrl: "https://wallet.testnet.near.org",
            helperUrl: "https://helper.testnet.near.org",
            explorerUrl: "https://explorer.testnet.near.org",
        };
        const nearConnection = await connect(connectionConfig)
        console.log("current connection:", nearConnection.connection)
    
        // create wallet connection
        const walletConnection = new nearAPI.WalletConnection(nearConnection, 'rep-run-home-ui')
    
        if (!walletConnection.isSignedIn()) {
            walletConnection.requestSignIn({
            contractId: "dev-1686996788625-41566444963360",
            methodNames: [], // optional
            // successUrl: "REPLACE_ME://.com/success", // optional redirect URL on success
            // failureUrl: "REPLACE_ME://.com/failure" // optional redirect URL on failure
            })
        } else {
            console.log('Already signed in --> sign ou now')
            walletConnection.signOut()
        }
    }

    return (
        <>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader flex={'0 1 0%'}/>
                <ModalCloseButton border={'none'} _hover={{border: 'none', bg: 'var(--chakra-colors-blackAlpha-100)'}} _focus={{outline: 'none'}} _focusVisible={{outline: 'none', boxShadow: 'var(--chakra-shadows-outline)'}}/>
                <ModalBody>
                    <Box padding={'20px 15px'} borderRadius={'12px'} bg={'white'}>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} marginBottom={'10px'}>
                            <Image src='https://rep.run/_next/static/media/logo_near.9f0b0c40.svg'/>
                        </Box>
                        <Text marginBottom={'20px'} fontSize={'20px'} lineHeight={'24px'} textColor={'#3a3a3a'} textAlign={'center'}>
                            Connect with NEAR WALLET
                        </Text>
                        <Stack direction={'column'} spacing={'8px'}>
                            <PrimaryGradientButton onClick={tryNearApiJS} width={'tw-w-full'} btnText='Connect wallet'/>
                            <Text textAlign={'center'}>
                                OR
                            </Text>
                            <Button onClick={() => {}} variant={'outline'} leftIcon={<FcGoogle/>} padding={'20px'} marginBottom={'30px'} borderColor={'gray.200'} borderWidth={'3px'} _hover={{bg: 'gray.100', borderColor: 'gray.200'}} _focus={{outline: 'none'}} _focusVisible={{outline: 'none', boxShadow: 'outline'}} textColor={'#3a3a3a'}>
                                Sign in with Google
                            </Button>
                        </Stack>
                    </Box>
                </ModalBody>
                <ModalFooter/>
            </ModalContent>
        </>
    );
}

export default ModalAskSignIn;
