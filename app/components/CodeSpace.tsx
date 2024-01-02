"use client"
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function CodeSpace({value,language,style}:{value :string,language:string,style:object}){
    return(
        <CodeEditor value={value} language={language} style={style} />
    );
}