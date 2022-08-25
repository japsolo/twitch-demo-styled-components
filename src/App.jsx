import { ThemeProvider } from "styled-components";

import { Anchor, Button, Container } from "./styledComponents/styledComponents";

const LightTheme = {
    bgColors: {
        orange: "#ffbf69"
    }
}

const DarkTheme = {
    bgColors: {
        orange: "#dc2f02"
    }
}

function App() {
    return (
        <>
            <Container className="old-container">
                <h1>Hello world!</h1>

                <ThemeProvider theme={LightTheme}>
                    <Button
                        size="sm"
                        color="red"
                    >Soy un botón normal</Button>
                    <Anchor
                        size="sm"
                        color="white"
                        bgColor="blue"
                        as="a"
                        href="https://instagram.com/thefullstackdevs"
                        target="_blank"
                    >Este será un enlace</Anchor>
                    <Button
                        size="md"
                        color="black"
                    >Soy un botón mediano</Button>
                </ThemeProvider>


                <ThemeProvider theme={DarkTheme}>
                    <Button
                        size="sm"
                        color="red"
                    >Soy un botón normal</Button>
                </ThemeProvider>

                <Button
                    size="lg"
                    color="green"
                >Soy un botón grande</Button>
            </Container>
        </>
    )
}

export default App
