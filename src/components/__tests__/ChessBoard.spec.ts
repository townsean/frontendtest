import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ChessBoard from "../ChessBoard.vue";

describe("ChessBoard", () => {
  it("table correctly draws 64 cells", () => {
    const wrapper = mount(ChessBoard);
    expect(wrapper.findAll('[data-test="chessboard-td"]')).toHaveLength(64);
  });
});
