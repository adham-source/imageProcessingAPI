import imageExist from "../../utilities/imageExist";

it("imageExist(path) The path of image after resize is exist to be equal null", async () => {
    expect(await imageExist("path")).toEqual(null)
})

