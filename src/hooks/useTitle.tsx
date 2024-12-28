import { useEffect } from "react"


const useTitle = (title) => {
  
   useEffect(() => {
     document.title = `${title} - WriteNode`
   },[])
    
  
    return null
}

export default useTitle