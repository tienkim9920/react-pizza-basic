import LogoPizza from '../assets/pizza.png';

const HomePage = () => {
  return (
    <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto' }}>
      <div className="wrapper-card-items">
        <div className="card-items">
          <img className='card-image-pizza' src={LogoPizza} alt="9DevPizza" />
          <div style={{ height: '50%', width: '100%' }}></div>
          <div className='card-content'>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 600, color: '#fff' }}>Pizza Thịt Bầm</div>
              <div style={{ fontSize: '15px', fontWeight: 300, color: '#fff', marginTop: '.5rem' }}>Thịt bầm, sốt cà chua</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomePage;
