import configImage from "../../utilities/configImage"
describe("Test function in utilities", () => {
    const imageAllowName = ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica'];

    describe("Test configImage.imageNamesAllow(name)", () => {
        it("configImage.imageNamesAllow(name) The image name must be correct", () => {
            expect(configImage.imageNamesAllow(imageAllowName[0])).toEqual(true)
        })

        it("configImage.imageNamesAllow(name) The image name is incorrect", () => {
            expect(configImage.imageNamesAllow("hjkhkl")).toEqual(false)
        })
    })
})