const User = require('./schemas/user');
const Part = require('./schemas/part');
const Set = require('./schemas/set');

async function getAllSets(userId) {
  const user = await User.findById(userId);
  const setsCollection = await Set.find({
    _id: {
      $in: user.sets,
    },
  }).sort({
    date: -1,
  });
  return setsCollection;
}

async function getSet(setId) {
  const set = await Set.findById(setId);
  return set;
}

async function deleteSet(userId, setId) {
  const user = await User.findById(userId);
  user.sets.pull(setId);
  user.save();
}

async function getAllParts(userId) {
  const user = await User.findById(userId);
  const partsCollection = await Part.aggregate([
    {
      $match: {
        set: {
          $in: user.sets,
        },
      },
    },
    {
      $group: {
        _id: {
          id: '$id',
        },
        total: { $sum: '$quantity' },
        partIds: {
          $addToSet: {
            name: '$name',
            id: '$id',
            part_num: '$part_num',
            color: '$color',
            part_img_url: '$part_img_url',
            quantity: '$quantity',
          },
        },
      },
    },
    {
      $sort: {
        total: -1,
      },
    },
  ]);
  return partsCollection;
}

async function getPartsAmount(userId) {
  const user = await User.findById(userId);
  const partsCount = await Part.aggregate([
    {
      $match: {
        set: {
          $in: user.sets,
        },
      },
    },
    {
      $group: {
        _id: {
          id: null,
        },
        total_sum: { $sum: '$quantity' },
      },
    },
    { $project: { _id: 0, total_sum: 1 } },
  ]);
  const sum = partsCount.map((parts) => parts.total_sum);
  return sum;
}

async function getSetsAmount(userId) {
  const user = await User.findById(userId);
  const setsCount = await Set.find({
    _id: {
      $in: user.sets,
    },
  }).countDocuments();
  return setsCount;
}

module.exports = {
  getPartsAmount,
  getSetsAmount,
  getAllSets,
  getAllParts,
  getSet,
  deleteSet,
};
