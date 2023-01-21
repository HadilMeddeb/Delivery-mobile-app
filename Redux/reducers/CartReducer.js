let defaultState = {
  selectedItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };

      if (action.payload.checkboxValue) {
        console.log("ADD TO CART");

        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.RestaurantName,
        };
      } else {
        console.log("REMOVE FROM CART");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.id !== action.payload.id
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };

      }
      console.log(newState.selectedItems.items, "👉");
      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;