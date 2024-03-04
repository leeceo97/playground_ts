import { embedDashboard } from "@superset-ui/embedded-sdk";

embedDashboard({
  id: "OJ9dgVrgNmx", // given by the Superset embedding UI
  supersetDomain: "http://localhost:8088",
  mountPoint: document.getElementById("my-superset-container"), // any html element that can contain an iframe
  fetchGuestToken: () => fetchGuestTokenFromBackend(),
  dashboardUiConfig: { hideTitle: true }, // dashboard UI config: hideTitle, hideTab, hideChartControls (optional)
});