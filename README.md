# toolkit jop app

## toolkit kurulumu

1. Gerekli paketlerin indirilmesi

` npm i  react-redux @reduxjs/toolkit `

2. Dosyaların oluşturulması

Src klasörünün içerisine bir redux klasörü oluşturulur ve içerisine bir store.js ve en az bir tane ...Slice.js oluşturulur.

3. ...Slice.js dosyası 
toolkit ile birlikte artık createReducer ve combineReducer metodlarının kullanılmasına gerek yoktur. Bununla beraber actionTypes.js ve action.js dosyalarını kurmaya da gerek kalmaz.
Bunun yerine createSlice() metodu kullanılır. Slice içerisinde bir rerducer ve içerisinde action lar tanımlanır ve son olarak bu reducer ve actionlar export edilir.

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jops :[],
    initialized :false,
    isError:false
}

const jopSilece = createSlice({
        name:'jops',
        initialState,
        reducers : {
            setJop: (state,action) => {
                state.jops = action.payload;
                state.initialized=true;
            },
            setError:(state) => {
                state.isError = true;
                state.initialized =true;
            }
        }
})

//aksiyonları export etme
export const  {setJop,setError} = jopSilece.actions; 


//createSlice in oluşturduğu reducer i export etme 
export default jopSilece.reducer;
```
4. store.js dosyası 
burada  configureStore() metodu kullanılır. ve oluşturulan reducerlear store'a tanıtılır.

```javascript
import { configureStore } from "@reduxjs/toolkit";
import jopSlice from "./jopSlice";

export default configureStore({reducer:jopSlice}); // bir kaç tane olsaydı obje içerisinde yazılırdı
```
5. Projeye Tanıtma

main.jsx içerisinde oluşturulan store projeye tanıtılır 

```javascript
import { Provider } from 'react-redux'
import store from './redux/store.js'

  <Provider store={store}>
    <App />
  </Provider>
```


## kulanılan kütüphaneler
- react-router-dom
- axios
- sass 
- react-toastify
- json-server
- react-redux
- @reduxjs/toolkit
- uuid

### used hook

- useRef: js deki getElementById nin işlevini görür