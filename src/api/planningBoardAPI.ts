export enum LoadingEnum {
  Idle = 'IDLE',
  Pending = 'PENDING',
  Resolved = 'RESOLVED',
  Rejected = 'REJECTED'
}

export interface ApiMessage<ReturnValue = string | null> {
  backendMessage: string
  message: string
  returnValue: ReturnValue
}
