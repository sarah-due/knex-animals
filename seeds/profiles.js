exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({id: 1, user_id: 99901, snack: 'Affogatos', habitat: 'Texas', image: "http://www.funnyjunk.com/Arthur+the+aardvark/funny-pictures/5264888#7e907a_5264444"}),
        knex('profiles').insert({id: 2, user_id: 99902, snack: 'Biscottis', habitat: 'Basements', image: "http://a.dilcdn.com/bl/wp-content/uploads/sites/2/2013/08/Rafiki-Surprised.jpg"}),
        knex('profiles').insert({id: 3, user_id: 99903, snack: 'Charlotte Russe', habitat: 'Cots', image: "http://railsware.com/blog/wp-content/uploads/2012/04/capybara.jpg" }),
        knex('profiles').insert({id: 4, user_id: 99904, snack: 'Diet Dr. Pepper', habitat: 'Ponds', image: "https://brobible.files.wordpress.com/2014/06/the-mighty-ducks-poster3.jpg?quality=90&w=650"}),
        knex('profiles').insert({id: 5, user_id: 99905, snack: 'Eggplant Lasagna', habitat: 'Desert', image: "https://aos.iacpublishinglabs.com/question/aq/1400px-788px/how-fast-can-an-elephant-run_4a36d683-3805-4826-a9ce-e1f561dac754.jpg?domain=cx.aos.ask.com" }),
        knex('profiles').insert({id: 6, user_id: 99906, snack: 'Fried Pickles', habitat: 'Jungle', image: "https://candobetter.net/sites/default/files/FlyingFoxFlies.jpg" }),
        knex('profiles').insert({id: 7, user_id: 99907, snack: 'Gelato', habitat: 'Hamilton', image: "http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-FwsgxoJK3kDIK8e3ybztorQ9JDGCmr4D1NKHelCDdlFV9wkfv/" }),
        knex('profiles').insert({id: 8, user_id: 99908, snack: 'Hash Brownies', habitat: 'Hawaii', image: "http://d1roc322tckjdp.cloudfront.net/wp-content/uploads/2012/04/Great_Blue_Heron_2_600.jpg"}),
        knex('profiles').insert({id: 9, user_id: 99909, snack: 'Iced Coffees', habitat: 'Cosmic Dimensions', image: "https://upload.wikimedia.org/wikipedia/en/0/0e/64_Impala_SS.jpg" }),
        knex('profiles').insert({id: 10, user_id: 99910, snack: 'Jam', habitat: "Mom's house", image: "https://www.google.co.nz/search?q=jerboa&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjk47yEguTTAhVFjJQKHRuOCosQ_AUICigB&biw=1755&bih=945#imgrc=jsfoJfV2ASCTtM:" }),
        knex('profiles').insert({id: 11, user_id: 99911, snack: 'Kale', habitat: 'Van down by the river', image: "https://www.google.co.nz/search?q=kinkajou&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjelt2hguTTAhWEJ5QKHazdAB4Q_AUICigB&biw=1755&bih=945#imgrc=Mk5fPkBGzeDh1M:"}),
        knex('profiles').insert({id: 12, user_id: 99912, snack: 'Liquorice', habitat: 'Iceland', image:"https://www.google.co.nz/search?q=lemur&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiL3IKuguTTAhXHw7wKHXXPB2MQ_AUICigB&biw=1755&bih=945#imgrc=TMnx0ZuH0_v0ZM:" }),
        knex('profiles').insert({id: 13, user_id: 99913, snack: 'Moussaka', habitat: 'That attic in the Conjuring', image: "https://www.google.co.nz/search?q=mongoose&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiK2cq6guTTAhUSOrwKHUvGDegQ_AUICigB&biw=1755&bih=945#imgrc=PK7g0NZJCiMBFM:"}),
        knex('profiles').insert({id: 14, user_id: 99914, snack: 'Nori', habitat: 'Under your desk', image: "https://www.google.co.nz/search?q=nyala&source=lnms&tbm=isch&sa=X&ved=0ahUKEwibrN7LguTTAhXIFpQKHSy3D5IQ_AUIBigB&biw=1755&bih=945#imgrc=cKce3cf50hx6nM:" }),
        knex('profiles').insert({id: 15, user_id: 99915, snack: 'Ovaltine', habitat: 'Up your nose', image: "https://www.google.co.nz/search?q=ocelot&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiq3svdguTTAhVBp5QKHSUgDbAQ_AUICigB&biw=1755&bih=945#imgrc=b0UIf-l8KEmnDM:"}),
        knex('profiles').insert({id: 16, user_id: 99916, snack: 'Pea Pudding', habitat: 'Invercargill', image: "https://www.google.co.nz/search?q=pangolin&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjtp7vyguTTAhVIpJQKHYsgC5IQ_AUICigB&biw=1755&bih=945#imgrc=55BRJ7xGpzasxM:" }),
        knex('profiles').insert({id: 17, user_id: 99917, snack: 'Quail Pie', habitat: 'Montreal', image: "https://www.google.co.nz/search?q=quokka&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjjmemjg-TTAhVLppQKHVEwDXAQ_AUIBigB&biw=1755&bih=945#imgrc=phgZcWT7TdqXSM:" }),
        knex('profiles').insert({id: 18, user_id: 99918, snack: 'Rabbit Stew', habitat: 'Eiffel Tower', image: "http://cdn.presstv.com/photo/20160424/fd0deffd-54b9-4415-92a8-4fb06c267f38.jpg" }),
        knex('profiles').insert({id: 19, user_id: 99919, snack: 'Sushi', habitat: 'Mississippi River', image: "https://www.google.co.nz/search?q=sloth&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj_leHLg-TTAhWEH5QKHfaEDyIQ_AUICigB&biw=1755&bih=945#imgrc=9hUceV8Br2UbCM:"}),
        knex('profiles').insert({id: 20, user_id: 99920, snack: 'Tomato Soup', habitat: 'Myanmar', image: "http://farm6.static.flickr.com/5182/5806005628_eb9b831097.jpg" }),
        knex('profiles').insert({id: 21, user_id: 99921, snack: 'Unagi', habitat: 'Under the Sea', image: "https://www.google.co.nz/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwiu9eCBhOTTAhWBPJQKHWieDOIQjBwIBA&url=http%3A%2F%2Ftallinnzoo.ee%2Fwp-content%2Fuploads%2F2015%2F02%2FBuhhara-uriaal-5.jpg&psig=AFQjCNFlJQRqjfVbzgqtzE_9nGn6-dSCsg&ust=1494461197879668" }),
        knex('profiles').insert({id: 22, user_id: 99922, snack: 'Vanilla Macarons', habitat: 'Town', image: "https://www.sharesloth.com/wp-content/uploads/2014/07/Mountain-Viscacha-12.jpg" }),
        knex('profiles').insert({id: 23, user_id: 99923, snack: 'Watermelon Sorbet', habitat: 'Middle Earth', image: "https://gifts.worldwildlife.org/gift-center/images/species-adoptions/Wombat/Wombat-plush-z1.jpg"}),
        knex('profiles').insert({id: 24, user_id: 99924, snack: 'Xylitol, cuz he is on a diet', habitat: 'Hogwarts', image: "https://ih1.redbubble.net/image.9809464.0270/flat,1000x1000,075,f.u49.jpg"}),
        knex('profiles').insert({id: 25, user_id: 99925, snack: 'Yams', habitat: 'Narnia', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/The_Yak.jpg/312px-The_Yak.jpg"}),
        knex('profiles').insert({id: 26, user_id: 99926, snack: 'Zabaglione', habitat: 'The Zoo', image: "http://www.vollmerminicattle.com/heikens_ark_beau.JPG" })
      ]);
    });
};
