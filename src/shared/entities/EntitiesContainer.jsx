import { useLocation } from 'react-router-dom'
import EntityForm from './components/form/EntityForm'
import EntityList from './components/form/EntityList'

const EntitiesContainer = () => {

    let path = useLocation().pathname

    return <>
        path.includes('/new') || path.includes('/edit') ?
        <EntityForm {...props}/> 
        : <EntityList {...props}/>
    </>
}

export default EntitiesContainer