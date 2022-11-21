import React from 'react'

const Navigation = ({searchVisibility, setSearchVisibility}) => {
  return (
    <nav className="container relative mx-auto">
        <div className="relative flex flex-row justify-between items-center px-3 py-2 z-50 lg:py-2">
          <img src="src/assets/logo.svg" alt="" />
          <div className="hidden font-medium lg:flex flex-row md:gap-8 lg:gap-8 xl:gap-11">
            <a href="">Óculos de grau</a>
            <a href="">Óculos de sol</a>
            <a href="">Zerezes em casa</a>
            <a href="">Comprar grau online?</a>
            <a href="">Ajuda</a>
          </div>
          <div className="flex flex-row items-center justify-end w-[150px] gap-6">
            <span onClick={() => setSearchVisibility(!searchVisibility)} className="md:hidden">
              <img src="src/assets/lupa.svg" alt="" />
            </span>
            <span>
              <img src="src/assets/user.svg" alt="" />
            </span>
            <span className="lg:hidden">
              <img src="src/assets/menu.svg" alt="" />
            </span>
          </div>
        </div>   
      </nav>
  )
}

export default Navigation