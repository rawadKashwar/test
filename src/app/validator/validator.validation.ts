import { AbstractControl, ValidationErrors } from "@angular/forms";

export class TextValidator{
 static noSpaces(control:AbstractControl):ValidationErrors | null{
    if((control.value as string).indexOf(' ')!=-1)
      return {noSpaces:true};
    else{
    return null;
    }
  }
}