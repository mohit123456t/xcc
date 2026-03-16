import { Route, Routes } from 'react-router-dom'
import { appRoutes } from './routes'

export default function App() {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element}>
          {route.children?.map((childRoute, index) => (
            <Route
              key={childRoute.path ?? `index-${index}`}
              index={childRoute.index}
              path={childRoute.path}
              element={childRoute.element}
            />
          ))}
        </Route>
      ))}
    </Routes>
  )
}
