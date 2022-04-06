const generateIcons = (iconsCount) => {
  const iconsBucket = [
    "fa-brands fa-apple icons",
    "fa-solid fa-cube icons",
    "fa-solid fa-palette icons",
    "fa-solid fa-code icons",
    "fa-solid fa-shield-halved icons",
    "fa-solid fa-keyboard icons",
    "fa-solid fa-briefcase-medical icons",
    "fa-solid fa-cannabis icons",
    "fa-solid fa-flask icons",
    "fa-solid fa-rocket icons",
    "fa-brands fa-playstation icons",
    "fa-solid fa-paper-plane icons",
    "fa-brands fa-google-play icons",
    "fa-solid fa-vr-cardboard icons",
    "fa-brands fa-facebook-messenger icons",
    "fa-solid fa-dog icons",
    "fa-solid fa-cat icons",
    "fa-solid fa-cart-shopping icons",
  ];

  const iconsIDs = [];
  const icons = [];
  for (let i = 0; i < iconsCount; i++) {
    iconsIDs.push(`${i}`);
    iconsIDs.push(`${i}`);
    icons.push(iconsBucket[i]);
    icons.push(iconsBucket[i]);
  }

  randomizer(iconsIDs, icons);
  return { iconsIDs, icons };
};

const randomizer = (iconsIDs, icons) => {
  for (let i = 0; i < 2 * iconsIDs.length; i++) {
    const rand1 = Math.floor(Math.random() * iconsIDs.length);
    const rand2 = Math.floor(Math.random() * iconsIDs.length);
    const temp = iconsIDs[rand1];
    iconsIDs[rand1] = iconsIDs[rand2];
    iconsIDs[rand2] = temp;

    const temp2 = icons[rand1];
    icons[rand1] = icons[rand2];
    icons[rand2] = temp2;
  }

  return { iconsIDs, icons };
};

export default generateIcons;
