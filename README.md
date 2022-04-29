# Get Started

`
      npm install react-barcode-print
`

```
      import { Barcode, Faker } from 'react-barcode-print';

      function App(){
            return <Barcode labels={Faker(60)} />
      }
```
  
```
      //labels is an array 
      [
            {
                  id:1,
                  price:200,
                  sku:1029010 // stock keeping unit
            }
      ]
```

## Example Output
![Output](https://raw.githubusercontent.com/channyeintun/react-barcode-print/main/images/barcode.png)