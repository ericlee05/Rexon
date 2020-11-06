import { Rexon } from '..'

export default class InputOutput {
    readonly Context: Rexon
    constructor(Context: Rexon) {
        this.Context = Context
    }

    print = (Text: string) => {
        var NewItems = this.Context.state.Items
        NewItems.push({ Text, Color: this.Context.ConsoleTheme.CurrentColor })
        this.Context.setState({ Items: NewItems })
    }

    println = (Text: string) => {
        var NewItems = this.Context.state.Items
        NewItems.push({ Text: `${Text}\n`, Color: this.Context.ConsoleTheme.CurrentColor })
        this.Context.setState({ Items: NewItems })
    }

    readln = () => {
        this.Context.setState({ isReading: true })
        return new Promise<string>((resolve) => {
            var Timer = setInterval(() => {
                //console.log(this.state.isReading + " / " + this.state.CurrentText)
                if (this.Context.state.isReading == false) {
                    resolve(this.Context.state.CurrentText)
                    this.Context.setState({
                        isReading: false,
                        CurrentText: ""
                    })
                    clearInterval(Timer)
                }
            }, 10)
        })
    }

    clear = () => {
        this.Context.setState({ Items: [] })
    }

    getAllHistory = () => {
        return this.Context.state.Items.map(Item => Item.Text).join("")
    }

    printWithAnimation = (Text: string, Speed: number) => {
        const Interval = (1 - ((Speed >= 1) ? 0.9 : Speed)) * 250
        var RunningTime = 0
        return new Promise<void>((resolve) => {
            var Timer = setInterval(() => {
                if (RunningTime * Interval >= Text.length * Interval) {
                    clearInterval(Timer)
                    resolve()
                } else {
                    var NewItems = this.Context.state.Items
                    NewItems.push({ Text: Text[RunningTime], Color: this.Context.ConsoleTheme.CurrentColor })
                    this.Context.setState({ Items: NewItems })
                }
                RunningTime++
            }, Interval)
        })
    }

}