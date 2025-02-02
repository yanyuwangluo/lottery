/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "特等奖",
    text: "特等奖"
  },
  {
    type: 1,
    count: 2,
    text: "精彩娃娃",
    title: "一等奖",
    img: "../img/secrit.jpg"
  },
  {
    type: 2,
    count: 2,
    text: "精彩娃娃",
    title: "二等奖",
    img: "../img/secrit.jpg"
  },
  {
    type: 3,
    count: 1,
    text: "精彩娃娃",
    title: "三等奖",
    img: "../img/secrit.jpg"
  },
  {
    type: 4,
    count: 7,
    text: "精彩娃娃",
    title: "4等奖",
    img: "../img/secrit.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 2, 2, 1, 7];

/**
 * 卡片公司名称标识
 */
const COMPANY = "xx&xxx";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
