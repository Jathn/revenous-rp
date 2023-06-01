import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

const MyBiz = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const MyBizList = [MyBiz, MyBiz, MyBiz, MyBiz, MyBiz, MyBiz]

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList businesses={MyBizList}/>
    </div>
  );
}

export default App;
