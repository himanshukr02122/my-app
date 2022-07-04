import React from 'react'
import Header from './header'
import Sidebar from './sidebar'


const Layout=({children})=> {
  return (

      <>

        <Header />
        <main>
          <div className="w-full h-full flex items-start justify-between">
            <Sidebar />
            <div className="w-full overflow-hidden transition-all">
              {children}
            </div>
          </div>
          
        </main>
      </>
      
        )
}
export default Layout;