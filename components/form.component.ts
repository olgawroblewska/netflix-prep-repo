import { expect, Locator, Page } from "@playwright/test";

export type FormOptions = {
  submitText?: RegExp | string;
};

export class FormComponent {
  constructor(
    protected page: Page,
    protected root: Locator,
    protected opts: FormOptions = {}
  ) {}
  // Uniwersalne selektory (a11y-first)
  inputByLabel(label: RegExp | string) {
    return this.root.getByLabel(label, { exact: true });
  }
  inputByPlaceholder(placeholder: RegExp | string) {
    return this.root.getByPlaceholder(placeholder);
  }
  fieldByRole(
    role:
      | "textbox"
      | "combobox"
      | "spinbutton"
      | "radio"
      | "checkbox"
      | "button",
    name: RegExp | string
  ) {
    return this.root.getByRole(role as any, { name });
  }
  checkbox(name: RegExp | string) {
    return this.root.getByRole("checkbox", { name });
  }
  radio(name: RegExp | string) {
    return this.root.getByRole("radio", { name });
  }
  select(name: RegExp | string) {
    return this.root.getByRole("combobox", { name });
  }
  textarea(name: RegExp | string) {
    return this.root.getByRole("textbox", { name });
  }
  submitButton() {
    const text = this.opts.submitText ?? /submit|sign up|send/i;
    return this.root.getByRole("button", { name: text });
  }

  // Akcje wysokiego poziomu
  async fillFields(fields: Array<[Locator, string]>) {
    for (const [locator, value] of fields) {
      await locator.fill(value);
    }
}
async chooseRadio(name: string | RegExp) {
    await this.radio(name).check({ force: true });
  }
  async selectOption(selectName: string | RegExp, valueOrLabel: string) {
    await this.select(selectName).selectOption({ label: valueOrLabel }).catch(async () => {
      await this.select(selectName).selectOption(valueOrLabel);
    });
  }
  async submit() {
    await this.submitButton().click();
  }

  // Walidacje (opcjonalnie)
  async expectVisible() {
    await expect(this.submitButton()).toBeVisible();
  }
}

