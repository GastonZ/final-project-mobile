import carsReducer from "./carsReducer";
import userReducer from "./userReducer";
import itemsReducer from "./itemsReducer";
import cartReducer from "./cartReducer";
const rootReducer= {
    cars : carsReducer,
    items: itemsReducer,
    usuario:userReducer,
    cart: cartReducer,
}

export default rootReducer