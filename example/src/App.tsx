import React from 'react'

import { Rexon, RexonRuntime, RexonConsole } from 'rexon'
import 'rexon/dist/index.css'

const Runtime:RexonRuntime = {
  onCreate : async (Console:RexonConsole) => {
    Console.setBackgroundImage("/console.jpg")
    Console.setBackgroundImageOpacity(0.4)

    Console.setColor("pink")
    await Console.printWithAnimation(`Hello, World!`, 0.4)
    Console.setColor("white")

    Console.println("\n ")

    var FontSize = 18
    while(true){
      Console.setFontSize(FontSize)
      Console.print("Input color >")
      var Color = await Console.readln()
      Console.setColor(Color)
      Console.println(`You seleced this : "${Color}"`)
      Console.setColor("white")
      FontSize++
   }
  }
}

const App = () => {
  return (<div>
    <h1>Virtual Console, Rexon!</h1>
    <Rexon style={{width: '100vh', margin: '10px', height: '60vh'}} ShowTitle={true} DefaultTitle="It's a console" Runtime={Runtime} />
  </div>)
}

export default App
