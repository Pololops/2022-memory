interface Props {
  text: string
}

export default function Message({ text }: Props) {
  return <p data-testid="message" className="modal__message">{text}</p>
}