import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SideBar from "../SideBar.vue";

describe("SideBar", () => {
  it("renders properly", () => {
    const wrapper = mount(SideBar, { props: { cells: ["a2"] } });
    expect(wrapper.text()).toContain("a2");
  });
});
