import { Barcode, Faker } from 'react-barcode-print';

function App() {
      return (
            <Barcode labels={Faker(6)} />
      );
}

export default App;
