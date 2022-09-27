export interface FormValues {
  id: number
  name?: string
  role?: string
  skills: string[]
  startDate?: string
  preference?: string
}

const today = new Date()
const todayString = `${
  today.getMonth() + 1
}/${today.getDate()}/${today.getFullYear()}`

export const contactData: Array<FormValues> = [
  {
    id: 1,
    name: 'dds',
    role: '',
    skills: ['', ''],
    startDate: todayString,
    preference: '',
  },
]
