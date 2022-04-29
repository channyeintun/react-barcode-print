
export function Faker() {
      return [...(new Array(21))].map((item, index) => {
            const min = 10000000;
            const max = 99999999;
            const min2 = 1000;
            const max2 = 9999;
            const sku = Math.floor(Math.random() * min) + max;
            const price = Math.floor(Math.random() * min2) + max2;
            return {
                  id: index,
                  price,
                  sku
            }
      });
}