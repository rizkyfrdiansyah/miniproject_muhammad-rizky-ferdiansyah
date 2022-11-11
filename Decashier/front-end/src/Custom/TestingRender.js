// import { useUppercase } from "./useUppercase";
// import { renderHook } from "@testing-library/react-hooks";

// describe("when re-renderd with another intial value", () => {
//   it("updates thes value", () => {
//     const { result, rerender } = renderHook(({ text }) => useUppercase(text), {
//       initialProps: { text: "Test String" },
//     });

//     rerender({ text: "Updated:" });
//     expect(result.current.value).toEqual("UPDATED!");
//   });
// });
