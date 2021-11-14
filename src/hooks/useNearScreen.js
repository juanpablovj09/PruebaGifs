import { useRef, useState, useEffect } from 'react'

const useNearScreen = ({once = true, extRef} = {}) => {
  const [show, setShow] = useState(false)
  const elementRef = useRef();
  
  useEffect(() => {
    let observer;

    const reference = extRef ? extRef : elementRef

    const callback = (entries, observer) => {
      const prueba = entries[0];
      if(prueba.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== undefined
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(callback, {
        rootMargin: '100px'
      })
      
      if(reference) observer.observe(reference.current)
    }
    )

    return () => observer && observer.disconnect();

  }, [])

  return {show, elementRef}

}

export default useNearScreen
