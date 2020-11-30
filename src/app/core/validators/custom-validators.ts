import { FormArray } from '@angular/forms';

export default class CustomValidators {
  static multipleCheckboxRequireOne(formArray: FormArray): object {
    let valid = false;

    for (let x = 0; x < formArray.length; ++x) {
      if (formArray.at(x).value) {
        valid = true;
        break;
      }
    }

    return valid
      ? null
      : {
          multipleCheckboxRequireOne: true
        };
  }
}
