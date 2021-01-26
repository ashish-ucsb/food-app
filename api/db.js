module.exports = function () {
  return {
    feed: require("./api.feed.json"),
    friends: require("./api.friends.json"),
    orders: require("./api.orders.json"),
    users: require("./api.users.json"),
  };
};
