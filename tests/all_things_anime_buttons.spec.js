import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.crunchyroll.com/about/");
  await page.getByRole("tab", { name: "Events" }).click();
  await page.getByRole("tab", { name: "Theatrical" }).click();
  await page.getByRole("tab", { name: "Merchandise" }).click();
  await page.getByRole("tab", { name: "Games" }).click();
  await page.getByRole("tab", { name: "Manga" }).click();
  await page.getByRole("tab", { name: "Streaming" }).click();
});
