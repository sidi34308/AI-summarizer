import Hero from './components/Hero'
import Demo from './components/Demo'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (

        <main className='m-0'>
            <Header />
            <div className=''>
                <div className=''></div>
            </div>
            <div className='app text-white'>


                <Hero />
                <Demo />
            </div>
            <Footer />
        </main>

    )
}

export default App
