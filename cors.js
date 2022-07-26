export default function runMiddleware(req, res, fn) {
  console.log('Entró al middleware')

  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}