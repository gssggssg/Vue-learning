import VUue from 'vue'
import Vuex from 'vuex'

import home from './home'

VUue.use(Vuex)

export default new Vuex.Store({
    modules:{
        home:home
    }
})