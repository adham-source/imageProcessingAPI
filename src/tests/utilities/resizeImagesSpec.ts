import { configPathImage } from "../../utilities/resizeImages";

describe("Test function in utilities", () => {
    it("configPathImage(name) must take correct image name to be truthy", () => {
        const name = "encenadaport"
        expect(configPathImage(name)).toBeTruthy()
    })
})