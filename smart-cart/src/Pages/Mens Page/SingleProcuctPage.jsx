import React from 'react'

import {Box} from '@chakra-ui/react'

import { useParams } from 'react-router-dom'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'


const SingleProcuctPage = () => {


    let {id} = useParams();

        id = +(id) ;


return (
    <Box border = '2px solid green' h = '100vh' p = '25px'>

        <Box>
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/' fontSize={14}>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/MensPage' fontSize={14} fontWeight={600}>Men T-Shirts</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#' fontSize={14} fontWeight={600}>Men T-Shirts</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>



    </Box>
  )
}

export default SingleProcuctPage