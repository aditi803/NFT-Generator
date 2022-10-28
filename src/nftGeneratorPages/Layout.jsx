import React, {useState} from 'react'
import Collections from './Collections'
import GeneratorPage from './GeneratorPage'
import Navbar from './Navbar'
import TabList from './TabList'

const LAyout = () => {
  const [toggle, setToggle] = useState(false)


  const openMenu = () => {
    setToggle((prev) => !prev)
}

  return (
    <div>
      <Navbar />
      <div className="main" style={{display:"flex"}}>
        <TabList toggle={toggle} openMenu={openMenu}/>
        <Collections toggle={toggle} openMenu={openMenu}/>
        <GeneratorPage />
      </div>

    </div>
  )
}

export default LAyout