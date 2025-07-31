
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './assets/components/Layout'
import Hero from './assets/components/Hero'
import About from './assets/components/pages/About/About'
import Collection from './assets/components/Collection'
import Choose from './assets/components/Choose'
import Works from './assets/components/Works'
import Plan from './assets/components/pages/Plane/Plan'




const router = createBrowserRouter(

    createRoutesFromElements(
        <Route path='/vite' element={<Layout/>}>
            <Route path='/vite' element={[<Hero/>, <Collection/>, <Choose/>, <Works/>]} />
            <Route path='about' element={<About/>} />
            <Route path='plan' element={<Plan/>} />
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />

)
