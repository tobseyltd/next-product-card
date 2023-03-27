import { Navbar, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {

    return (

        <header>
            <Navbar
                isCompact="true"
                disableShadow
                disableBlur
                variant="floating"
                className="cream"
            >
                <Navbar.Brand className="mr-7">
                    <Image
                        src="/media/robot.svg"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="mr-2"
                    />
                    <Link href={'/'}>
                        <Text className="font-bold">tobsey |</Text>
                    </Link>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <Navbar.Link aria-label="Home" href="/">Home</Navbar.Link>
                    <Navbar.Link aria-label="Components" href="#">Components</Navbar.Link>
                    <Navbar.Link aria-label="Contact" href="#">Hire Me</Navbar.Link>
                </Navbar.Content>
            </Navbar>
        </header>
    )
}