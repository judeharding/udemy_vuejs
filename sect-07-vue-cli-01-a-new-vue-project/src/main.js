//importing from a package
import { createApp } from "vue";

// importing the default from a custom file in the same root
import App from "./App.vue";
import FriendConact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";

// importing the "export default" App from the App.vue and mounting it to html
const app = createApp(App);

// two word tag to be used in html, then add this to App.vue
app.component("friend-contact", FriendConact);
app.component("new-friend", NewFriend);

app.mount("#app");
