import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import React from "react";
import uuid from "react-native-uuid";
import renderer from "react-test-renderer";
import ProductCardModal from "./ProductCardModal";

describe("ProductCardModal", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <BottomSheetModalProvider>
          <ProductCardModal
            ref={React.createRef()}
            item={{
              id: uuid.v4(),
              name: "Test",
              price: 100,
              imageUrl: "https://via.placeholder.com/150",
              description: "Test",
              shippingMethod: "spaceship",
            }}
          />
        </BottomSheetModalProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
