import { useRouter } from 'next/router'

const id = () => {

  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>Hola ID: {id}</h1>
    </div>
  )
}

export default id