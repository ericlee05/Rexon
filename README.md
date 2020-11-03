# REXON

> Virtual CLI Component for React / React용 가상 CLI 컴포넌트 라이브러리

[![NPM](https://img.shields.io/npm/v/rexon.svg)](https://www.npmjs.com/package/rexon) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install / 설치
```bash
npm i --save rexon
```


## Usage / 사용법
```tsx
import React, { Component } from 'react'
import { Rexon, RexonRuntime, RexonConsole } from 'rexon'

class Example extends Component {
  render() {
    const Runtime:RexonRuntime = {
        onCreate : async (Console:RexonConsole) => {
            Console.println("Hello, World!")
        }
    }
    return <Rexon ShowTitle={true} DefaultTitle="It's a console" Runtime={Runtime} />
  }
}
```
### How to try Example Project for debug? / 디버그용 테스트 프로젝트
 1. Run `npm run dev` in project root directory / `npm run dev`를 프로젝트 루트 디렉터리에서 실행하세요
 2. It's all! / 끝입니다!


## Console API / 콘솔 API
We are trying to implement the APIs of Win32 Console in Rexon, Now we supports these. / Win32 Console API에 있는 대부분의 기능을 구현하기 위해 노력중이며 아래와 같은 기능을 지원합니다.
 * `Console.setTitle(Title:string)` : set title text / 타이틀을 변경합니다
 * `Console.showTitle(isShow:boolean)` : set visible of title / 타이틀의 가시성 여부를 결정합니다
 * `Console.isTitleShowing()` : check visible of title / 타이틀의 가시성 여부를 가져옵니다
 * `Console.println(Text:string)` : print text with breakline / 텍스트를 개행과 함께 출력합니다
 * `Console.print(Text:string)` : print text / 텍스트를 출력합니다
 * `Console.printWithAnimation(Text:string, Speed:number)` : print text with animation / 텍스트를 시간 간격을 두고 출력합니다
 * `Console.readln()` : read text / 텍스트를 읽어들입니다
 * `Console.clear()` : clear all text / 텍스트 모두 삭제합니다
 * `Console.getAllHistory()` : get history of console / 콘솔의 기록을 가져옵니다
 * `Console.setColor(Color:string)` : set current color of text / 앞으로 작성할 텍스트의 색상을 변경합니다
 * `Console.setBackgroundColor(Color:string)` : set background color / 배경 색을 변경합니다
 * `Console.setFontSize(Size:number)` : set font size / 폰트 크기를 변경합니다
 

Also, these may be implemented soon. / 또한, 아래의 기능들은 곧 구현될 수 있습니다.
 * Console Progress bar / 콘솔 프로그레스 바
 * and more.. / 그리고 더 추가될 예정입니다..


## Uses / 활용
 * Mud Game / 머드게임
 * Console based game(like hacknet) / 콘솔 기반 게임(핵넷같은 게임)
 * And more.. / 이외에도 무한합니다..


## Projects that used Rexon / Rexon이 사용된 프로젝트
 > You can upload your project here only that your project has stars more than 10.
 > 개발자 본인(VINTO1819)의 프로젝트와 Star가 10개 이상인 프로젝트만 등재됩니다.
    
 * ~~Todo~~


## License / 라이선스
MIT © [VINTO1819](https://github.com/VINTO1819)
