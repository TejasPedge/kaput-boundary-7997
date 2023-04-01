import React from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'

const Breadcrumbs = () => {
    return (
    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
        <BreadcrumbItem>
            <BreadcrumbLink href='#' fontSize={14}>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
            <BreadcrumbLink href='#' fontSize={14} fontWeight={600}>Myntra Fashion Store
</BreadcrumbLink>
        </BreadcrumbItem>

    </Breadcrumb>
    )
}

export default Breadcrumbs