import Nav from './Nav';
import Adv from "./Adv"

const Header = ({onSearchButtonClick}) => {
  return (
    <>
        <Adv/>
        <Nav onSearchButtonClick={onSearchButtonClick}/>
    </>
  )
}

export default Header