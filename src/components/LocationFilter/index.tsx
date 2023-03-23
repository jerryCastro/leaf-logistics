import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { Country } from "~/types";
import { useFilter } from "~/hooks";

export default function LocationFilter() {
  const { country, setCountry } = useFilter((state) => state);

  return (
    <ToggleButtonGroup
      color="primary"
      value={country}
      exclusive
      onChange={(e, value) => setCountry(value || country || Country.GB)}
    >
      <ToggleButton
        value={Country.GB}
        sx={{ px: 2, borderTop: 0, borderBottom: 0, borderRadius: 0 }}
      >
        GB
      </ToggleButton>
      <ToggleButton
        value={Country.US}
        sx={{
          px: 2,
          border: "none",
        }}
      >
        US
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
