import { Layout } from "antd"
import AppContentRoutes from "./AppContentRoutes"
import './AppContent.scss'

const { Content } = Layout

const AppContent  = () => 
<Content>
    <div style = {{padding: 16}}>
        <section className= 'route-section'>
            <AppContentRoutes/>
        </section>
    </div>
</Content>

export default AppContent

