export default interface RexonConsole {
    setTitle: (Title: string) => void
    showTitle: (isShow: boolean) => void
    isTitleShowing: () => boolean
    print: (Text: string) => void
    println: (Text: string) => void
    readln: () => Promise<string>
    clear: () => void
    getAllHistory: () => string
    setColor: (Color: string) => void
    setBackgroundColor: (Color: string) => void
    setFontSize: (Size: number) => void
    printWithAnimation:(Text:string, Speed:number) => Promise<void>
}