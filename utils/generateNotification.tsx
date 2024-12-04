// Random Messages would need type added here and in Store.
const typeMessage = [
  { type: "mention", message: "sent you a friend request" },
  { type: "friend", message: "mentioned you" },
  { type: "invite", message: "invited you to join a group" },
];

const names = [
  "Paul Atreides",
  "Duncan Idaho",
  "Leto Atreides",
  "Chani Kynes",
  "Thufir Hawat",
];

const generateNotification = () => {
  const randomTM = typeMessage[Math.floor(Math.random() * typeMessage.length)];
  const randomName = names[Math.floor(Math.random() * names.length)];
  return {
    type: randomTM.type,
    user: randomName,
    message: randomTM.message,
    timestamp: new Date().toISOString(),
  };
};

export default generateNotification;
