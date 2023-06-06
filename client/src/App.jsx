import { Dashboard } from "./pages/Dashboard"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"

export const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Dashboard />
    </LocalizationProvider>
  )
}
