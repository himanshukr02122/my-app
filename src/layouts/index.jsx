import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'


const Layout=({children})=> {
  return (

      <>

        <Header />
        <main className="flex h-[90%]">
          <Sidebar />
          {children}
        </main>
      </>
      
        )
}
export default Layout;