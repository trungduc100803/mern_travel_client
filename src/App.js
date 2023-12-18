import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import './App.css';
import { publicRouter } from './config/router';
import JustChildrenLayout from './layouts/JustChildrenLayout/JustChildrenLayout';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'
import JustHeaderLayout from './layouts/JustHeaderLayout/JustHeaderLayout';
import MeLayout from './layouts/MeLayout/MeLayout';
import './responsive.css'

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRouter.map((route, i) => {
              let Layout = DefaultLayout
              const Page = route.component

              if (route.layout === JustChildrenLayout) {
                Layout = JustChildrenLayout
              }

              if (route.layout === JustHeaderLayout) {
                Layout = JustHeaderLayout
              }

              if (route.layout === MeLayout) {
                Layout = MeLayout
              }

              return <Route
                key={i}
                path={route.path}
                element={<Layout>
                  <Page />
                </Layout>}
              />
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
