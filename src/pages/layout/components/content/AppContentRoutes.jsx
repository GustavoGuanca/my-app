import { Route, Routes } from 'react-router-dom'
import routes from '../routes/AppRoutes'

const AppContentRoutes = () => {

    let arrayRoute = []
    let path = ''

    const getRoute = route => {
        if (route.children) {
            route.children.forEach(routeSubMenu => {
                getRoute(routeSubMenu)
            })
        } else {
            let url = route.url
            if(!route.menu){
                url = path + route.url + '/*'
            } 
            arrayRoute.push({
                key: route.key,
                role: route.rol,
                url: url,
                element: route.element
            })
        }
    }
    routes.forEach(route => getRoute(route))

    return<Routes>
        {arrayRoute.map(route => <Route key={route.key} path={route.url} element={route.element}/>)}
    </Routes>
}

export default AppContentRoutes