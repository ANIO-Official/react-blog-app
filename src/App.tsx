import './App.css'

//Routing
import { Route, Routes } from 'react-router-dom'

//Components
import Navbar from './components/Header/Navbar/Navbar'

//Pages
import BlogIndexPage from './pages/BlogIndex/BlogIndexPage'
import LoginPage from './pages/LoginPage/LoginPage'
import BlogPostPage from './pages/BlogPostPage/BlogPostPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import AdminPage from './pages/AdminPage/AdminPage'

function App() {

  return (
    <>
      <header>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />}>
          </Route>
          <Route path="/admin-dashboard" element={<AdminPage />}>
          </Route>
          <Route path="/blogs-index" element={<BlogIndexPage />}>
          </Route>
          <Route path="/blog/:id/:title/:content" element={<BlogPostPage />}>
          </Route>
          <Route path="*" element={<NotFoundPage />}>
          </Route>
        </Routes>
      </header>
    </>
  )
}

export default App
