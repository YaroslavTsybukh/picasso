import { SelectComponent } from "./components/select/select";
import { QueryClient , QueryClientProvider } from "@tanstack/react-query";
import { Box} from "@mui/material";

import './App.css'

const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
        <Box sx={{ display: 'flex'}}>
          <SelectComponent />
        </Box>
    </QueryClientProvider>
  )
}

export default App
