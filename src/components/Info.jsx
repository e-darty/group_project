import * as React from "react";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function Demo() {
  return (
    <div>
      <a href="https://www.steg.com.tn/fr/index.html">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            bgcolor: "background.paper",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: 1,
            fontWeight: "bold",
            ":hover": {
              cursor: "pointer",
              backgroundColor: "#F1F0F0",
              color: "#fd0808",
            },
          }}
        >
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="STEG."
            src="https://news.gnet.tn/wp-content/uploads/2019/06/electricite-gaz_1024x420.jpg"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              m: 3,
              minWidth: { md: 350 },
            }}
          >
            <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
              STEG
            </Box>
            <Box component="span" sx={{ color: "primary.main", fontSize: 22 }}>
              Pay your STEG invoice online
            </Box>
            <Box
              sx={{
                mt: 1.5,
                p: 0.5,
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary.main, 0.1),
                borderRadius: "5px",
                color: "primary.main",
                fontWeight: "medium",
                display: "flex",
                fontSize: 12,
                alignItems: "center",
                "& svg": {
                  fontSize: 21,
                  mr: 0.5,
                },
              }}
            ></Box>
          </Box>
        </Box>
      </a>

      <a href="https://www.sonede.com.tn/">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            bgcolor: "background.paper",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: 1,
            fontWeight: "bold",
            ":hover": {
              cursor: "pointer",
              backgroundColor: "#F1F0F0",
              color: "#fd0808",
            },
          }}
        >
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt=""
            src="https://www.tunisienumerique.com/wp-content/uploads/2021/08/SONEDE.jpg"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              m: 3,
              minWidth: { md: 350 },
            }}
          >
            <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
              SONEDE
            </Box>
            <Box component="span" sx={{ color: "primary.main", fontSize: 22 }}>
              Pay your SONEDE invoice online
            </Box>
            <Box
              sx={{
                mt: 1.5,
                p: 0.5,
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary.main, 0.1),
                borderRadius: "5px",
                color: "primary.main",
                fontWeight: "medium",
                display: "flex",
                fontSize: 12,
                alignItems: "center",
                "& svg": {
                  fontSize: 21,
                  mr: 0.5,
                },
              }}
            ></Box>
          </Box>
        </Box>
      </a>

      <a href="https://www.cnam.nat.tn/">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            bgcolor: "background.paper",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: 1,
            fontWeight: "bold",
            ":hover": {
              cursor: "pointer",
              backgroundColor: "#F1F0F0",
              color: "#fd0808",
            },
          }}
        >
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt=""
            src="https://www.espacemanager.com/sites/default/files/field/image/cnam_1712.jpg"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              m: 3,
              minWidth: { md: 350 },
            }}
          >
            <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
              CNAM
            </Box>
            <Box component="span" sx={{ color: "primary.main", fontSize: 22 }}>
              Consult and follow your submitted files at CNAM
            </Box>
            <Box
              sx={{
                mt: 1.5,
                p: 0.5,
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary.main, 0.1),
                borderRadius: "5px",
                color: "primary.main",
                fontWeight: "medium",
                display: "flex",
                fontSize: 12,
                alignItems: "center",
                "& svg": {
                  fontSize: 21,
                  mr: 0.5,
                },
              }}
            ></Box>
          </Box>
        </Box>
      </a>

      <a href="https://www.tunisietelecom.tn/Fr">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            bgcolor: "background.paper",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: 1,
            fontWeight: "bold",
            ":hover": {
              cursor: "pointer",
              backgroundColor: "#F1F0F0",
              color: "#fd0808",
            },
          }}
        >
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt=""
            src="data:image/png;base64,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"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              m: 3,
              minWidth: { md: 350 },
            }}
          >
            <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
              Tunisie Telecom
            </Box>
            <Box component="span" sx={{ color: "primary.main", fontSize: 22 }}>
              Pay your Tunisie Telecom invoice online
            </Box>
            <Box
              sx={{
                mt: 1.5,
                p: 0.5,
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary.main, 0.1),
                borderRadius: "5px",
                color: "primary.main",
                fontWeight: "medium",
                display: "flex",
                fontSize: 12,
                alignItems: "center",
                "& svg": {
                  fontSize: 21,
                  mr: 0.5,
                },
              }}
            ></Box>
          </Box>
        </Box>
      </a>
    </div>
  );
}
