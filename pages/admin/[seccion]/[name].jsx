import Image from 'next/image'

import styles from '/styles/adminName.module.css'

// const Trabajo = ({ data }) => {
const Trabajo = () => {

  return (
    <div className={styles.container}>
      {/* <h1>Hola ID: {data.name}</h1> */}
      <h1>Hola ID:</h1>
      {/* <Image src={data.image} width={400} height={400} objectFit='scale-down' alt={data.name} /> */}

    </div>
  )
}

// export async function getStaticProps({ params: { seccion, name } }) {
//   require('dotenv').config()

//   const API = process.env.API || 'http://localhost:3000/api/'

//   try {
//     const res = await fetch(`${API}${seccion}/${name}`)
//     const data = await res.json()

//     return {
//       props: {
//         data
//       }
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

// export async function getStaticPaths() {
//   require('dotenv').config()

//   const API = process.env.API || 'http://localhost:3000/api/'

//   try {
//     const paths = []

//     const ilustracion = await fetch(`${API}ilustracion`)
//     const ilustracionData = await ilustracion.json()


//     ilustracionData.trabajos.map(({ name }) => {
//       return paths.push({
//         params: {
//           seccion: 'ilustracion',
//           name: name.toLowerCase()
//         }
//       })
//     })

//     const identidad = await fetch(`${API}identidad`)
//     const identidadData = await identidad.json()

//     identidadData.trabajos.map(({ name }) => {
//       return paths.push({
//         params: {
//           seccion: 'identidad',
//           name: name.toLowerCase()
//         }
//       })
//     })

//     const rapport = await fetch(`${API}rapport`)
//     const rapportData = await rapport.json()

//     rapportData.trabajos.map(({ name }) => {
//       return paths.push({
//         params: {
//           seccion: 'rapport',
//           name: name.toLowerCase()
//         }
//       })
//     })

//     return {
//       paths,
//       fallback: false
//     }

//   } catch (error) {
//     console.log(error)
//     return { paths: [], fallback: false }
//   }
// }

export default Trabajo