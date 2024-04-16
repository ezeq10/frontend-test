import { renderHook, act } from "@testing-library/react-hooks";
import useStateWithStorage from "./useStateWithStorage";

describe("useStateWithStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("should return default value when storage is empty", () => {
    let hookResult = renderHook(() => useStateWithStorage("testKey", "defaultValue"));
    act(() => {
      const [value] = hookResult.result.current;
      expect(value).toBe("defaultValue");
    });
  });

  test("should return stored value from storage", () => {
    localStorage.setItem("testKey", JSON.stringify("storedValue"));
    let hookResult = renderHook(() => useStateWithStorage("testKey", "defaultValue"));
    act(() => {
      const [value] = hookResult.result.current;
      expect(value).toBe("storedValue");
    });
  });

  test("should update storage when state changes", () => {
    let hookResult = renderHook(() => useStateWithStorage("testKey", "defaultValue"));
    act(() => {
      const [, setValue] = hookResult.result.current;
      setValue("updatedValue");
    });
    expect(localStorage.getItem("testKey")).toBe(JSON.stringify("updatedValue"));
  });
});