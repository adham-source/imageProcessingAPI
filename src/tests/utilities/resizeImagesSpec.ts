import resizeImages from "../../utilities/resizeImages";

describe('Test resize image', () => {
  it('test resizeImages(output, width, height, input) argument not correct', async () => {
    expect(await resizeImages('input',200,200, "output")).toEqual("Image could not be processed. Try agin.");
  });
});