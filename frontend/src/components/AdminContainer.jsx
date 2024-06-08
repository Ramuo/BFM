


const AdminContainer = ({children}) => {


  return (
    <main className="flex flex-col min-h-screen max-h-full dashboard w-full">
      <div className="flex">
        {children}
      </div>
    </main>
  )
}

export default AdminContainer