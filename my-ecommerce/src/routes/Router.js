
import { Routes , Route ,BrowserRouter} from 'react-router-dom'
import Checkout from '../Components/Checkout'

import CarrinhoPage from '../Pages/CarrinhoPage/index'
import DetailsPaga from '../Pages/DetailsPage'

import ErrorPage from '../Pages/ErrorPage'
import HomePage from '../Pages/HomePage'


export default function Router (){

    return ( 
        <BrowserRouter>    
         <Routes>
            <Route index element={<HomePage/>}/>
            <Route  path='*' element={<ErrorPage/>}/>
            <Route path='/carrinho' element={<CarrinhoPage/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/details/:id' element={<DetailsPaga/>}/>
         </Routes>   
        </BrowserRouter>
    )
}