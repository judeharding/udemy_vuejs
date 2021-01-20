import { createApp } from "vue";

import App from "./App.vue";
// import TheHeader from './components/TheHeader.vue'; // moved to App.vue
import BaseBadge from "./components/BaseBadge.vue";
// import BadgeList from "./components/BadgeList.vue"; // moved to App.vue
// import UserInfo from "./components/UserInfo.vue"; // moved to App.vue
import BaseCard from "./components/BaseCard.vue";

const app = createApp(App);

// app.component('the-header', TheHeader); // moved to App.vue
app.component("base-badge", BaseBadge);
// app.component("badge-list", BadgeList); // moved to App.vue
// app.component("user-info", UserInfo); // moved to App.vue
app.component("base-card", BaseCard);

app.mount("#app");
