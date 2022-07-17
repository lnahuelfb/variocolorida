export interface trabajos {
  name: string,
  image: string,
}

export interface cards extends trabajos {
  link: string,
  description: string
}

export interface message {
  name: string,
  telephone?: string,
  email: string,
  message: string
}