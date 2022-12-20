import carsReducer from "./carsReducer";
/* import userReducer from "./userReducer"; */
import itemsReducer from "./itemsReducer";
const rootReducer= {
    cars : carsReducer,
    items: itemsReducer,
/*     usuario:userReducer, */
}

export default rootReducer