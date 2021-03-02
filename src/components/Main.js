import './Main.css'
// import AceEditor from 'react-ace'
// import "ace-builds/src-noconflict/theme-monokai"
// import "ace-builds/src-noconflict/mode-c_cpp"
// import './src-min/mode-c_cpp'
// import Quill from 'quill'

const Main = () => {
    return (
        <div className = "main">
            <div className = "top">
                Language: C++
            </div>
            <div id = "editor" contentEditable = "true">
                {/* <AceEditor
                    style = {{
                        color: 'whitesmoke',
                        caretColor: 'whitesmoke'
                    }}
                    fontSize = {14}
                    mode = 'c_cpp'
                    theme = 'monokai'
                    height = '490px'
                    width = '1146'
                    showprintMargin = {false}
                    placeholder = 'Start coding here'
                    wrapEnabled = {true}
                    hScrollBarAlwaysVisible = {false}
                    vScrollBarAlwaysVisible = {false}
                    setOptions = {{
                        highlightGutterLine: 'false',
                        showGutter: 'false',
                    }}
                    editorProps = {{
                        
                    }}
                /> */}
            </div>
            <div className = "compile">
                <button className = "compile-btn">Compile</button>
            </div>
        </div>
    )
}

export default Main
