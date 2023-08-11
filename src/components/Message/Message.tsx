import './Message.scss';

interface Props {
  children: React.ReactNode,
}

export default function Message({ children }: Props) {
  return <p className="message">{children}</p>
}