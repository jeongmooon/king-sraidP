import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import palette from '../../libs/styles/palette';
import EditImage from '../common/image/EditImage';

const WriteWrap = styled.div`
    margin-top: 5rem;
    padding-top: 2rem;
    max-width: 500px;
    margin: 0 auto;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`

const CategorySelect = styled.select`
    font-size: 1.5rem;
    outline: none;
    width: 100%;
    margin-bottom: 1rem;
`

const TitleInput = styled.input`
    font-size: 1.5rem;
    font-weight: bolder;
    outline: none;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 2px solid ${palette.main};
    width: 100%;
    box-sizing: border-box;
`

const QuillWrapper = styled.div`
    .ql-editor {
        padding: 1rem 0;
        text-indent: 1rem;
        min-height: 32rem;
    }
`

function WriteComponent({
    onChangeBody,
    onChangeTitle,
    onChangeImg,
    writeInfo,
    imgURL}) {        

    const modules = {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        [{ align: [] }, { color: [] }, { background: [] }],
        ["clean"],
      ],
    };
  
    const formats = [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "align",
      "color",
      "background",
    ];
    return (
        <>
        <br/><br /><br />
        <br/><br /><br />
        <WriteWrap>
            <CategorySelect>
                <option value="1">이벤트</option>
                <option value="2">자유게시판</option>
                <option value="3">결투장</option>
            </CategorySelect>
            <TitleInput
                name="title"
                value={writeInfo.title}
                onChange={onChangeTitle}
                placeholder='제목' />
            <QuillWrapper>
                <ReactQuill
                    name ="contents"
                    theme='snow'
                    modules={modules}
                    formoats={formats}
                    value={writeInfo.contents}
                    onChange={(content, delta, source, editor)=>{
                        if(source === "user") {
                            onChangeBody(editor.getHTML());
                        }
                    }}
                />
            </QuillWrapper>
            <EditImage imgURL={imgURL} onChangeImg={onChangeImg} />
        </WriteWrap>
        </>
    )
}

export default WriteComponent
