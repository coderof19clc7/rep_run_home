import { HStack } from "@chakra-ui/react";

function BackgroundBlur() {
    return (
        <HStack flexDirection={"row"}top={"20%"} position={"fixed"} marginX={"auto"} marginY={"0"} height={"100%"} width={"100%"} alignItems={"normal"} spacing={0} justifyContent={"center"}
      >
        <div className='tw-opacity-50 tw-flex tw-items-center tw-justify-center tw-flex-shrink-0 tw-flex-grow-0 tw-w-[490px] tw-h-[490px] tw-rounded-full tw-bg-[#ff7a00] tw-blur-[100px]'/>
          
        <div className='tw-opacity-50 tw-flex tw-items-center tw-justify-center tw-flex-shrink-0 tw-flex-grow-0 tw-w-[490px] tw-h-[490px] tw-rounded-full tw-bg-[#9747ff] tw-blur-[100px]'/>
      </HStack>
    );
}

export default BackgroundBlur;
