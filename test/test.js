import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require
const {default: aliasFields} = indexModule

it("should run", () => {
  expect(aliasFields({a: 2})).toStrictEqual({a: 2})
  expect(aliasFields({b: 2}, {a: "b"})).toStrictEqual({a: 2})
})