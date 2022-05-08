
import { loadData, saveData } from "../utils/localStorage";
import { ADD_ITEM, DEL_ITEM } from "./action";

const cart = loadData("cartItems")||[];

const reducer = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADD_ITEM: {
      const updatedData = [...state, { ...product, qty: 1 }];
      
      const exist = state.find((x) => x.id === product.id);
      if(!exist){
        saveData("cartItems",updatedData)
      }
      
      if (exist) {
        
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        // const product = action.payload;
        return updatedData;
      }
    }
    case DEL_ITEM:
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        const updatedDate1 = state.filter((x) => x.id !== exist1.id)
        saveData("cartItems",updatedDate1)
        return (
          updatedDate1
          )
      } else {
        return state.map((x) => {
          return x.id === product.id ? { ...x, qty: x.qty - 1 } : x;
        });
      }
    default:
      return state;
  }
};
export default reducer;
