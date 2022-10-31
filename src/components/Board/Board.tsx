import './Board.scss';

import Card from '../Card/Card';

export default function Board() {

  return (
    <ul data-testid="board" className="board">
      <Card key="1" />
      <Card key="2" />
      <Card key="3" />
      <Card key="4" />
      <Card key="5" />
      <Card key="6" />
      <Card key="7" />
      <Card key="8" />
      <Card key="9" />
      <Card key="10" />
      <Card key="11" />
      <Card key="12" />
      <Card key="13" />
      <Card key="14" />
      <Card key="15" />
      <Card key="16" />
    </ul>
  )
}