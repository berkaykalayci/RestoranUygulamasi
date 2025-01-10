import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer FXiX37I1mdYlnT5Ndi8S20SQgN-0139fPOYNkCDWpY65LQhvYWX_yhUVQTSG_SEGfaoeOG0iUG4rtg4sg8nJLeNu2hnjkw6aFPseADOCUewA1Lp_-Z7nRU_iqBeBZ3Yx",
  },
});
