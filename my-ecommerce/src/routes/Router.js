
import { Routes , Route ,BrowserRouter} from 'react-router-dom'
import ErrorPage from '../Pages/ErrorPage'
import HomePage from '../Pages/HomePage'

export default function Router (){

    return ( 
        <BrowserRouter>    
         <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
         </Routes>   
        </BrowserRouter>
    )
}