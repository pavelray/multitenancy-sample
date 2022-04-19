import Helmet from 'react-helmet';

function App() {
  const getCountry = () =>{

    switch(process.env.REACT_APP_TENANT){
      case 'cl': 
        return 'Chille';
      case 'pe':
        return 'Peru'
      default:
        return ''
    }

  }
  return (
    <>
    <Helmet>
      <title>Welcome App </title>
    </Helmet>
    <div>
      <div>
        Welcome to <b>{process.env.REACT_APP_NAME}</b>
      </div>
      <div>Country : {getCountry() }</div>
    </div>
    </>
  );
}

export default App;
