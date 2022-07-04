import React from 'react'
import Header from './header'
import Sidebar from './sidebar'


const Layout=({children})=> {
  return (

      <>

        <Header />
        <main className="flex h-full">
          <Sidebar />
          {children}
        </main>
      </>
      
        )
}
export default Layout;