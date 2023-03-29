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

    contentWrapper[0].className += ' hidden';
    thankYou_Wrapper[0].className = 'thank-you-wrapper';
}

/** This func will set rating buttons active */

export const setActive = (): void => {
    const buttons = document.querySelectorAll<HTMLElement>('[id=btn]');

    buttons.forEach(button => {
        button.onclick = () => {
            const current = document.getElementsByClassName("active");

            if (current.length === 0) {
                button.className += " active";
            }
            current[0].className = 'btn rounded-full bg-white/5 text-white/60 w-12 hover:bg-medium-grey hover:cursor-pointer p-3 font-medium'
            button.className += " active";
           
            // button.onclick = () => {
            //     button.className = 'btn rounded-full bg-white/5 text-white/60 w-12 hover:bg-medium-grey hover:cursor-pointer p-3 font-medium'
            // }
        }
    })
}