import * as React from 'react'

export interface RexonRuntime{
  onCreate:(Console:RexonConsole) => void
}

interface Props {
  DefaultTitle:string
  Runtime:RexonRuntime
  //Theme:RexonTheme
}

interface States{
  CurrentTitle:string
  Items: Array<ConsoleItem>
  CurrentText:string
}

interface ConsoleItem{
  Text:string
  Color:string
}

export interface RexonConsole{
  print : (Text:string, Color:string) => void
  println : (Text:string, Color:string) => void
}

export class Rexon extends React.Component<Props, States>{
  Console:RexonConsole = {
    print : (Text:string, Color = "white") => {
      var NewItems = this.state.Items
      NewItems.push({Text, Color})
      this.setState({Items: NewItems})
    },

    println : (Text:string, Color = "white") => {
      var NewItems = this.state.Items
      NewItems.push({Text:`${Text}\n`, Color})
      this.setState({Items: NewItems})
    }


  }

  componentWillMount(){
    this.setState({
      CurrentText:"",
      CurrentTitle:this.props.DefaultTitle,
      Items:[]
    })
  }

  componentDidMount(){
    this.props.Runtime.onCreate(this.Console)
  }

  render(){
    return (
      <div style={{backgroundColor:"black"}}>
        <div>
          <h2>{this.state.CurrentTitle}</h2>
        </div>
        <div style={{display: 'inline-block'}}>
          {this.state.Items.map(Item =>
            Item.Text.split("\n").map(line => (<p style={{color:Item.Color, margin:0, display: Item.Text.includes("\n") ? "block" : "inline-block"}}>{line}</p>))
          )}
          <input type="text" value={this.state.CurrentText} onChange={(Event) => {
            this.setState({CurrentText:Event.target.value})
          }} onKeyPress={(Event) => {
            if(Event.key == "Enter"){
              this.Console.println(this.state.CurrentText, "white");
              this.setState({CurrentText:""})
            }
            
          }}></input>
        </div>
      </div>
    )
  }
}

export interface RexonTheme{
  showTitlebar:boolean,
  backgroundcolor:string,
  fontDefaultColor:string,
  fontDefaultSize:string
}