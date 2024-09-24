import React, { useEffect, useState } from "react";

let str = "Click to edit me!";

export default function EditableField(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(props.head ?? str);

  useEffect(() => {
    if(localStorage.getItem(props.fieldId)) {
      setContent(JSON.parse(localStorage.getItem(props.fieldId)));
    } else {
      localStorage.setItem(props.fieldId, JSON.stringify(props.head ?? str));
    }
  }, [props.fieldId, props.head]);

  const handleContentClick = () => setIsEditing(true); // Enable editing mode

  const handleBlur = (e) => {
    setIsEditing(false); // Disable editing mode
    setContent(e.target.innerHTML);
    localStorage.setItem(props.fieldId, JSON.stringify(e.target.innerHTML));
  }

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Alt': return handleBlur();
      case 'AltGraph': return handleBlur();
      default: return;
    }
  }

  const Tag = props.head ? 'h3':'div';
  return (
    <Tag
      style={{...props.style, cursor: 'pointer', padding: '5px', margin: '0', background: 'lightgray'}}
      suppressContentEditableWarning // Suppress React warning
      dangerouslySetInnerHTML={{ __html: content }} // Load HTML content from state
      contentEditable={isEditing} // Enable editing
      onClick={handleContentClick}
      onBlur={handleBlur} // Disable editing for outside click
      onKeyDown={handleKeyDown} // Disable editing for Alt/AltGraph press
    />
  );
}