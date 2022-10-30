import React, {useState} from 'react'

const useLoader = () => {
    const [loader, setLoader] = useState(false) 

    console.log(loader, 'from Hooks>>>>>>>>')

    const showLoader = () => {
        setLoader(true);
    }

    const hideLoader = () => {
        setLoader(false);
    }

  return {
    loader,
    showLoader,
    hideLoader
  }
}

export default useLoader