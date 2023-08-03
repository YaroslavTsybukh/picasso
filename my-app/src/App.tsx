import { QueryClient , QueryClientProvider } from "@tanstack/react-query";
import { HomePage } from "./pages/homePage.tsx";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import { Container } from '@mui/material';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppContextProvider } from "./context/appContextProvider.tsx";

import './App.css'
import {Header} from "./components/header/header.tsx";
import {UserPostPage} from "./pages/userPostPage.tsx";

const client = new QueryClient()

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={client}>
                <AppContextProvider>
                    <ReactQueryDevtools initialIsOpen={false} />
                    <Header />
                    <main>
                        <Container maxWidth='xl' sx={{ height: '100vh'}}>
                            <Routes>
                                <Route path='/' element={<HomePage />} />
                                <Route path='posts/:postId' element={<UserPostPage />} />
                            </Routes>
                        </Container>
                    </main>
                </AppContextProvider>
            </QueryClientProvider>
        </BrowserRouter>
      )
}

export default App
