import { ProfileRelationsBoxWrapper } from "../ProfileRelations"

export default function BoxWrapper({title, list}) {
    const lista = list.filter((element, key) => key < 6)

    return (
        <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">{title} ({list.length})</h2>
        <ul>
        {lista.map(itemAtual => {
          return <li key={itemAtual.id}><a href={itemAtual.link || `/ursers/${itemAtual.title}`} target="_blank">
            <img src={itemAtual.image} />
            <span>{itemAtual.title}</span>
          </a></li>
        })}
        </ul>
      </ProfileRelationsBoxWrapper>
    )
}