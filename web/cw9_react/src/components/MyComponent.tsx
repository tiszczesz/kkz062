import React from 'react';

type Props = {
  colors: string[];
  actualDate: Date;
};

const MyComponent = (props: Props) => {
  return (
    <>
      <h3>
        Lista Dzisiaj mamy:
        {props.actualDate.toLocaleDateString()}
      </h3>
      <ol>
        {props.colors.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ol>
    </>
  );
};

export default MyComponent;
