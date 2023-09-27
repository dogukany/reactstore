import renderer from "react-test-renderer";

import FavoriteButton from "./FavoriteButton";

describe("FavoriteButton", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<FavoriteButton isFavorite handleFavorite={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
