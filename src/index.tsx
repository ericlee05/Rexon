import * as React from 'react'

import Props from "./RexonConsole/RexonProps"
import States from "./RexonConsole/RexonStates"
import RexonConsole from "./RexonConsole/RexonAPI"
import RexonRuntime from "./RexonConsole/RexonRuntime"
import Theme from './RexonConsole/Theme'

import barStyle from "./rexon.css"
import RexonConsoleAPI from './API/API'

export class Rexon extends React.Component<Props, States>{
  ConsoleTheme: Theme = {
    CurrentColor: "white",
    CurrentBackgroundColor: "black",
  }

  ConsoleWindow: HTMLDivElement | undefined = undefined
  Console: RexonConsole = RexonConsoleAPI(this)

  componentWillMount() {
    this.setState({
      CurrentText: "",
      ShowTitle: this.props.ShowTitle,
      CurrentTitle: this.props.DefaultTitle,
      Items: [],
      isReading: false,
      Theme: {
        CurrentFontSize: 18,
        ConsoleBackgroundImage:"",
        ConsoleBackgroundImageOpacity:0
      }
    })
  }

  componentDidMount() {
    this.props.Runtime.onCreate(this.Console)

  }

  render() {
    return (
      <div style={{ ...{ backgroundColor: this.ConsoleTheme.CurrentBackgroundColor, overflowY: "auto" }, ...this.props.style, display: "flex", flexDirection: "column"}}>
        <div style={{backgroundColor:"#151C22"}}>
          <h2 style={{color:"white", margin:"5px", fontSize:20}}>{this.state.CurrentTitle}</h2>
        </div>
        <div style={{ position:"relative", width: "100%", flex: 1}}>
          <div style={{backgroundColor:this.ConsoleTheme.CurrentBackgroundColor, opacity:this.state.Theme.ConsoleBackgroundImageOpacity}}>
            <img src={this.state.Theme.ConsoleBackgroundImage}
              style={{ position: "absolute", width: "100%", height:"100%", objectFit:"cover" }} />
          </div>
          <div className={barStyle.side_bar} style={{width:"100%", height:"100%", overflowY:"auto", position: "absolute"}}>
            {this.state.Items.map(Item =>
              //Item.Text.split("\n").map(line => (<p style={{color:Item.Color, margin:0, display: Item.Text.includes("\n") ? "block" : "inline-block"}}>{line}</p>))
              Item.Text.split("\n").map(line => {
                this.ConsoleWindow?.scrollIntoView({ behavior: "smooth" })
                if (Item.Text.split("\n").length > 1 && line.length > 0) {
                  return (<p className="RexonCommand" style={{ color: Item.Color, margin: 0, display: 'inline', fontSize: this.state.Theme.CurrentFontSize }}>{line}<br style={{ display: 'inline-block' }} /></p>)
                } else {
                  return (<p className="RexonCommand" style={{ color: Item.Color, margin: 0, display: 'inline', fontSize: this.state.Theme.CurrentFontSize }}>{line}</p>)
                }
              })
            )}
            <div ref={(element) => this.ConsoleWindow = element!} style={{ display: "inline-block" }}>
              <input type="text" value={this.state.CurrentText} onChange={(Event) => {
                this.setState({ CurrentText: Event.target.value })
              }} onKeyPress={(Event) => {
                if (Event.key == "Enter") {
                  this.Console.println(this.state.CurrentText)
                  if (!this.state.isReading) {
                    this.setState({
                      CurrentText: ""
                    })
                  }
                  this.setState({
                    isReading: false
                  })
                }

              }} style={{
                backgroundColor: "transparent",
                color: this.ConsoleTheme.CurrentColor,
                fontSize: this.state.Theme.CurrentFontSize,
                boxShadow: "none",
                outline: "none",
                border: "none",
                display: "inline-block"
              }} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export {
  RexonConsole,
  RexonRuntime
}