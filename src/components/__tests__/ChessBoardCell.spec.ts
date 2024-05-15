import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ChessBoardCell from "../ChessBoardCell.vue";

describe("ChessBoardCell", () => {
  it("name is 'a2' when file prop is 'a' and rank prop is 2", () => {
    const wrapper = mount(ChessBoardCell, { props: { rank: 2, file: "a" } });
    expect(wrapper.vm.name).toEqual("a2");
  });

  it("isActive is true after cell click event"),
    async () => {
      const wrapper = mount(ChessBoardCell, { props: { rank: 2, file: "a" } });

      expect(wrapper.vm.isActive).toBeFalsy();
      await wrapper.get('[data-test="cell"]').trigger("click");
      expect(wrapper.vm.isActive).toBeTruthy();
    };
});
