import renderer from "react-test-renderer";
import Button from "./Button";

const mockFn = jest.fn();

describe("Button", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Button text="Test" onPress={mockFn} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
