// declare type TAlertText = string | any

// declare interface IAlertMessage {
// type: string
// text: TAlertText
// }

declare interface IAlertMessage {
  type: string
  text: string
}

declare type AlertMessageWithNull = IAlertMessage | null

declare interface IAlertState {
  message: AlertMessageWithNull
}
