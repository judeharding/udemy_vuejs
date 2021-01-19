//importing from a package
import { createApp } from "vue";

// importing the default from a custom file in the same root
import App from "./App.vue";
import FriendConact from "./components/FriendContact.vue";

// importing the "export default" App from the App.vue and mounting it to html
const app = createApp(App);

app.component("friend-contact", FriendConact);

app.mount("#app");
