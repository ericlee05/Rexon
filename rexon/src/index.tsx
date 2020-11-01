import * as React from 'react'

interface Props {
  DefaultTitle:string
}

interface States{
  CurrentTitle:string
  Items: Array<ConsoleItem>
}

interface ConsoleItem{
  Text:string
  Color:string
  FontSize:number
}

export class Rexon extends React.Component<Props, States>{
  componentDidMount(){
    this.setState({
      CurrentTitle:this.props.DefaultTitle,
      Items:[]
    })
  }

  render(){
    return (
      <div>
        <div>
          <h2>${this.state.CurrentTitle}</h2>
        </div>
        <div>
          ${this.state.Items.map(Item => (
            <div>
              
            </div>
          ))}
        </div>
      </div>
    )
  }

}

export interface RexonTheme{
  showTitlebar:boolean,
  backgroundImage:string,
  backgroundcolor:string,
  fontDefaultColor:string,
  fontDefaultSize:string
}