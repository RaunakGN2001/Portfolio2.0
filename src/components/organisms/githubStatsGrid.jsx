import { Grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import GridItemModified from './gridItemModified';


const GithubStatsGrid = ({ data }) => {
    return (
        <Grid templateColumns={{base: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)'}} gap={6} marginTop={'2rem'}>
            {data.map((item, index) => {
                return <GridItemModified key={index} title={item.label} value={item.value} />
            })}
        </Grid>
    )
}


export default GithubStatsGrid