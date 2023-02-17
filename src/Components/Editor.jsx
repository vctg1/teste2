import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const Editor = props => {
  const listButtons = [['undo', 'redo'], ['font', 'fontSize', 'formatBlock'],
  ['paragraphStyle', 'blockquote'],
  ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
  ['fontColor', 'hiliteColor', 'textStyle'],
  ['removeFormat'],
  '/', // Line break
  ['outdent', 'indent'],
  ['align', 'horizontalRule', 'list', 'lineHeight'],
  ['table', 'link', 'image', 'video', 'audio' /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
  /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
  ['fullScreen', 'showBlocks', 'codeView'],
  ['preview', 'print'],
  ['save', 'template']]
  return (
    <div>
      <SunEditor onChange={(e)=> props.setContentCourse(e)} height='400px' width='900px' setOptions={{height: 200, buttonList: listButtons}} lang={'pt_br'}/>
    </div>
  );
};
export default Editor;