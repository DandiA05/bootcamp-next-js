import renderer from "react-test-renderer";
import Button from "@/components/Button";

describe("Button Component", () => {
  it("Render a button", () => {
    const tree = renderer
      .create(
        <Button title={"Ini Button"} onClick={() => console.log("Button")} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
