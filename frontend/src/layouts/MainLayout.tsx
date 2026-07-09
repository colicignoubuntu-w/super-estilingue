import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <Box>
      {/* Navbar virá aqui */}

      <Outlet />

      {/* Footer virá aqui */}
    </Box>
  );
}

export default MainLayout;