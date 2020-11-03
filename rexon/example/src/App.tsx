import React from 'react'

import { Rexon, RexonRuntime, RexonConsole } from 'rexon'
import 'rexon/dist/index.css'

const Runtime:RexonRuntime = {
  onCreate : async (Console:RexonConsole) => {
    Console.setColor("pink")
    await Console.printWithAnimation('“이제 비는 그치고, 우리의 세상이 빛나기 시작할 거야”', 0.6)
    Console.setColor("white")
    Console.clear()
    await Console.printWithAnimation(`비가 그치지 않던 어느 여름 날,
    가출 소년 ‘호다카’는 수상한 잡지사에 취직하게 되고
    비밀스러운 소녀 ‘히나’를 우연히 만난다.`, 0.6)
    Console.clear()
    Console.setColor("pink")
    await Console.printWithAnimation(`“지금부터 하늘이 맑아질 거야”`, 0.6)
    Console.setColor("white")
    Console.clear()
    await Console.printWithAnimation(`그녀의 기도에 거짓말같이 빗줄기는 멈추고,
    사람들의 얼굴에 환한 빛이 내려온다.`, 0.6)

    Console.clear()
    Console.setColor("pink")
    await Console.printWithAnimation(`“신기해, 날씨 하나에 사람들의 감정이 이렇게나 움직이다니”`, 0.6)
    Console.setColor("white")
    
    Console.clear()
    await Console.printWithAnimation(`하지만, 맑음 뒤 흐림이 찾아오듯
    두 사람은 엄청난 세계의 비밀을 마주하게 되는데…`, 0.6)
    
    Console.clear()
    Console.setColor("pink")
    await Console.printWithAnimation(`흐리기만 했던 세상이 빛나기 시작했고, 그 끝에는 네가 있었다.`, 0.6)
    Console.setColor("white")



    Console.println(" ")

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
    <Rexon style={{width: '50%', margin: '10px', height: '30vh'}} ShowTitle={true} DefaultTitle="It's a console" Runtime={Runtime} />
  </div>)
}

export default App
