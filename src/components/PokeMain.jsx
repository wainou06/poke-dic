import './CSS/PokeMain.css'

function PokeMain({ pokemons, onBlack, onEvolve, onRemove }) {
   return (
      <div className="main">
         <div className="title">나의 포켓몬</div>
         <ul className="cards">
            {pokemons.map((poke) => {
               const { name, img } = poke.steps[poke.currentStep]
               return (
                  <li key={poke.id}>
                     <div onDoubleClick={() => onBlack(poke.id)}>
                        <img className={poke.isBlack ? 'black-filter' : ''} src={img} alt={name} />
                        <p className={poke.isBlack ? 'gray' : 'black'}>{name}</p>
                        <button className="evolve" onClick={() => onEvolve(poke.id)}>
                           진화
                        </button>
                        <button className="remove" onClick={() => onRemove(poke.id)}>
                           풀어주기
                        </button>
                     </div>
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

export default PokeMain
