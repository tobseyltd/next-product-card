export function replaceValidationUI(form: any) {

    form.addEventListener("invalid", (event: any) => {
        event.preventDefault();
    }, true);

    const submitButton = form.querySelector("button:not([type=button]), input[type=submit]");

    submitButton.addEventListener("click", () => {

        let invalidFields = form.querySelectorAll(":invalid"),
            errorMessages = form.querySelectorAll(".error-message"),
            validFields = form.querySelectorAll(":valid"),
            labels = form.querySelectorAll("label");


        // Remove any existing messages
        errorMessages.forEach((message: any): void => {
            message.parentNode.removeChild(message);
        })

        // Add new Error Style
        invalidFields.forEach((field: any, index: number): void => {
            field.classList.add('border-rose-500')
            field.parentNode.insertAdjacentHTML("beforeend", "<div class='error-message text-red-600 text-xxs -mt-5 ml-2'>" +
                field.validationMessage + "</div>");
            invalidFields[0].focus();
            labels[index].classList.add('text-red-600')

        })

        // Remove red borders and text on validation
        validFields.forEach((valid: any, index: number) => {
            valid.classList.remove('border-rose-500')

            submitButton.addEventListener("click", () => {
                labels[index].classList.remove('text-red-600')
            })
        })
    });
}
