import './App.css'

function App() {

  return (
    <>
      <header className='header'>
        <nav className='nav'>
          <h1>Event Name</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

     <div className='about'>
      <h2>Welcome to the Event!</h2>
      <p>Join us for an exciting event filled with fun and learning. 12/03/2024 </p>
      <button>Register Now</button>
     </div>

     <div className='card-main'>
      <div className='card'>
        <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQZuwNFIaMjlMKfzLlYwlkfpTvokZiJw3xnjPnyp3nTo08n7fR7o4vUH88tUo7HHI4hy5m_VpvLzrFv2izpJlj4ZLECXJc6TmdXLEnISnZHbBbAZFN7utySjcGYe-VrlU9oCZ-HUWvkrrc4GhNNGCOyou.jpg?r=836" alt="" />
        <h3>Name</h3>
        <p>Description for speaker</p>
      </div>
      <div className='card'>
        <img src="https://m.media-amazon.com/images/I/71PTAp96xLL._UF1000,1000_QL80_.jpg" alt="" />
        <h3>Name</h3>
        <p>Description for speaker</p>
      </div>
     </div>

     <div className='timeline'>
      <h2>Timeline</h2>
      <ul>  
        <li>Morning</li>
        <li>Afternoon</li>
        <li>Evening</li>
      </ul>
     </div>

      <footer className='footer'>
        <p>&copy; 2024 Event Name. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
