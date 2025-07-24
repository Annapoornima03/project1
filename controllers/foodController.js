let menu = require('../data/menu');

// Get all items
exports.getMenu = (req, res) => {
  res.json(menu);
};

// Get item by ID
exports.getMenuItem = (req, res) => {
  const item = menu.find(m => m.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: 'Item not found' });
  res.json(item);
};

// Add new item
exports.addMenuItem = (req, res) => {
  const { name, price } = req.body;
  const newItem = {
    id:menu[menu.length - 1].id + 1,
    name,
    price
  };
  menu.push(newItem);
  res.status(201).json(newItem);
};

// Update item
exports.updateMenuItem = (req, res) => {
  const item = menu.find(m => m.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: 'Item not found' });

  item.name = req.body.name || item.name;
  item.price = req.body.price || item.price;
  res.json(item);
};

// Delete item
exports.deleteMenuItem = (req, res) => {
  menu = menu.filter(m => m.id !== parseInt(req.params.id));
  res.json({ message: 'Item deleted' });
};
