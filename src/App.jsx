import { useCallback, useState } from 'react'
import PokeHeader from './components/PokeHeader'
import PokeFooter from './components/PokeFooter'
import PokeMain from './components/PokeMain'

// 진화 맵 정의
const evolutionMap = {
   피카츄: ['피카츄', '라이츄'],
   메타몽: ['메타몽'],
   파이리: ['파이리', '리자드', '리자몽'],
   이상해씨: ['이상해씨', '이상해풀', '이상해꽃'],
   꼬부기: ['꼬부기', '어니부기', '거북왕'],
   캐터피: ['캐터피', '단데기', '버터플'],
   구구: ['구구', '피죤', '피죤투'],
   푸린: ['푸린', '푸크린'],
   뚜벅쵸: ['뚜벅쵸', '냄새꼬', '라플레시아'],
   나옹: ['나옹', '페르시온'],
   고라파덕: ['고라파덕', '골덕'],
   발챙이: ['발챙이', '슈륙챙이', '강챙이'],
   야돈: ['야돈', '야도란', '야도킹'],
}

function App() {
   const [inputValue, setInputValue] = useState('')
   const [nextId, setNextId] = useState(4)

   const [pokemons, setPokemons] = useState([
      {
         id: 1,
         currentStep: 0,
         steps: [
            { name: '피카츄', img: '/images/피카츄.png' },
            { name: '라이츄', img: '/images/라이츄.png' },
         ],
         isBlack: false,
      },
      {
         id: 2,
         currentStep: 0,
         steps: [{ name: '메타몽', img: '/images/메타몽.png' }],
         isBlack: false,
      },
      {
         id: 3,
         currentStep: 0,
         steps: [
            { name: '파이리', img: '/images/파이리.png' },
            { name: '리자드', img: '/images/리자드.png' },
            { name: '리자몽', img: '/images/리자몽.png' },
         ],
         isBlack: false,
      },
   ])

   const handleInputChange = useCallback((e) => {
      setInputValue(e.target.value)
   }, [])

   const handleAdd = useCallback(() => {
      const name = inputValue.trim()
      if (!name) {
         alert('1단계 포켓몬 이름을 입력해주세요. (진화 전)')
         setInputValue('')
         return
      }

      if (pokemons.some((p) => p.steps[0].name === name)) {
         alert('이미 등록된 포켓몬입니다.')
         setInputValue('')
         return
      }

      const evo = evolutionMap[name]
      if (!evo) {
         alert('1단계 포켓몬 이름을 입력해주세요. (진화 전)')
         setInputValue('')

         return
      }

      const steps = evo.map((n) => ({
         name: n,
         img: `/images/${n}.png`,
      }))

      const newPokemon = {
         id: nextId,
         currentStep: 0,
         steps,
         isBlack: false,
      }

      alert(`${name}, 넌 내 거야!`)
      setPokemons([...pokemons, newPokemon])
      setNextId((prev) => prev + 1)
      setInputValue('')
   }, [inputValue, pokemons, nextId])

   const handleRemove = useCallback((id) => {
      setPokemons((prev) => prev.filter((p) => p.id !== id))
      alert(`잘 가, 그동안 즐거웠어!`)
   }, [])

   const onEvolve = useCallback((id) => {
      setPokemons((prev) =>
         prev.map((poke) => {
            if (poke.id === id) {
               const nextStep = poke.currentStep + 1
               const maxStep = poke.steps.length - 1
               if (nextStep > maxStep) {
                  alert('진화 끝!')
                  return poke
               }

               alert(`어라? 포켓몬의 모습이?!`)
               alert('진화~!')

               return {
                  ...poke,
                  currentStep: nextStep,
               }
            }
            return poke
         })
      )
   }, [])

   const onBlack = useCallback((id) => {
      setPokemons((prev) => prev.map((poke) => (poke.id === id ? { ...poke, isBlack: !poke.isBlack } : poke)))
   }, [])

   return (
      <div className="wrap">
         <PokeHeader inputValue={inputValue} onInputChange={handleInputChange} onAdd={handleAdd} />
         <PokeMain pokemons={pokemons} onRemove={handleRemove} onEvolve={onEvolve} onBlack={onBlack} />
         <PokeFooter />
      </div>
   )
}

export default App
