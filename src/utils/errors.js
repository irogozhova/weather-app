export const getErrorText = (code) => {
  switch (code) {
    case 404:
      return "Nothing found. Please check spelling and try again";
    case 500:
      return "Something went wrong";
    case "no status":
      return "Problem with network connection";
    default:
      return "Something went wrong";
  }
};
