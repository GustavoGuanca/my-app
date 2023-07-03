import { useLocation } from 'react-router-dom'
import EntityForm from './components/form/EntityForm'
import EntityList from './components/list/EntityList'

const EntitiesContainer = props => {

    let path = useLocation().pathname

    return <>
        {
            path.includes('/new') || path.includes('/edit') ?
            <EntityForm {...props}/> 
            : <EntityList {...props}/>
        }
    </>
}

export default EntitiesContainer