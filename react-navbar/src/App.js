import logo from './logo.jpg';
import './App.css';

function App() {
  let links = ["Services", "Projects", "About"]
  return (
    <div className="App">
      <Logo />

      <div className='links'>
      {links.map((e)=>{
        return <Links link={e} />
      })}
      </div>

    <Butt />
    </div>
  );

  
}

function Logo()
{
  return <img src={logo} />
}


function Links({link})
{
  return <p className='links'>{link}</p>
}

function Butt()
{
  return <button>Contact</button>
}

export default App;
