import { Box, Link, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import CustomLink from './customLink';
import { motion } from 'framer-motion';

const ExperienceCard = ({ name, companyURL, period, role, imageURL, proofOfWork, responsibilities, lastCard }) => {
    console.log(lastCard);

    const roleCardBG = useColorModeValue('#262c3d', '#a61f50');
    const textColor = useColorModeValue('black', 'white');
    const borderBottomColor = useColorModeValue('1px solid #efefef', '1px solid #828282')

    return (
        <Box as={motion.div} initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
            borderBottom={borderBottomColor} display={'flex'} flexDirection={['column', 'column', 'row']} width='100%' gap={'3rem'} marginBottom={'3rem'} paddingBottom={'3rem'}>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={'1rem'}>
                <Image src={imageURL} width={'400'} height={'400'} placeholder='blur' blurDataURL={imageURL}/>
                <Text color={textColor} textDecoration={'underline'} fontWeight={'bold'} fontSize={["15px", "17px", "20px"]}><Link _hover={{color: '#eb2d72', textDecoration: 'underline'}} href={companyURL} target='_blank'>{name}</Link></Text>
            </Box>
            <Box>
                <Text backgroundColor={roleCardBG} textAlign={'center'} color={'white'} marginBottom={'1.5rem'} fontWeight={'bold'} fontSize={["15px", "17px", "20px"]}>{role} ︱ {period}</Text>
                <Box marginBottom='1rem'>
                    {responsibilities.map((eachResp) => {
                        return <li>{eachResp}</li>
                    })}
                </Box>
                <CustomLink text='Proof of Work' url={proofOfWork} marginTop='1rem' />
            </Box>
        </Box>
    )
}

export default ExperienceCard