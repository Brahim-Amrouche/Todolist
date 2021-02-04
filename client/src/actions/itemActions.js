import axios from 'axios';
import {GET_ITEMS , ADD_ITEMS , DELETE_ITEMS , ITEMS_LOADING} from '../actions/types';

export const getItems=()=> dispatch =>{
    dispatch(setItemsLoading)
    axios
        .get('/api/item')
        .then(res=>
            dispatch(
                {
                    type:GET_ITEMS,
                    payload:res.data
                }
            )
        )
        .catch(err=>console.log(err.message))
}
export const addItems=(item)=> dispatch =>{
    axios
        .post('/api/item' , item)
        .then(res=>dispatch({
            type:ADD_ITEMS,
            payload:res.data
        }))
}


export const deleteItems=(id)=> dispatch =>{
    axios
        .delete(`/api/item/${id}`)
        .then(res=>dispatch(
            {
                type:DELETE_ITEMS,
                payload:id
            }
        ))

}

export const setItemsLoading=()=>{
    return{
        type:ITEMS_LOADING
    }
}