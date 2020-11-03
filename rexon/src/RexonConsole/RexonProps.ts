import { CSSProperties } from "react";
import RexonRuntime from "./RexonRuntime"

export default interface Props {
  ShowTitle:boolean
  DefaultTitle: string
  Runtime: RexonRuntime
  style: CSSProperties | undefined
}