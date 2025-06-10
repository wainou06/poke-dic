import { useCallback, useState } from 'react'
import './CSS/PokeHeader.css'
import main_logo from './images/main_logo.png'
import sub_logo from './images/sub_logo.png'
import { FiAlignLeft, FiX } from 'react-icons/fi'
import { PiUserCircleFill } from 'react-icons/pi'
import { FaSearch } from 'react-icons/fa'

function PokeHeader({ inputValue, onInputChange, onAdd }) {
   const [icon, setIcon] = useState(true)

   const toggleMenu = useCallback(() => {
      setIcon((prev) => !prev)
   }, [])

   return (
      <div className="header">
         <nav className="pcmedia">
            <div className="main-logo">
               <img src={main_logo} alt="로고" />
            </div>
            <div className="container">
               <div className="menu">
                  <ul className="menu-list">
                     <li>소식</li>
                     <li>게임</li>
                     <li>카드 게임</li>
                     <li>애니메이션</li>
                     <li>상품</li>
                  </ul>
               </div>
               <div className="login">
                  <ul className="list">
                     <li>포켓몬 도감</li>
                     <li>로그인</li>
                     <li>통합검색</li>
                  </ul>
               </div>
            </div>
            <div className="sub-logo">
               <a>
                  <img src={sub_logo} alt="스토어 로고" />
               </a>
            </div>
         </nav>

         <div className="pc-menu">
            <input type="text" value={inputValue} onChange={onInputChange} placeholder="잡은 포켓몬 이름을 입력해주세요." />
            <button className="catch" onClick={onAdd} />
         </div>

         <nav className="moblemedia">
            <button className="menu" onClick={toggleMenu}>
               {icon ? <FiAlignLeft /> : <FiX />}
            </button>
            <div className="main-logo">
               <img src={main_logo} alt="로고" />
            </div>
            <div className="icons">
               <PiUserCircleFill className="icon" />
               <FaSearch className="icon" />
            </div>
         </nav>

         {!icon && (
            <div className="mobile-menu">
               <input type="text" value={inputValue} onChange={onInputChange} placeholder="잡은 포켓몬 이름을 입력해주세요." />
               <button className="catch" onClick={onAdd} />
            </div>
         )}
      </div>
   )
}

export default PokeHeader
