import { toast } from "react-hot-toast";


export const notify = (): void => {

    toast('Sorry, you need to select a value first, in order to submit a product rating', {
        icon: '❌',
        position: "bottom-center"
    });
}

/** This func will set Thank You Screen */

export const setThankYou_Screen = (): void => {
    const contentWrapper = document.getElementsByClassName('content-wrapper')
    const thankYou_Wrapper = document.getElementsByClassName('thank-you-wrapper')

    contentWrapper[0].classList.add('hidden');
    thankYou_Wrapper[0].classList.remove('hidden');
}

/** This func will set rating buttons active */

export const setActive = (): void => {
    const buttons = document.querySelectorAll<HTMLElement>('[id=btn]');

    buttons.forEach(button => {
        button.onclick = () => {
            const current = document.getElementsByClassName("active");

            if (current.length === 0) {
                button.classList.add("active");
            }
            current[0].classList.remove("active");
            button.classList.add("active");
           
            button.onclick = () => {
                button.classList.remove("active");
                setActive()
            }
        }
    })
}