import React, { useRef } from 'react';


  function NameForm() {
    const input = useRef(null);
    const div = useRef(null);

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + input.current.value);
        event.preventDefault();
      }
      
    const handleOnChange = (evt) => {
        div.current.innerHTML = input.current.value;
      }

    return (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" onChange={handleOnChange} ref={input} />
          </label>
          <div ref={div} />
          
          <input type="submit" value="Submit" />
        </form>
      );

  }



  export default NameForm