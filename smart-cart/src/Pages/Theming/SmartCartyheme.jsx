import { extendTheme } from "@chakra-ui/react";




const breakpoints = {

    '300px' : '300px'


}

const pagination = {

        Button: {
          // 1. We can update the base styles
        baseStyle: {
            fontWeight: 'bold', // Normally, it is "semibold"
        },
          // 2. We can add a new button size or extend existing
        sizes: {

            xl: {
                h: '56px',
                fontSize: 'lg',
                px: '32px',
            },

            pg : {
                px : '8px',
                py : '7px',
                borderRadius : '2px'
            }

            }
        },
    }





export const theme = extendTheme({ breakpoints, components : pagination })
