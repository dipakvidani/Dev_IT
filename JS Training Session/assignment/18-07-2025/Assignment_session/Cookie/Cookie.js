//SET COOKIE
// document.cookie="EmployeeName=Dipak vidani;expires=Fri, 18 Jul 2025 16:15:00 GMT"
// console.log("Cookie for ${} added ");

function setCookie(cookie_description) {
  console.log(cookie_description);

  document.cookie = `"${cookie_description}"`;
  console.log(`Cookie for ${cookie_description} added `);
}

setCookie("EmployeeName=Dipa vidani;expires=Fri, 18 Jul 2025 16:15:00 GMT");

const date = new Date();
// Get current time in IST (add 5.5 hours)
const nowIST = new Date(date.getTime() + 5.5 * 60 * 60 * 1000);
date.setTime(nowIST.getTime() + 1 * 24 * 60 * 60 * 1000); //expires in 1 day
expires = "; expires=" + date.toUTCString();


function removeCookie(cookie) {
  const eqPos = cookie.indexOf("=");
  const name = eqPos > -1 ? cookie.slice(0, eqPos) : cookie;
  document.cookie =
    name +
    "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/JS%20Training%20Session/assignment/18-07-2025/Assignment_session/Cookie;";
}

removeCookie("EmployeeName=Dipak vidani;expires=Fri, 18 Jul 1900 16:15:00 GMT");

setCookie(
  "EmployeeName=Harsh Parmar;expires=Fri, 18 Jul 2025 16:15:00 GMT;Secure; HttpOnly; Domain=mozilla.org;Max-Age=2592000"
);

setCookie(
  "CompnayName=Dev IT;expires=Fri, 18 Jul 2025 16:15:00 GMT;Secure; HttpOnly; Max-Age=2592000;"
);
//Delete Cookie
// document.cookie="EmployeeName=Dipak vidani;expires=Fri, 18 Jul 1900 16:15:00 GMT"

// Clear All the Cookies function

// function clearAllCookies() {
//     const cookies = document.cookie.split(';');
//     for (let i = 0; i < cookies.length; i++) {
//         const cookie = cookies[i];
//         const eqPos = cookie.indexOf("=");
//         const name = eqPos > -1 ? cookie.slice(0, eqPos) : cookie;
//         document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
//     }
// }

// // Call the function to clear all cookies
// clearAllCookies();
