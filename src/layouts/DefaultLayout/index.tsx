import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'


import { LayoutContainer } from './styles'

export const DefaultLayout = () => {
    return (
        <LayoutContainer>
            <Sidebar />
            <Outlet />
        </LayoutContainer>
    )
}
