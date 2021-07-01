// Given a string s containing only digits, return all possible valid IP addresses that can be obtained from s. 
// You can return them in any order.

// A valid IP address consists of exactly four integers, each integer is between 0 and 255, 
// separated by single dots and cannot have leading zeros. For example, "0.1.2.201" and "192.168.1.1" 
// are valid IP addresses and "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses. 

// Input: s = "25525511135"
// Output: ["255.255.11.135","255.255.111.35"]

var restoreIpAddresses = function (s) {
  const results = [];

  const check = (parsed = [], rest = "") => {
    if (parsed.length === 4) {
      return rest === "" ? results.push(parsed.join(".")) : undefined;
    }

    for (let i = 0; i < Math.min(3, rest.length); i++) {
      const sliced = rest.slice(0, i + 1);
      const restAfterSlice = rest.slice(i + 1);

      if (sliced > 255 || (sliced.length > 1 && sliced[0] === "0")) return;

      check([...parsed, sliced], restAfterSlice);
    }
  };

  check([], s);

  return results;
};

restoreIpAddresses("25525511135");
