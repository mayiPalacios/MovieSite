import usePagination from "lastHomework/hooks/usePagination";
import { renderHook, act } from "@testing-library/react-hooks";

test("testing pagination hook", async () => {
  const initialPage = 1;
  const { result } = renderHook(() => usePagination(initialPage, 10, 100));
  expect(result.current.currentPage).toBe(initialPage);
});

test("handleNextPage should increment the current page by 1", () => {
  const { result } = renderHook(() => usePagination(1, 10, 100));
  act(() => {
    result.current.handleNextPage();
  });
  expect(result.current.currentPage).toBe(2);
});

test("handlePreviousPage should decrement the current page by 1", () => {
  const { result } = renderHook(() => usePagination(2, 10, 100));
  act(() => {
    result.current.handlePreviousPage();
  });
  expect(result.current.currentPage).toBe(1);
});
