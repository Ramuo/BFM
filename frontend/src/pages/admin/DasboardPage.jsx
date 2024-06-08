import AdminContainer from '../../components/AdminContainer';
import Sidebar from '../../components/header/Sidebar';
import AdminHeader from '../../components/header/AdminHeader';

const DasboardPage = () => {
  return (
    <>
        <AdminContainer>
            <AdminHeader/>
            <div className="flex  ">
                <Sidebar/>
                <div className="mt-24 ml-2">
                  hello
                </div>
            </div>
        </AdminContainer>
        
    </>
    
  )
}

export default DasboardPage;