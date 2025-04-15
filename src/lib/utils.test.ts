import { describe, it, expect } from "vitest";
import { cn } from "./utils"; // Adjust the import path as needed

describe("cn utility function", () => {
  it("should merge class names correctly", () => {
    expect(cn("text-red-500", "bg-blue-500")).toBe("text-red-500 bg-blue-500");
  });

  it("should handle conditional classes", () => {
    const isActive = true;
    const isDisabled = false;

    expect(
      cn("btn", isActive && "btn-active", isDisabled && "btn-disabled")
    ).toBe("btn btn-active");
  });

  it("should handle arrays of classes", () => {
    expect(cn(["text-lg", "font-bold"], "text-center")).toBe(
      "text-lg font-bold text-center"
    );
  });

  it("should handle objects with boolean values", () => {
    expect(
      cn({
        "text-primary": true,
        "bg-secondary": true,
        rounded: false,
      })
    ).toBe("text-primary bg-secondary");
  });

  it("should merge Tailwind classes properly", () => {
    // Testing that conflicting Tailwind classes are properly merged
    expect(cn("px-4 py-2", "px-6")).toBe("py-2 px-6");
    expect(cn("text-sm text-gray-500", "text-blue-500")).toBe(
      "text-sm text-blue-500"
    );
    expect(cn("w-full", "w-auto")).toBe("w-auto");
  });

  it("should handle complex combinations", () => {
    const variant: string = "primary";
    const size: string = "lg";
    const isFullWidth = true;

    expect(
      cn(
        "btn",
        {
          "btn-primary": variant === "primary",
          "btn-secondary": variant === "secondary",
          "btn-sm": size === "sm",
          "btn-lg": size === "lg",
        },
        isFullWidth && "w-full",
        ["shadow-sm", "rounded"]
      )
    ).toBe("btn btn-primary btn-lg w-full shadow-sm rounded");
  });

  it("should handle undefined and null values", () => {
    expect(cn("base-class", undefined, null, "valid-class")).toBe(
      "base-class valid-class"
    );
  });

  it("should handle empty string values", () => {
    expect(cn("base-class", "", "valid-class")).toBe("base-class valid-class");
  });
});
