import {useState} from 'react'

const useLoader = () => {
    const [loader, setLoader] = useState(false) 

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