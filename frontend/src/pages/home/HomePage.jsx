import {useState} from 'react';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdAdv from './ThirdAdv';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import SixthSection from './SixthSection';
import SeventhSection from './SeventhSection';
import EighthSection from './EighthSection';
import NinthSection from './NinthSection';
import TenthSection from './TenthSection';
import EleventhSection from './EleventhSection';
import Header from '../../components/header/Header';


const HomePage = () => {
  const [showFooterSearch, setShowFooterSearch] = useState(false)
  const onSearchButtonClick = () =>{
    setShowFooterSearch(!showFooterSearch);
  }
  return (
    <>
      <Header onSearchButtonClick={onSearchButtonClick}/>
      <div>
        {!showFooterSearch &&(
          <>
            <FirstSection/>
            <SecondSection/>
            <ThirdAdv/>
            <FourthSection/>
            <FifthSection/>
            <SixthSection />
            <SeventhSection />
            <EighthSection/>
            <NinthSection/>
            <TenthSection/>
            <EleventhSection/>
          </>
        )}
      </div>
    </>
  )
}

export default HomePage