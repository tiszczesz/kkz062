import React, { useState, FocusEvent } from 'react';

type Props = {
  header: string;
  placeholder: string;
  isBordered: boolean;
};
interface IErrorStage {
  message: string;
  color: string;
}
const EmailVerify = (props: Props) => {
  const [errorState, setErrorState] = useState<IErrorStage>({
    message: '',
    color: 'black',
  });
  const handleBlur = (event: FocusEvent<HTMLInputElement>): void => {
    const email = event.target.value;
    if (
      email.trim().length > 3 &&
      email.includes('@') &&
      email.indexOf('@') > 0 &&
      email.indexOf('@') < email.length - 1
    ) {
      setErrorState({ message: 'email poprawny', color: 'green' });
    } else {
      setErrorState({ message: 'Błędny email', color: 'red' });
    }
    console.log(setErrorState);
  };

  return (
    <>
      <h3>{props.header}</h3>
      <div
        className={
          props.isBordered ? 'row m-4 border border-secondary p-2' : 'row m-4'
        }
      >
        <input
          type="email"
          className="col-6"
          placeholder={props.placeholder}
          onBlur={handleBlur}
        />
        <span className="col-6" style={{ color: errorState.color }}>
          {errorState.message}
        </span>
      </div>
    </>
  );
};

export default EmailVerify;
