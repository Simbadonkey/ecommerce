import { FormControl, ValidationErrors } from "@angular/forms";

export class WhitespaceValidators {


    //whitespace validation
    static notOnlyWhitespace(control: FormControl): ValidationErrors{
        
        //check if string only contains whitespace
        if((control.value != null) && (control.value.trim().length === 0)){

            //invalid, return error object.
            //validation error key. HTML template will check for this error key
            return { 'notOnlyWhitespace': true};
        }


        return null;
    }
}
