
import { Routes , Route ,BrowserRouter} from 'react-router-dom'
import CarrinhoPage from '../Pages/CarrinhoPage/index'

import ErrorPage from '../Pages/ErrorPage'
import HomePage from '../Pages/HomePage'


export default function Router (){

    return ( 
        <BrowserRouter>    
         <Routes>
            <Route index element={<HomePage/>}/>
            <Route  path='*' element={<ErrorPage/>}/>
            <Route path='/carrinho' element={<CarrinhoPage/>}/>
         </Routes>   
        </BrowserRouter>
    )
}