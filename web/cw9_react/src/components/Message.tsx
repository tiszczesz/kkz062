import './Message.css'

type Props = {
    color:string;
    info:string;
}

const Message = (props: Props) => {
  return (
    <div className="border" style={{color:props.color}}>{props.info}</div>
  )
}

export default Message