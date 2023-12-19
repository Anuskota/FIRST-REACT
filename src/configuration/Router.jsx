import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Collection from '../components/views/Collection'
import Home from '../components/views/Home'


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/collection' element={<Collection />}></Route>  
            </Routes>
        </BrowserRouter>
    )
}

export default Router

//Arriba en Route path '/collection' significa que le estamos dando un nombre a la vista collection. Podriamos decirle patata tb