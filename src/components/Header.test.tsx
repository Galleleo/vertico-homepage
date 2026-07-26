import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";

describe("Header", () => {
  it("toggles the mobile nav open and closed", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const button = screen.getByRole("button", { name: /menü/i });
    expect(button).toHaveAttribute("aria-expanded", "false");

    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("navigation", { name: /mobile/i })).toBeVisible();

    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
