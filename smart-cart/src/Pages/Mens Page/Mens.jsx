import React from 'react'
import { Box, Text, HStack, VStack } from '@chakra-ui/react'
import Breadcrumbs from './Breadcrumb'
import { Select } from '@chakra-ui/react'
import AllProducts from './AllProducts'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../../REDUX/Men\'s Reducer/action'
import { CircularProgress } from '@chakra-ui/react';
import Error from './ErrorPage'
import { useSearchParams } from 'react-router-dom'

const Mens = () => {

    const dispatch = useDispatch();

    const data = useSelector(({mensReducer}) => mensReducer) 

    const {isLoading,isError, total} = data;

    const [params,setParams] = useSearchParams();

    let pagenumber = +(params.get('_page'));

    let ordertext = params.get('_order');

    let categoryfromparam = params.getAll('categories');

    let brandfromparam = params.getAll('brand');

    let colorfromparam = params.getAll('color');

    console.log(pagenumber)

    const [page, setPage] = useState(pagenumber || 1);

    const [order, setOrder] = useState(ordertext || "");

    // ---------------------------------------------//

    const [category , setcategory] = useState(categoryfromparam || []);

    const [brand, setbrand] = useState(brandfromparam || []);

    const [color, setcolor] = useState(colorfromparam || []);

    // ---------------------------------------------//


    useEffect(() => {

        let params_obj = { _page : page, _limit :50, }


        if(order !== 'ratings' && order !== "") {

            params_obj['_sort'] = 'price';

            params_obj['_order'] = order;

        }

        if(order === 'ratings' ) {

            params_obj['_sort'] = 'ratings';

            params_obj['_order'] = 'desc';

        }

            params_obj.categories = category;

            params_obj.brand = brand;

            params_obj.color = color;

        setParams({...params_obj,'_order' : params_obj['_sort'] === 'ratings' ? 'ratings' : order });

        dispatch(getAllData(params_obj));

    },[page,order,category,brand,color]);

    const ChangePage = (page) => {

        setPage(page);

    }

    const SortBy = (e) => {

        const {value} = e.target;

            setOrder(value);

            console.log(value);

        }

        // -----------------Filter by category-------------//

        const handleChangeCategories = (e) => {

            const {value} = e.target;

            let arr = [...category];

            if(arr.includes(value)) {
                arr = arr.filter((el) => el !== value);
            }else {
                arr.push(value);
            }

            setcategory(arr);

            console.log(value);

        }

        // -----------------Filter by brand name ----------------

        const handleChangeBrand = (e) => {

            const {value} = e.target;

            let arr = [...brand];

            if(arr.includes(value)) {

                arr = arr.filter((el) => el !== value);

            }else {

                arr.push(value);

            }

            setbrand(arr);

        }


        // -----------------Filter by color-------------//

        const handleChangeColor = (e) => {

            const {value} = e.target;

            let arr = [...color];

            if(arr.includes(value)) {

                arr = arr.filter((el) => el!== value)

            }else {

                arr.push(value);

            }

            setcolor(arr);





        }


        




    console.log('rerendered mens',color);

    if(isError) {

        return <Error/>
    }




return (

<Box>
    <Box py = '15px' px = '25px' margin={'auto'} >

        <Box>
            <Breadcrumbs />
            <Text mt = '10px'> <Text fontWeight={'700'} fontSize = '15' as = 'span'>Men T-Shirts </Text> - 86397 items</Text>
        </Box>

        <Box mt = '20px' display = 'flex' justifyContent={'space-between'} alignItems = 'center'>
            <Text fontWeight={600}>FILTERS</Text>
            <Select value = {order} onChange = {SortBy} border = '1px solid' borderColor = 'rgb(182, 182, 182)' variant = 'none' w = '300px' size='md' >
                <option value="">Sort By : Recommended</option>
                <option value="desc">Price : High to Low</option>
                <option value="asc">Price : Low to High</option>
                <option value="ratings">Customer Ratings</option>
            </Select>
        </Box>

    </Box>


    {/* ----------------------[ LOADING ]--------------------------------- */}

    <Box borderTop={'1px solid rgb(182, 182, 182)'} >

        <Box pl = '25px' margin={'auto'} >
            { (isLoading) ?  (<VStack w = '100%' align = 'center' mt = '150px' mb = '100px'>

            <CircularProgress isIndeterminate color='blue.300' />
  
  </VStack>) :

        <Box  display = 'flex' >
                <Sidebar color = {color} handleChangeColor = {handleChangeColor} handleChangeBrand = {handleChangeBrand} brand = {brand} category = {category} handleChangeCategories = {handleChangeCategories}></Sidebar>
                <AllProducts page = {page} ChangePage = {ChangePage}></AllProducts>
        </Box>
}
        </Box>
        
        

    </Box>
</Box>
)
}

export default Mens