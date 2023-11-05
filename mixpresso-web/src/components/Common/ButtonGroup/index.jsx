import { Button } from "flowbite-react";

const Options = () => {

    return (
        <>
            <div className="container mx-auto mb-10">
                <div className="flex md:justify-center items-center gap-x-5 overflow-x-scroll scroll px-0.5 py-2 snap-x snap-mandatory">
                    <Button
                        size='sm'
                        className="bg-brown-900/90 dark:bg-brown-900/90 enabled:hover:bg-brown-900/80 dark:enabled:hover:bg-brown-900/80 focus:ring-0 active:scale-[1.04] transition duration-200 whitespace-nowrap"
                    >
                        Cappuccino
                    </Button>
                    <Button
                        size='sm'
                        className="bg-brown-900/90 dark:bg-brown-900/90 enabled:hover:bg-brown-900/80 dark:enabled:hover:bg-brown-900/80 focus:ring-0 active:scale-[1.04] transition duration-200 whitespace-nowrap"
                    >
                        Latte
                    </Button>
                    <Button
                        size='sm'
                        className="bg-brown-900/90 dark:bg-brown-900/90 enabled:hover:bg-brown-900/80 dark:enabled:hover:bg-brown-900/80 focus:ring-0 active:scale-[1.04] transition duration-200 whitespace-nowrap"
                    >
                        Machiato
                    </Button>
                    <Button
                        size='sm'
                        className="bg-brown-900/90 dark:bg-brown-900/90 enabled:hover:bg-brown-900/80 dark:enabled:hover:bg-brown-900/80 focus:ring-0 active:scale-[1.04] transition duration-200 whitespace-nowrap"
                    >
                        Americano
                    </Button>
                    <Button
                        size='sm'
                        className="bg-brown-900/90 dark:bg-brown-900/90 enabled:hover:bg-brown-900/80 dark:enabled:hover:bg-brown-900/80 focus:ring-0 active:scale-[1.04] transition duration-200 whitespace-nowrap"
                    >
                        Expresso
                    </Button>
                    <Button
                        size='sm'
                        className="bg-brown-900/90 dark:bg-brown-900/90 enabled:hover:bg-brown-900/80 dark:enabled:hover:bg-brown-900/80 focus:ring-0 active:scale-[1.04] transition duration-200 whitespace-nowrap"
                    >
                        Mocha
                    </Button>
                    <Button
                        size='sm'
                        className="bg-brown-900/90 dark:bg-brown-900/90 enabled:hover:bg-brown-900/80 dark:enabled:hover:bg-brown-900/80 focus:ring-0 active:scale-[1.04] transition duration-200 whitespace-nowrap"
                    >
                        Café au Lait
                    </Button>
                    <Button
                        size='sm'
                        className="bg-brown-900/90 dark:bg-brown-900/90 enabled:hover:bg-brown-900/80 dark:enabled:hover:bg-brown-900/80 focus:ring-0 active:scale-[1.04] transition duration-200 whitespace-nowrap"
                    >
                        Iced Coffee
                    </Button>
                    <Button
                        size='sm'
                        className="bg-brown-900/90 dark:bg-brown-900/90 enabled:hover:bg-brown-900/80 dark:enabled:hover:bg-brown-900/80 focus:ring-0 active:scale-[1.04] transition duration-200 whitespace-nowrap"
                    >
                        Flat White
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Options;
