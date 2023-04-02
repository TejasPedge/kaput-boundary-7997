import React from 'react'
import { Accordion, AccordionItem, Box, AccordionPanel, AccordionButton,AccordionIcon } from '@chakra-ui/react'

const Accordions = () => {
return (
    <Accordion allowToggle >
        <AccordionItem border='none'>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Section 1 title
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
)
}

export default Accordions