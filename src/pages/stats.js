import React, { useEffect, useState } from 'react'
import { Box, Grid, GridItem, Text, useColorModeValue, Skeleton, SkeletonCircle, SkeletonText, Spinner, Divider } from '@chakra-ui/react'
import KeyboardShortcutsMenu from '@/components/organisms/keyboardShortcutsMenu'
import Navbar from '@/components/organisms/navbar'
import { motion } from 'framer-motion'
import CustomHeading from '@/components/organisms/customHeading'
import GridItemModified from '@/components/organisms/gridItemModified'
import GithubStatsGrid from '@/components/organisms/githubStatsGrid'
import GitHubCalendar from 'react-github-calendar';
import Footer from './footer'
import Link from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const GithubStatsGridData = () => {


    const [githubData, setgithubData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        const fetchGithubData = async () => {

            try {
                setIsLoading(true);
                const response = await fetch('/api/githubInfo');
                const data = await response.json();


                const { public_repos, followers, following, public_gists } = data;

                const githubStatsData = [
                    { label: 'GitHub Repos', value: public_repos },
                    { label: 'GitHub Gists', value: public_gists },
                    { label: 'GitHub Followers', value: followers },
                    { label: 'GitHub Following', value: following }
                ]

                setgithubData(githubStatsData);
            } catch (error) {
                console.error('Error: ', error);
            }
            finally {
                setIsLoading(false);
            }

        };

        fetchGithubData();
    }, []);


    console.log(githubData);

    return isLoading === true ? (
        <Box display='flex' justifyContent='center' marginTop='1.5rem'>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='#eb2d72'
                size='xl'
            />
        </Box>
    ) : (
        <GithubStatsGrid data={githubData} />
    )

}


const Stats = () => {

    const githubContributionColorScheme = useColorModeValue('light', 'dark');
    // this is for adjusting the color mode of github contribution chart as I switch light and dark mode


    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // to remove hydration error
    if (!isMounted) {
        return null;
    }

    return (
        <>
            <KeyboardShortcutsMenu />
            <Navbar />
            <Box as={motion.div}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{
                    type: "ease-in-out",
                    stiffness: 260,
                    damping: 20,
                }} fontWeight='medium' className='About-container' minHeight='90vh' paddingInline={{ base: '1.5rem', sm: '5rem', md: '10rem', lg: '15rem' }} paddingTop='7rem' display='flex' flexDirection='column' alignItems={{ md: 'center', sm: 'center', lg: '' }}>
                <CustomHeading title={'Statistics'} marginBottom={'1rem'} />

                <Box width='full' as={motion.div} initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} >
                    <Text fontWeight='medium'>As a Developer, having a strong presence on GitHub is essential for establishing credibility, showcasing skills, and fostering collaboration. GitHub serves as a central hub for version control, enabling seamless collaboration on projects and providing a platform to highlight contributions and coding expertise.</Text>
                    <Text marginTop={'2rem'} fontWeight='medium'>These are my personal statistics about my <Text as='span' textDecoration='underline'><Link href='https://github.com/RaunakGN2001/' target='_blank'>Github Profile<ExternalLinkIcon mx='2px' /></Link></Text>.</Text>


                    <GithubStatsGridData /> {/* This component displays all my GitHub Stats in Grid format */}

                    <Box marginTop={'3rem'}>
                        <Text fontSize={["13px", "20px", "27px"]} fontWeight='bold' marginBottom={'1rem'}>GitHub Contributions ⭐️</Text>
                        <GitHubCalendar username='RaunakGN2001' colorScheme={githubContributionColorScheme} />
                    </Box>

                    <Footer />

                </Box>
            </Box>

        </>
    )
}

export default Stats