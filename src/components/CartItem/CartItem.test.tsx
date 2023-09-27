//renders correctly

import uuid from "react-native-uuid";
import renderer from "react-test-renderer";
import CartItem from "./CartItem";

describe("CartItem", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <CartItem
          item={{
            id: uuid.v4(),
            name: "Test",
            price: 100,
            imageUrl: "https://via.placeholder.com/150",
            description: "Test",
            shippingMethod: "spaceship",
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
