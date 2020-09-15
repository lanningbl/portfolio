import React, { useState, useEffect, useRef } from 'react';

const AutoResizeTextarea = (props) => {
  const textareaRef = useRef(null);
  const [text, setText] = useState('');
  const [textareaHeight, setTextareaHeight] = useState('auto');

  useEffect(() => {
    setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
  }, [text]);

  const onChangeHandler = (event) => {
    setTextareaHeight('auto');
    setText(event.target.value);

    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <textarea
      {...props}
      ref={textareaRef}
      style={{
        height: textareaHeight,
        minHeight: '150px',
        overflow: 'hidden',
      }}
      onChange={onChangeHandler}
    />
  );
};

export default AutoResizeTextarea;
