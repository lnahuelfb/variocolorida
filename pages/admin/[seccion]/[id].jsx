import { useRouter } from 'next/router'
import React from 'react'

const id = () => {

  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>Hola {id}</h1>
    </div>
  )
}

export default id