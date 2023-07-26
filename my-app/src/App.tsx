import { QueryClient , QueryClientProvider } from "@tanstack/react-query";
import { HomePage } from "./pages/homePage.tsx";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import { Container } from '@mui/material';

import './App.css'
import {Header} from "./components/header/header.tsx";

const client = new QueryClient()

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={client}>
                <Header />
                <main>
                    <Container maxWidth='lg'>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                        </Routes>
                    </Container>
                </main>
            </QueryClientProvider>
        </BrowserRouter>
      )
}

export default App
