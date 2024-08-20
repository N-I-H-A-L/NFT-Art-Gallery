import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import MyNft from '../Layout/MyNft'

function MyNftPage() {
  return (
    <>
       <div className="min-h-screen w-full dark:bg-black bg-white flex flex-col items-center justify-center">
        <Navbar />
        <MyNft />
      </div>
      <Footer />
    </>
  )
}

export default MyNftPage