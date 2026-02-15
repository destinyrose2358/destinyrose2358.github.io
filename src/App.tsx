import { Container, Paper, Stack } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import useTitles from './hooks/useTitles';
import { AboutMe } from './components/sections/AboutMe';
import { Header } from './components/sections/Header';
import { ProfessionalLinks } from './components/sections/ProfessionalLinks';
import { Skills } from './components/sections/Skills';
import { ContactMe } from './components/sections/ContactMe';
import { Projects } from './components/sections/Projects/Projects';

const TITLES: string[] = ["Destiny Rose", "Full Stack", "Software Engineer", "Portfolio Site"]

function App() {
    const title = useTitles({
        titles: TITLES,
        delay: 1000
    });

    return (
        <>
            <title>{title}</title>
            <Container sx={{ minHeight: "100vh" }}>
                <Paper sx={{ minHeight: "100vh", borderRadius:0, paddingBottom: "1em"}}>
                    <Container>
                        <Stack>
                            <Header />
                            <ProfessionalLinks />
                            <AboutMe />
                            <Skills />
                            <Projects />
                            <ContactMe />
                        </Stack>
                    </Container>
                </Paper>
            </Container>
        </>
    )
}

export default App
