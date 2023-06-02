import { ref } from "vue";
import { db } from "@/firebase/config";

let getUser = () => {
  let user = ref(null);
  let id = "2iKYjQaNVhiLPn3iZoF9";

  let load = async () => {
    let res = await db.collection("users").doc(id).get();
    user.value = { id: id, ...res.data() };
  };

  return { user, load };
};

export default getUser;
