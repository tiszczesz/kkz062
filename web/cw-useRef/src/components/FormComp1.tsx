import React, { useRef } from 'react';

const FormComp1: React.FC = () => {
  const formElement = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(formElement.current!==null){
         const formData = new FormData(formElement.current);
         console.log(formData);
         
    }
   
    // Do something with the form data (e.g., send it to an API)
  };

  return (
    <form onSubmit={handleSubmit} ref={formElement}>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComp1;
