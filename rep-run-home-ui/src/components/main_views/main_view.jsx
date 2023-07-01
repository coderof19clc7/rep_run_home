import { Grid } from '@chakra-ui/react'
import MainHead from './main_head'
import MainBody from './main_body'

function MainView() {

    return (
        <div className={`tw-flex tw-items-center tw-flex-col tw-gap-1 tw-w-full tw-min-h-[calc(100vh - 100px)] tw-relative`}>
            <Grid paddingX={{xl:'15%', lg: '2%', sm: '24px', base: '15px'}} templateColumns='repeat(24, minmax(0px, 1fr))' templateRows='repeat(1, minmax(0px, 1fr))' columnGap={"24px" } rowGap={'12px'} w={'full'}>
              <MainHead/>
              <MainBody/>
            </Grid>
      </div>
    );
}

export default MainView;
