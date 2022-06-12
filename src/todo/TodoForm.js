import React, { useState } from "react";
import propTypes from "prop-types";

function TodoForm({onCreate}) {
  const [tusk, setTusk] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (tusk.trim()) {
      onCreate(tusk);
      setTusk('');
     
    }
  }

  return (
    <form
      className="d-flex justify-content-center p-3 flex-wrap"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        className="form-control"
        value={tusk}
        onChange={(event) => setTusk(event.target.value)}
        placeholder="enter ur task here. then press enter"
      />
      <button type="submit" className="btn btn-outline-success m-2">
        add tusk
      </button>
    </form>
  );
}

TodoForm.propTypes={
    onCreate: propTypes.func.isRequired
}

export default TodoForm;
