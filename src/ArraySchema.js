export default class ArraySchema {
  validators = [(value) => Array.isArray(value)];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  allIntegers() {
    const validator = (value) => value.every((val) => Number.isInteger(val));
    this.validators.push(validator);
    return this;
  }

  custom(val) {
    const validator = (arr) => arr.every((item) => val(item));
    this.validators.push(validator);
    return this;
  }
}
