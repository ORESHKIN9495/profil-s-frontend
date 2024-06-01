export class Protector {
  private fields: { [key: string]: { rule: Function[]; errorMessage: string }[] };

  constructor(...fieldRules: { fieldName: string; rule: Function; errorMessage: string }[]) {
    this.fields = {};

    for (const { fieldName, rule, errorMessage } of fieldRules) {
      if (!this.fields[fieldName]) {
        this.fields[fieldName] = [];
      }

      this.fields[fieldName].push({ rule: [rule], errorMessage });
    }
  }

  public validate(data: any): { [key: string]: string } {
    const errors: { [key: string]: string } = {};

    for (const fieldName in this.fields) {
      const fieldErrors: string[] = [];

      for (const { rule, errorMessage } of this.fields[fieldName]) {
        for (const ruleFunc of rule) {
          if (!ruleFunc(data[fieldName])) {
            fieldErrors.push(errorMessage);
            break;
          }
        }
      }

      if (fieldErrors.length > 0) {
        errors[fieldName] = fieldErrors.join("; ");
      }
    }

    return errors;
  }

  public async validateAsync(data: any): Promise<{ [key: string]: string }> {
    const errors: { [key: string]: string } = {};

    for (const fieldName in this.fields) {
      const fieldErrors: string[] = [];

      for (const { rule, errorMessage } of this.fields[fieldName]) {
        for (const ruleFunc of rule) {
          if (!(await ruleFunc(data[fieldName]))) {
            fieldErrors.push(errorMessage);
            break;
          }
        }
      }

      if (fieldErrors.length > 0) {
        errors[fieldName] = fieldErrors.join("; ");
      }
    }

    return errors;
  }
}

export function isEmail(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export function minLength(value: string, min: number): boolean {
  return value.length >= min;
}

export function isPhone(value: string): boolean {
  const phoneRegex = /^\+7\d{10,11}$/;
  return phoneRegex.test(value);
}
