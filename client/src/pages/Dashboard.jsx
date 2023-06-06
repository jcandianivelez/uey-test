import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/share/Navbar'
import {  Container } from '@mui/material'
import { ImageHero } from '../components/share/ImageHero'
import { useLocation } from 'react-router-dom'

export const Dashboard = () => {
  const { pathname } = useLocation();

  return (
    <div>
        <NavBar />
        <main>
          {
            pathname === "/" && <ImageHero />
          }
          <Container>
              <Outlet />
          </Container>
        </main>
    </div>
  )
}
