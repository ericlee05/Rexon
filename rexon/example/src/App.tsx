import React from 'react'

import { Rexon, RexonRuntime, RexonConsole } from 'rexon'
import 'rexon/dist/index.css'

const Runtime:RexonRuntime = {
  onCreate : (Console:RexonConsole) => {
    Console.print("Hello, World!", "white")
  }
}

const App = () => {
  return <Rexon DefaultTitle="d" Runtime={Runtime} />
}

export default App
