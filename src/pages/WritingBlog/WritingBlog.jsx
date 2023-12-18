import './WritingBlog.css'

import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

function WritingBlog() {
    return (
        <div className="WritingBlog">
            <div className="WritingBlog_inner">
                <div className="WritingBlog_title">
                    <input autoFocus type="text" name="title_blog" id="" placeholder='Tiêu đề' />
                </div>
                <div className="WritingBlog_content">
                    <div className="WritingBlog_edit">
                        <Editor
                            toolbarClassName='toolbar'
                            editorClassName='editor'
                        // editorState={editorState}
                        // onEditorStateChange={this.onEditorStateChange}
                        />
                    </div>
                    <div className="line"></div>
                    <div className="WritingBlog_preview">
                        priview
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WritingBlog;