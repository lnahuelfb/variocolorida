import React from 'react'
import { useRouter } from 'next/router'


const Seccion = () => {

  const router = useRouter()
  const { seccion } = router.query

  return (
    <div>
      <h1>{`Hola ${seccion}`}</h1>
    </div>
  )
}

export default Seccion