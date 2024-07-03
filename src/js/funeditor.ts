import {EditorState, EditorSelection, SelectionRange} from "@codemirror/state"
import {basicSetup} from "codemirror"
import {EditorView, keymap} from "@codemirror/view"
import {defaultKeymap} from "@codemirror/commands"
import {markdown} from "@codemirror/lang-markdown"
import {marked} from "marked"
import { CmWrapper } from './codemirror'
import '../css/funeditor.css'

function saveCurArticleContent() {

}

function uploadFileCallback() {
  
}
function FunEditor(options:any) {
  options = options || {}
  const cmw = new CmWrapper(
    CmWrapper.newEditor(
      // 创建 state
      CmWrapper.newState(
        () => {
          //articleParseing = true
          //debounceParse(parse, 300)
        },
        saveCurArticleContent,
        uploadFileCallback
      ),
      options.element
    )
  )
}

export default FunEditor