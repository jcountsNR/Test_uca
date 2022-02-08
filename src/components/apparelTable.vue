<template>
    
  <v-simple-table 
      item-key="id"
      class="elevation-1 mt-12 mx-auto"
      hide-default-footer>

      <thead>
        <tr>
          <th class="text-center">
          Image
          </th>
          <th class="text-center">
            Name
          </th>
          <th class="text-center">
            Price
          </th>
          <th class="text-center">
            Color
          </th>
          <th class="text-center">
            Size
          </th>
          <th class="text-center">
            Print
          </th>
          <th class="text-center">
            Quantity
          </th>
          <th class="text-center">
            Add
          </th>
        </tr>
      </thead>
      <tbody>
        
        <tr
          v-for="item in apparels"
          :key="item.id"
        >
          <td>
            <v-card height="90" width="60" class="image"
                >
              <v-img
                :src="item.src"               
               class="image"
               height="90"
               width="60"
               
              ></v-img>
            </v-card>
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td> 
                <v-col
            class="d-flex"
                        >
            <v-select
              :items="item.color"
              label="Color"
              outlined
               ></v-select>
          </v-col>
      </td>
          <td>
              <v-col class="d-flex">
                <v-select 
                :items="item.size"
                label="Size"
                outlined                
                ></v-select>
              </v-col>
          </td>
          <td>
             <v-col class="d-flex">
                <v-select 
                :items="item.print"
                label="Style"
                outlined                
                ></v-select>
              </v-col>
          </td>
          <td>
             <v-col class="d-flex">
                <v-select 
                :items="qty"
                label="Quantity"
                outlined
                v-model="qty"
                ></v-select>
              </v-col>
          </td>
          <td>
            <v-btn @click="addToCart(qty)" id="addToCartBtn">
              Add
            </v-btn>
          </td>
        </tr>
      </tbody>
      
           </v-simple-table>
</template>
<script>
const images = require.context('../assets/merch/', true)
export default {
    data() {
      const colors= [
          '',
          'Blue',
          'Gray',
          'Green',
          'Black',
          'White'
          ];

      const sizes= [
              '',
        'Youth XS (2-4)',
        'Youth S (6-8)',
        'Youth M (10-12)',
        'Youth L (14-16)',
        'Youth XL (18-20',
        'Adult S',
        'Adult M',
        'Adult L',
        'Adult XL',
        'Adult XXL',
        'Adult XXXL'
      ];
      const print = ['Print Logo', 'Embroidery Logo'];
  //    const cart = [];

        return {
            
         apparels: [ 
              
    {
          id: 1,  
          name: 'Short Sleeve T-Shirt',
          price: '$11',
          print: print,
          qty: '',
          size: sizes,
          color: colors,
          src: images('./shortsleevet.jpg')
        },    {
          id: 2,
          name: 'Long Sleeve T-Shirt',
          price: '$16',
          print: print,
          qty: '',
          size: sizes,
          color: colors,
          src: images('./longsleevet.jpg') 
        },    {
          id: 3,
          name: 'Traditional Hoodie',
          price: '$24',
          print: print,
          qty: '',
          size: sizes,
          color: colors,
          src: images('./traditionalhoodie.jpg')
        },    {
          id: 4,
          name: 'Sport-Tek Hoodie',
          price: '$40',
          print: print,
          qty: '',
          size: sizes,
          color: colors,
          src: images('./sporttekhoodie.jpg')
        },    {
          id: 5,
          name: 'T-80 Men\'s Jacket',
          price: '$48',
          print: print,
          qty: '',
          size: sizes,
          color: colors,
          src: images('./t80men.jpg')
        },    {
          id: 6,
          name: 'T-80 Women\'s Jacket',
          price: '$48',
          print: print,
          qty: '',
          size: sizes,
          color: colors,
          src: images('./t80women.jpg')
        },    {
          id: 7,
          name: 'J. America Sherpa',
          price: '$46',
          print: print,
          qty: '',
          size: sizes,
          color: colors,
          src: images('./jamerica.jpg')
        },    {
          id: 8,
          name: 'Liberty Duffle Bag 2251',
          price: '$18',
          print: print,
          qty: '',
          size: sizes,
          color: colors,
          src: images('./2251.jpg')
        },    {
          id: 9,
          name: 'Liberty Duffel Bag 3906',
          price: '$35',
          print: print,
          qty: '',
          size: sizes,
          color: colors,
          src: images('./3906.jpg')
        }],     
      
         qty: [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        cart: null,
        }
    },

fetchCart() {
  this.$commerce.cart.retrieve().then((cart) =>{
    this.cart = cart;
  }).catch((error) => {
    console.log('There is an error fetching the cart', error);
  });
},
created() {
  this.fetchProducts();
  this.fetchCart();
},

methods: {
  addToCart() {
    this.$emit('add-to-cart', this.product.id, 1);
  }
},
   
}
</script>