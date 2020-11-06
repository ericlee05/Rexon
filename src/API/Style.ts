import { Rexon } from '..'

export default class Style {
    readonly Context: Rexon
    constructor(Context: Rexon) {
        this.Context = Context
    }

    setColor = (Color: string) => {
        this.Context.ConsoleTheme.CurrentColor = Color
    }

    setBackgroundColor = (Color: string) => {
        this.Context.ConsoleTheme.CurrentBackgroundColor = Color
    }

    setBackgroundImage = (ImageUrl: string) => {
        var Theme = this.Context.state.Theme
        Theme.ConsoleBackgroundImage = ImageUrl
        this.Context.setState({ Theme })
    }

    setBackgroundImageOpacity = (Opacity: number) => {
        var Theme = this.Context.state.Theme
        Theme.ConsoleBackgroundImageOpacity = Opacity
        this.Context.setState({ Theme })
    }

    setFontSize = (FontSize: number) => {
        var Theme = this.Context.state.Theme
        Theme.CurrentFontSize = FontSize
        this.Context.setState({ Theme })
    }

}