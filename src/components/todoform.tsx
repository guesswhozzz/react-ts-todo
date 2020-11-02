import React, { useState, useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);
  // const [title, setTitle] = useState<string>("");

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);
  // };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
      // alert(title);
      // setTitle("");
    }
  };

  return (
    <div className="input-field">
      <input
        ref={ref}
        // onChange={changeHandler}
        // value={title}
        type="text"
        id="title"
        placeholder="введите дело"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        {"введите дело"}
      </label>
    </div>
  );
};
