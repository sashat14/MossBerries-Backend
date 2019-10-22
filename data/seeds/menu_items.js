
exports.seed = function(knex, Promise) {
      return knex('menu_items').insert([
        {item:'Vanilla Cupcake', description:'Keto-friendly Vanilla cupcake made with almond flour and erithytol', price: 3.49 },
        {item:'Chocolate Chunck Brownie', description:'Keto-friendly moist chocolate brownie', price: 3.49},
        {item:'Chocolate Chip Cookie', description:'Keto-friendly cookie made with almond flour', price: 2.99}
      ]);
};
