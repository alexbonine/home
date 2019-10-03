// const isEmpty = require('lodash/isEmpty');
const fetch = require('isomorphic-unfetch');

const api = 'https://fantasysports.yahooapis.com/fantasy/v2/';
// const users = 'users;use_login=1/leagues?format=json';
const users = 'users;use_login=1?format=json'; // 'users;use_login=1/games;is_available=1;game_types=full;seasons=2019?format=json'

class UserClass {
  static publicFields() {
    return ['userId'];
  }

  static async getYahooId(accessToken, callback) {
    const user = await fetch(api + users, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        return response.fantasy_content.users[0].user[0];
        // return {
        //   user: response.fantasy_content.users[0].user[0],
        //   games: response.fantasy_content.users[0].user[1].games[0].game.findIndex(), // game_id, code = nfl, name = Football
        // };
      });

    callback(null, user); // return error instead of null
  }

  // temp til mongoose added
  static findById(userId, publicFields, callback) {
    callback(null, {
      userId,
    });
  }

  static async findOrCreate({ /* yahooToken, */ yahooId }) {
    // const user = await this.findOne({ googleId }).select(UserClass.publicFields().join(' '));

    // if (user) {
    //   const modifier = {};
    //   if (yahooToken.accessToken) {
    //     modifier.access_token = yahooToken.accessToken;
    //   }

    //   if (yahooToken.refreshToken) {
    //     modifier.refresh_token = yahooToken.refreshToken;
    //   }

    //   if (isEmpty(modifier)) {
    //     return user;
    //   }

    //   await this.updateOne({ googleId }, { $set: modifier });

    //   return user;
    // }

    // const slug = await generateSlug(this, displayName);
    // const userCount = await this.find().countDocuments();

    // const newUser = await this.create({
    //   createdAt: new Date(),
    //   googleId,
    //   email,
    //   googleToken,
    //   displayName,
    //   avatarUrl,
    //   slug,
    //   isAdmin: userCount === 0,
    // });

    return { userId: yahooId };
  }
}

// mongoSchema.loadClass(UserClass);

// const User = mongoose.model('User', mongoSchema);

module.exports = UserClass;
