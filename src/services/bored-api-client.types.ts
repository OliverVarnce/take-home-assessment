export interface Activity {
  activity: string
  accessibility: number
  type: string
  participants: number
  price: number
  link: string
  key: string
}

export enum Accessibility {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High'
}

export enum Price {
  Free = 'Free',
  Low = 'Low',
  High = 'High'
}
