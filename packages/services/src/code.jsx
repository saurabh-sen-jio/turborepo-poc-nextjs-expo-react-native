
export const getData = async (url, key) => {
  let res = await fetch(url, {
      headers: {
          'X-Api-Key': key,
      }
  });

  return res;
}

export const isValidPincode = (pincode) =>{
  // Pincode should be exactly 6 digits
  if (!/^\d{6}$/.test(pincode)) {
      return false;
  }

  return true;
}