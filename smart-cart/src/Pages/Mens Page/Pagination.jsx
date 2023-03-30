import React from 'react'
import { Box, Button} from '@chakra-ui/react'

const PaginationComp = ({total,ChangePage}) => {

    let buttons = new Array(Math.ceil(total/50)).fill('');

    const Paginate = (e) => {

        let val = + (e.target.innerText);

        ChangePage(val);

    }

    
    
return (

   
    <Box borderTop = '1px solid' borderColor={'gray.400'} mt = '80px' px = '5px' py = '20px'>


                {buttons.map((_,i) => <Button ml = '5px' mb = '5px' onClick = {Paginate}>{i + 1}</Button>)}
            
    </Box>
    
)
}

export default PaginationComp