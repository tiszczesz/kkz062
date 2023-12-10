import './Select.css';

type Props = {
  values: string[];
  info: string;
};

const Select = (props: Props) => {
  return (
    <div className="select-container">
      <div className="elem">
        <h3>{props.info}</h3>
        <select>
          {props.values.map((v, k) => (
            <option value={v} key={k}>
              {v}
            </option>
          ))}
        </select>
      </div>
      <div className="elem">
        <div></div>
      </div>
    </div>
  );
};

export default Select;
