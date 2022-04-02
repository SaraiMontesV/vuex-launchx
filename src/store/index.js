import { createStore } from 'vuex'
// Flavors
import imgvainilla from '../assets/img/vainilla.jpg'
import imgfrutosrojos from '../assets/img/frutos-rojos.jpg'
import imgchocolate from '../assets/img/chocolate.jpg'
import imgzebra from '../assets/img/zebra.jpg'
import imgcafe from '../assets/img/cafe.jpg'
import imgmontblanc from '../assets/img/mont-blanc.jpg'
// Ornaments
import imgfruta from '../assets/img/fruta.jpg'
import imgchispitas from '../assets/img/chispitas-colores.jpg'
import imgchantilly from '../assets/img/Chantilli.jpg'
import imgfondant from '../assets/img/fondant.png'

export default createStore({
  state: {
    flavors: [
      {        
        name: 'Vainilla',
        id: 'vainilla',
        title: 'Pan de vainilla',
        price: 650,
        description: 'Esponjoso pan de vainilla, relleno de crema de vainilla y fondant tradicional.',
        srcImage:  imgvainilla
      },
      {
        name: 'Frutos rojos',
        id: 'frutos-rojos',
        title: 'Frutos Rojos',
        price: 750,
        description: 'Delicioso pan de vainilla, relleno de mousse de vainilla y conserva de frutos rojos.',
        srcImage:  imgfrutosrojos
      },
      {
        name: 'Chocolate con Espuma de Nutella',
        id: 'nutella',
        title: 'Chocolate con Espuma de Nutella',
        price: 820,
        description: 'Pan de chocolate relleno de mousse de Nutella y fondant tradicional.',
        srcImage:  imgchocolate
      },
      {
        name: 'Zebra',
        id:'zebra',
        title: 'Zebra',
        price: 850,
        description: 'Mitad pan de vainilla, mitad pan de chocolate, relleno mitad de mousse de chocolate y mitad mousse de vainilla.',
        srcImage:  imgzebra
      },
      {
        name: 'Expresso',
        id: 'expresso',
        title: 'Expresso',
        price: 890,
        description: 'Pan de chocolate con un exquisito relleno de espuma de café.',
        srcImage:  imgcafe
      },
      {
        name: 'Mont Blanc',
        id: 'mont-blanc',
        title: 'Mont Blanc',
        price: 650,
        description: 'Pan de chocolate, relleno de mousse de vainilla y fondant tradicional.',
        srcImage:  imgmontblanc
      }
    ],
    ornaments:[
      {
        id:'frutas',
        name: 'Fruta',
        title: 'Fruta',
        price: 180,
        description: 'Decoración con frutas de temporada',
        srcImage:  imgfruta
      },
      {
        id:'chispitas',
        name: 'Chispitas',
        title: 'Chispitas de colores',
        price: 100,
        description: 'Decoración con chispitas de colores',
        srcImage:  imgchispitas
      },
      {
        id:'chantilly',
        name: 'Chantilly cream',
        title: 'Chantilly cream',
        price: 200,
        description: 'Decoración personalizada con crema de chantilly',
        srcImage:  imgchantilly
      },
      {
        id:'fondant',
        name: 'Fondant',
        title: 'Fondant',
        price: 1000,
        description: 'Decoración personalizada con fondant',
        srcImage:  imgfondant
      }
    ],
    orders: [
      {
        id: 0,
        name: "Chelsea Shoes",
        phone: "33435363200",
        mail: "mai@mail.com",
        description: "Quiero mesdfgh",
        flavors: [ {        
          name: 'Vainilla',
          id: 'vainilla',
          title: 'Pan de vainilla',
          price: 650,
          description: 'Esponjoso pan de vainilla, relleno de crema de vainilla y fondant tradicional.',
          srcImage:  imgvainilla
        }],
        ornaments: [{
          id:'frutas',
          name: 'Fruta',
          title: 'Fruta',
          price: 180,
          description: 'Decoración con frutas de temporada',
          srcImage:  imgfruta
        }],
        total: "2323.00"
      }
    ],
  },
  getters: {
    orders: state => {
      return state.orders;
    }
  },
  mutations: {
    addOrder(state, order) {     
      let total = 0
      for (let i = 0; i < order.flavors.length; i++) {
        const flavor = order.flavors[i];
        total += flavor.price        
      }
      for (let i = 0; i < order.ornaments.length; i++) {
        const ornament = order.ornaments[i];
        total += ornament.price        
      }
      order.total = total;
      state.orders.push(order)
    }
  },
  actions: {
  },
  modules: {
  }
})
