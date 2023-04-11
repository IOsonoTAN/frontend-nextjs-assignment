import { Chance } from "chance";

const chance = Chance();

export function generateUserData(maxUser = 30) {
  const users = [];
  for (let i = 0; i < maxUser; i++) {
    users.push({
      avatar: chance.avatar({ protocol: "https" }),
      address: chance.address(),
      suffix: chance.suffix(),
      firstName: chance.first(),
      lastName: chance.last(),
      email: chance.email(),
      phoneNumber: chance.phone({ formatted: false }),
      gender: chance.gender(),
      birthday: chance.birthday({ string: true }),
    });
  }

  return users;
}
