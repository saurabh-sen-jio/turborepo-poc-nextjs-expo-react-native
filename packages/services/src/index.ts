
const getData = async (url: string, key: string) => {
    let res = await fetch(url, {
        headers: {
            'X-Api-Key': key,
        }
    });

    return res;
}

const isValidPincode = (pincode: string) => {
    // Pincode should be exactly 6 digits
    if (!/^\d{6}$/.test(pincode)) {
        return false;
    }

    return true;
}

export { isValidPincode, getData };