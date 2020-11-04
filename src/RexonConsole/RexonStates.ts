import ConsoleItem from "./RexonItem"

export default interface States {
  ShowTitle: boolean
  CurrentTitle: string
  Items: Array<ConsoleItem>
  CurrentText: string
  isReading: boolean
  Theme: {
    CurrentFontSize: number
    ConsoleBackgroundImage:string
    ConsoleBackgroundImageOpacity:number
  }
}