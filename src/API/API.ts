import { Rexon, RexonConsole } from ".."
import InputOutput from "./InputOutput"
import Style from "./Style"
import Title from "./Title"

export default function RexonConsoleAPI(Context: Rexon): RexonConsole {
    return {
        setTitle: new Title(Context).setTitle,

        showTitle: new Title(Context).showTitle,

        isTitleShowing: new Title(Context).isTitleShowing,

        print: new InputOutput(Context).print,

        println: new InputOutput(Context).println,

        printWithAnimation: new InputOutput(Context).printWithAnimation,

        readln: new InputOutput(Context).readln,

        clear: new InputOutput(Context).clear,

        getAllHistory: new InputOutput(Context).getAllHistory,

        setColor: new Style(Context).setColor,

        setBackgroundColor: new Style(Context).setBackgroundColor,

        setBackgroundImage: new Style(Context).setBackgroundImage,

        setBackgroundImageOpacity: new Style(Context).setBackgroundImageOpacity,

        setFontSize: new Style(Context).setFontSize

    }
}