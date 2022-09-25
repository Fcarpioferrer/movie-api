import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {State} from "../types/reducer/State";

const UseRouterState = () => {

  const [loadingPage, setLoadingPage] = useState(State.IDLE)
  const router = useRouter();

  useEffect(() => {

    const handleRouteChangeStart = () => setLoadingPage(State.LOADING);
    const handleRouteChangeComplete = () => setLoadingPage(State.FINISHED)
    const handleRouteChangeError = () => setLoadingPage(State.REJECTED);

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeError)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, [])

  return [loadingPage]
}

export default UseRouterState;