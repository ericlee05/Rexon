import RexonConsole from "./RexonAPI"

export default interface RexonRuntime {
  onCreate: (Console: RexonConsole) => void
}