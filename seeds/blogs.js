exports.seed = function (knex, Promise) {
  return knex('blogs').del()
    .then(function () {
      return Promise.all([
        knex('blogs').insert({id:2201,user_id: 99901, title: 'Ambitious Aardvark', content: 'aardvark@example.org'}),
        knex('blogs').insert({id:2202,user_id: 99902, title: 'Bamboozled Baboon', content: 'baboon@example.org'}),
        knex('blogs').insert({id:2203,user_id: 99903, title: 'Curious Capybara', content: 'capybara@example.org'}),
        knex('blogs').insert({id:2204,user_id: 99904, title: 'Dilapidated Duck', content: 'duck@example.org'}),
        knex('blogs').insert({id:2205,user_id: 99905, title: 'Exuberant Elephant', content: 'elephant@example.org'}),
        knex('blogs').insert({id:2206,user_id: 99906, title: 'Fascinated Flying Fox', content: 'flyingfox@example.org'}),
        knex('blogs').insert({id:2207,user_id: 99907, title: 'Generous Gila Monster', content: 'gila.monster@example.org'}),
        knex('blogs').insert({id:2208,user_id: 99908, title: 'Hilarious Heron', content: 'heron@example.org'}),
        knex('blogs').insert({id:2209,user_id: 99909, title: 'Intransigent Impala', content: 'impala@example.org'}),
        knex('blogs').insert({id:2210,user_id: 99910, title: 'Jocular Jerboa', content: 'jerboa@example.org'}),
        knex('blogs').insert({id:2211,user_id: 99911, title: 'Kafkaesque Kinkajou', content: 'kinkajou@example.org'}),
        knex('blogs').insert({id:2212,user_id: 99912, title: 'Loquacious Lemur', content: 'lemur@example.org'}),
        knex('blogs').insert({id:2213,user_id: 99913, title: 'Misanthropic Mongoose', content: 'mongoose@example.org'}),
        knex('blogs').insert({id:2214,user_id: 99914, title: 'Nonchalant Nyala', content: 'nyala@example.org'}),
        knex('blogs').insert({id:2215,user_id: 99915, title: 'Ornery Ocelot', content: 'ocelot@example.org'}),
        knex('blogs').insert({id:2216,user_id: 99916, title: 'Peaceful Pangolin', content: 'panda@example.org'}),
        knex('blogs').insert({id:2217,user_id: 99917, title: 'Querulous Quokka', content: 'quokka@example.org'}),
        knex('blogs').insert({id:2218,user_id: 99918, title: 'Resolute Rail', content: 'rail@example.org'}),
        knex('blogs').insert({id:2219,user_id: 99919, title: 'Senescent Sloth', content: 'sloth@example.org'}),
        knex('blogs').insert({id:2220,user_id: 99920, title: 'Tumultuous Terrapin', content: 'terrapin@example.org'}),
        knex('blogs').insert({id:2221,user_id: 99921, title: 'Unassailable Urial', content: 'urial@example.org'}),
        knex('blogs').insert({id:2222,user_id: 99922, title: 'Voracious Viscacha', content: 'viscacha@example.org'}),
        knex('blogs').insert({id:2223,user_id: 99923, title: 'Wondering Wombat', content: 'wombat@example.org'}),
        knex('blogs').insert({id:2224,user_id: 99924, title: 'Xenial Xerus', content: 'xerus@example.org'}),
        knex('blogs').insert({id:2225,user_id: 99925, title: 'Yielding Yak', content: 'yak@example.org'}),
        knex('blogs').insert({id:2226,user_id: 99926, title: 'Zaftig Zebu', content: 'zebu@example.org'})
      ]);
    });
};
