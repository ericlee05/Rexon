import { Rexon } from '..'

export default class Title{
    readonly Context:Rexon
    constructor(Context:Rexon){
        this.Context = Context
    }

    setTitle = (Title: string) => {
        this.Context.setState({ CurrentTitle: Title })
    }

    showTitle = (isShow: boolean) => {
        this.Context.setState({ ShowTitle: isShow })
    }

    isTitleShowing = () => {
        return this.Context.state.ShowTitle
    }
}