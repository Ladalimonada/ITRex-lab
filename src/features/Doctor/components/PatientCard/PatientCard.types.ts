export interface PatiendCardType {
  avatar: string,
  firstName: string,
  lastName: string,
  status: 'confirmed' | 'waiting' | 'canceled',
  description: string,
  time: string,
  dataTestId: string,
  id: string,
}
