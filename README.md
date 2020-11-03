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


## Uses / 활용
 * Mud Game / 머드게임
 * Console based game(like hacknet) / 콘솔 기반 게임(핵넷같은 게임)


## Used Project / 사용된 프로젝트
 > You can upload your project here only that your project has stars more than 10.
 > 개발자 본인(VINTO1819)의 프로젝트와 Star가 10개 이상인 프로젝트만 등재됩니다.
    
 * ~~Todo~~


## License / 라이선스
MIT © [VINTO1819](https://github.com/VINTO1819)
