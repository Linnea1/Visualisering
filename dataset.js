const dataset = [
  {
    year: "2004",
    countries: [
      {
        name: "Australia",
        cities: [
          { name: "Sydney", gdp: 180914, labourForce: 2140840, population: 4184763 },
          { name: "Melbourne", gdp: 155913, labourForce: 1873960, population: 3641951 },
          { name: "Brisbane", gdp: 70487, labourForce: 948643, population: 1823496 },
          { name: "Perth", gdp: 74024, labourForce: 783260, population: 1520232 },
          { name: "Adelaide", gdp: 43729, labourForce: 580662, population: 1168541 },
        ]
      },
      {
        name: "Spain",
        cities: [
          { name: "Madrid", gdp: 267349, labourForce: 3018910, population: 5919630 },
          { name: "Barcelona", gdp: 182538, labourForce: 2325840, population: 4565085 },
          { name: "Valencia", gdp: 51023, labourForce: 763534, population: 1584792 },
          { name: "Seville", gdp: 39188, labourForce: 641775, population: 1407777 },
          { name: "Saragossa", gdp: 25985, labourForce: 332573, population: 692970 },
        ]
      },
      {
        name: "Japan",
        cities: [
          { name: "Tokyo", gdp: 1546015, labourForce: 17110790, population: 33886538 },
          { name: "Osaka", gdp: 626921, labourForce: 7998060, population: 17278072 },
          { name: "Nagoya", gdp: 352597, labourForce: 4298650, population: 8455361 },
          { name: "Fukuoka", gdp: 85910, labourForce: 1284040, population: 2680921 },
          { name: "Sapporo", gdp: 74740, labourForce: 1077120, population: 2296381 },
        ]
      },
      {
        name: "Poland",
        cities: [
          { name: "Warsaw", gdp: 104616, labourForce: 5171, population: 2904456 },
          { name: "Lodz", gdp: 19225, labourForce: 475714, population: 996330 },
          { name: "Cracow", gdp: 27528, labourForce: 578106, population: 1342259 },
          { name: "Wroclaw", gdp: 18720, labourForce: 364507, population: 851534 },
          { name: "Poznan", gdp: 27293, labourForce: 438172, population: 943532 },
        ]
      },
      {
        name: "Turkey",
        cities: [
          { name: "Ankara", gdp: 89338, labourForce: 1190702, population: 3629067 },
          { name: "Adana", gdp: 11091, labourForce: 243232, population: 932702 },
          { name: "Antalya", gdp: 19234, labourForce: 338492, population: 869748 },
          { name: "Balikesir", gdp: 4893, labourForce: 116430, population: 329503 },
          { name: "Bursa", gdp: 30526, labourForce: 555521, population: 1491245 },
        ]
      },
    ]
  },
  {
    year: "2005",
    countries: [
      {
        name: "Australia",
        cities: [
          { name: "Sydney", gdp: 180540, labourForce: 2182570, population: 4217563 },
          { name: "Melbourne", gdp: 156011, labourForce: 1933340, population: 3697372 },
          { name: "Brisbane", gdp: 75978, labourForce: 990218, population: 1866210 },
          { name: "Perth", gdp: 81580, labourForce: 816714, population: 1544977 },
          { name: "Adelaide", gdp: 43920, labourForce: 596316, population: 1177345 },
        ]
      },
      {
        name: "Spain",
        cities: [
          { name: "Madrid", gdp: 279599, labourForce: 3187440, population: 6090043 },
          { name: "Barcelona", gdp: 191526, labourForce: 2375102, population: 4658138 },
          { name: "Valencia", gdp: 52466, labourForce: 782856, population: 1620671 },
          { name: "Seville", gdp: 41364, labourForce: 641775, population: 1426529 },
          { name: "Saragossa", gdp: 27144, labourForce: 332573, population: 705452 },
        ]
      },
      {
        name: "Japan",
        cities: [
          { name: "Tokyo", gdp: 1581172, labourForce: 17071710, population: 34163372 },
          { name: "Osaka", gdp: 634336, labourForce: 7981620, population: 17283887 },
          { name: "Nagoya", gdp: 364203, labourForce: 4310190, population: 8510436 },
          { name: "Fukuoka", gdp: 87882, labourForce: 1282160, population: 2676229 },
          { name: "Sapporo", gdp: 73750, labourForce: 1077120, population: 2289871 },
        ]
      },
      {
        name: "Poland",
        cities: [
          { name: "Warsaw", gdp: 112055, labourForce: 5312, population: 2918604 },
          { name: "Lodz", gdp: 19645, labourForce: 488741, population: 991542 },
          { name: "Cracow", gdp: 28520, labourForce: 587464, population: 1344867 },
          { name: "Wroclaw", gdp: 19101, labourForce: 369283, population: 851014 },
          { name: "Poznan", gdp: 28615, labourForce: 426972, population: 944528 },
        ]
      },
      {
        name: "Turkey",
        cities: [
          { name: "Ankara", gdp: 98408, labourForce: 1240518, population: 3702028 },
          { name: "Adana", gdp: 12072, labourForce: 258930, population: 942019 },
          { name: "Antalya", gdp: 20906, labourForce: 341341, population: 897816 },
          { name: "Balikesir", gdp: 5360, labourForce: 120809, population: 331502 },
          { name: "Bursa", gdp: 33723, labourForce: 587030, population: 1518274 },
        ]
      },
    ]
  },
  {
    year: "2006",
    countries: [
      {
        name: "Australia",
        cities: [
          { name: "Sydney", gdp: 182816, labourForce: 2206560, population: 4256161 },
          { name: "Melbourne", gdp: 159073, labourForce: 1961050, population: 3760760 },
          { name: "Brisbane", gdp: 80315, labourForce: 1024770, population: 1908265 },
          { name: "Perth", gdp: 90689, labourForce: 838083, population: 1576912 },
          { name: "Adelaide", gdp: 44654, labourForce: 605683, population: 1189243 },
        ]
      },
      {
        name: "Spain",
        cities: [
          { name: "Madrid", gdp: 294706, labourForce: 3281267, population: 6146639 },
          { name: "Barcelona", gdp: 199243, labourForce: 2435470, population: 4727204 },
          { name: "Valencia", gdp: 55129, labourForce: 815326, population: 1654049 },
          { name: "Seville", gdp: 42796, labourForce: 671354, population: 1444514 },
          { name: "Saragossa", gdp: 28488, labourForce: 353349, population: 711183 },
        ]
      },
      {
        name: "Japan",
        cities: [
          { name: "Tokyo", gdp: 1695091, labourForce: 17043040, population: 34314423 },
          { name: "Osaka", gdp: 653196, labourForce: 7981620, population: 17273236 },
          { name: "Nagoya", gdp: 403442, labourForce: 4315960, population: 8557483 },
          { name: "Fukuoka", gdp: 89548, labourForce: 1278400, population: 2677714 },
          { name: "Sapporo", gdp: 73858, labourForce: 1056720, population: 2278885 },
        ]
      },
      {
        name: "Poland",
        cities: [
          { name: "Warsaw", gdp: 120062, labourForce: 5148, population: 2935468 },
          { name: "Lodz", gdp: 20870, labourForce: 473653, population: 985391 },
          { name: "Cracow", gdp: 31478, labourForce: 595732, population: 1346858 },
          { name: "Wroclaw", gdp: 20756, labourForce: 371400, population: 851228 },
          { name: "Poznan", gdp: 30096, labourForce: 409304, population: 946501 },
        ]
      },
      {
        name: "Turkey",
        cities: [
          { name: "Ankara", gdp: 106590, labourForce: 1265440, population: 3777092 },
          { name: "Adana", gdp: 12725, labourForce: 264088, population: 951670 },
          { name: "Antalya", gdp: 22757, labourForce: 374860, population: 926628 },
          { name: "Balikesir", gdp: 5588, labourForce: 119412, population: 333589 },
          { name: "Bursa", gdp: 36496, labourForce: 574027, population: 1546112 },
        ]
      },
    ]
  },
  {
    year: "2007",
    countries: [
      {
        name: "Australia",
        cities: [
          { name: "Sydney", gdp: 186697, labourForce: 2236690, population: 4325525 },
          { name: "Melbourne", gdp: 165763, labourForce: 2019540, population: 3841760 },
          { name: "Brisbane", gdp: 82709, labourForce: 1058080, population: 1958907 },
          { name: "Perth", gdp: 97286, labourForce: 875037, population: 1628467 },
          { name: "Adelaide", gdp: 46181, labourForce: 610350, population: 1204210 },
        ]
      },
      {
        name: "Spain",
        cities: [
          { name: "Madrid", gdp: 305923, labourForce: 3393793, population: 6233949 },
          { name: "Barcelona", gdp: 206492, labourForce: 2499257, population: 4743135 },
          { name: "Valencia", gdp: 58051, labourForce: 845870, population: 1662180 },
          { name: "Seville", gdp: 44797, labourForce: 691179, population: 1456716 },
          { name: "Saragossa", gdp: 29953, labourForce: 378045, population: 723827 },
        ]
      },
      {
        name: "Japan",
        cities: [
          { name: "Tokyo", gdp: 1724233, labourForce: 17350560, population: 34501811 },
          { name: "Osaka", gdp: 662371, labourForce: 7932300, population: 17257360 },
          { name: "Nagoya", gdp: 414748, labourForce: 4310190, population: 8604216 },
          { name: "Fukuoka", gdp: 92154, labourForce: 1257720, population: 2678026 },
          { name: "Sapporo", gdp: 73693, labourForce: 1056720, population: 2266272 },
        ]
      },
      {
        name: "Poland",
        cities: [
          { name: "Warsaw", gdp: 129740, labourForce: 5414, population: 2953707 },
          { name: "Lodz", gdp: 22404, labourForce: 498088, population: 978156 },
          { name: "Cracow", gdp: 33590, labourForce: 564550, population: 1349550 },
          { name: "Wroclaw", gdp: 23021, labourForce: 370770, population: 851220 },
          { name: "Poznan", gdp: 32459, labourForce: 396368, population: 948477 },
        ]
      },
      {
        name: "Turkey",
        cities: [
          { name: "Ankara", gdp: 114552, labourForce: 1299936, population: 3853916 },
          { name: "Adana", gdp: 13412, labourForce: 277704, population: 961529 },
          { name: "Antalya", gdp: 24279, labourForce: 389395, population: 956134 },
          { name: "Balikesir", gdp: 5818, labourForce: 128079, population: 335718 },
          { name: "Bursa", gdp: 38323, labourForce: 589367, population: 1574592 },
        ]
      },
    ]
  },
  {
    year: "2008",
    countries: [
      {
        name: "Australia",
        cities: [
          { name: "Sydney", gdp: 188029, labourForce: 2300700, population: 4409562 },
          { name: "Melbourne", gdp: 164018, labourForce: 2075710, population: 3931438 },
          { name: "Brisbane", gdp: 87938, labourForce: 1089600, population: 2012204 },
          { name: "Perth", gdp: 101548, labourForce: 922842, population: 1682860 },
          { name: "Adelaide", gdp: 46178, labourForce: 621117, population: 1219523 },
        ]
      },
      {
        name: "Spain",
        cities: [
          { name: "Sydney", gdp: 310562, labourForce: 3486154, population: 6440851 },
          { name: "Barcelona", gdp: 206729, labourForce: 2557575, population: 4813215 },
          { name: "Valencia", gdp: 58863, labourForce: 863997, population: 1697110 },
          { name: "Seville", gdp: 44683, labourForce: 713621, population: 1478630 },
          { name: "Saragossa", gdp: 30124, labourForce: 383219, population: 741477 },
        ]
      },
      {
        name: "Japan",
        cities: [
          { name: "Tokyo", gdp: 1704622, labourForce: 17330380, population: 34660681 },
          { name: "Osaka", gdp: 644862, labourForce: 7891200, population: 17238638 },
          { name: "Nagoya", gdp: 376782, labourForce: 4287110, population: 8639935 },
          { name: "Fukuoka", gdp: 89377, labourForce: 1248320, population: 2676508 },
          { name: "Sapporo", gdp: 71730, labourForce: 1044480, population: 2252032 },
        ]
      },
      {
        name: "Poland",
        cities: [
          { name: "Warsaw", gdp: 133349, labourForce: 5646, population: 2972647 },
          { name: "Lodz", gdp: 23640, labourForce: 519432, population: 971493 },
          { name: "Cracow", gdp: 35078, labourForce: 571152, population: 1353530 },
          { name: "Wroclaw", gdp: 24801, labourForce: 359159, population: 851008 },
          { name: "Poznan", gdp: 33849, labourForce: 383768, population: 950579 },
        ]
      },
      {
        name: "Turkey",
        cities: [
          { name: "Ankara", gdp: 116641, labourForce: 1324840, population: 3930749 },
          { name: "Adana", gdp: 13386, labourForce: 276933, population: 971219 },
          { name: "Antalya", gdp: 23988, labourForce: 405432, population: 985904 },
          { name: "Balikesir", gdp: 5974, labourForce: 121638, population: 337730 },
          { name: "Bursa", gdp: 38353, labourForce: 610454, population: 1603001 },
        ]
      },
    ]
  },
  {
    year: "2009",
    countries: [
      {
        name: "Australia",
        cities: [
          { name: "Sydney", gdp: 194045, labourForce: 2343410, population: 4492380 },
          { name: "Melbourne", gdp: 169893, labourForce: 2127070, population: 4031787 },
          { name: "Brisbane", gdp: 85460, labourForce: 1118700, population: 2068479 },
          { name: "Perth", gdp: 105327, labourForce: 941788, population: 1739342 },
          { name: "Adelaide", gdp: 47843, labourForce: 630982, population: 1237354 },
        ]
      },
      {
        name: "Spain",
        cities: [
          { name: "Madrid", gdp: 305459, labourForce: 3534140, population: 6569461 },
          { name: "Barcelona", gdp: 198278, labourForce: 2550143, population: 4875428 },
          { name: "Valencia", gdp: 55491, labourForce: 857556, population: 1722393 },
          { name: "Seville", gdp: 43262, labourForce: 722423, population: 1500880 },
          { name: "Saragossa", gdp: 28912, labourForce: 381808, population: 754093 },
        ]
      },
      {
        name: "Japan",
        cities: [
          { name: "Tokyo", gdp: 1616168, labourForce: 17238610, population: 34747105 },
          { name: "Osaka", gdp: 615508, labourForce: 7817220, population: 17220243 },
          { name: "Nagoya", gdp: 361470, labourForce: 4252490, population: 8646512 },
          { name: "Fukuoka", gdp: 89659, labourForce: 1242680, population: 2675319 },
          { name: "Sapporo", gdp: 71207, labourForce: 1036320, population: 2240639 },
        ]
      },
      {
        name: "Poland",
        cities: [
          { name: "Warsaw", gdp: 139875, labourForce: 5474, population: 2988629 },
          { name: "Lodz", gdp: 24127, labourForce: 503608, population: 966039 },
          { name: "Cracow", gdp: 35613, labourForce: 571120, population: 1355736 },
          { name: "Wroclaw", gdp: 26095, labourForce: 360932, population: 851724 },
          { name: "Poznan", gdp: 35215, labourForce: 388640, population: 952794 },
        ]
      },
      {
        name: "Turkey",
        cities: [
          { name: "Ankara", gdp: 112400, labourForce: 1339360, population: 4003067 },
          { name: "Adana", gdp: 13034, labourForce: 310480, population: 980739 },
          { name: "Antalya", gdp: 23565, labourForce: 405594, population: 1024463 },
          { name: "Balikesir", gdp: 5793, labourForce: 124912, population: 341345 },
          { name: "Bursa", gdp: 35249, labourForce: 607338, population: 1647730 },
        ]
      },
    ]
  },
  {
    year: "2010",
    countries: [
      {
        name: "Australia",
        cities: [
          { name: "Sydney", gdp: 195343, labourForce: 2347250, population: 4555516 },
          { name: "Melbourne", gdp: 171330, labourForce: 2182510, population: 4105857 },
          { name: "Brisbane", gdp: 85710, labourForce: 1139920, population: 2108348 },
          { name: "Perth", gdp: 119008, labourForce: 964030, population: 1781132 },
          { name: "Adelaide", gdp: 48454, labourForce: 647418, population: 1253097 },
        ]
      },
      {
        name: "Spain",
        cities: [
          { name: "Madrid", gdp: 302909, labourForce: 3562124, population: 6649559 },
          { name: "Barcelona", gdp: 198999, labourForce: 2562107, population: 4896269 },
          { name: "Valencia", gdp: 55541, labourForce: 855630, population: 1728334 },
          { name: "Seville", gdp: 42970, labourForce: 725595, population: 1516323 },
          { name: "Saragossa", gdp: 29035, labourForce: 377731, population: 757829 },
        ]
      },
      {
        name: "Japan",
        cities: [
          { name: "Tokyo", gdp: 1663993, labourForce: 17186560, population: 35274760 },
          { name: "Osaka", gdp: 638506, labourForce: 7710360, population: 17304230 },
          { name: "Nagoya", gdp: 364722, labourForce: 4223640, population: 8629765 },
          { name: "Fukuoka", gdp: 93252, labourForce: 1250200, population: 2684483 },
          { name: "Sapporo", gdp: 72188, labourForce: 1036320, population: 2240232 },
        ]
      },
      {
        name: "Poland",
        cities: [
          { name: "Warsaw", gdp: 147662, labourForce: 1423899, population: 2985889 },
          { name: "Lodz", gdp: 25179, labourForce: 488594, population: 953202 },
          { name: "Cracow", gdp: 36749, labourForce: 559885, population: 1354477 },
          { name: "Wroclaw", gdp: 27173, labourForce: 361733, population: 846011 },
          { name: "Poznan", gdp: 35644, labourForce: 408044, population: 957628 },
        ]
      },
      {
        name: "Turkey",
        cities: [
          { name: "Ankara", gdp: 119226, labourForce: 1406064, population: 4092704 },
          { name: "Adana", gdp: 14316, labourForce: 325446, population: 998119 },
          { name: "Antalya", gdp: 26581, labourForce: 428858, population: 1057771 },
          { name: "Balikesir", gdp: 6263, labourForce: 125254, population: 344307 },
          { name: "Bursa", gdp: 37926, labourForce: 601542, population: 1675777 },
        ]
      },
    ]
  },
  {
    year: "2011",
    countries: [
      {
        name: "Australia",
        cities: [
          { name: "Sydney", gdp: 201698, labourForce: 2388600, population: 4608949 },
          { name: "Melbourne", gdp: 175607, labourForce: 2214710, population: 4169366 },
          { name: "Brisbane", gdp: 90371, labourForce: 1149660, population: 2147436 },
          { name: "Perth", gdp: 127308, labourForce: 991795, population: 1833567 },
          { name: "Adelaide", gdp: 48685, labourForce: 650355, population: 1264091 },
        ]
      },
      {
        name: "Spain",
        cities: [
          { name: "Madrid", gdp: 304904, labourForce: 3529500, population: 6687576 },
          { name: "Barcelona", gdp: 196333, labourForce: 2572200, population: 4912198 },
          { name: "Valencia", gdp: 54955, labourForce: 857755, population: 1726086 },
          { name: "Seville", gdp: 42839, labourForce: 737094, population: 1527575 },
          { name: "Saragossa", gdp: 28622, labourForce: 376320, population: 759652 },
        ]
      },
      {
        name: "Japan",
        cities: [
          { name: "Tokyo", gdp: 1723262, labourForce: 17087580, population: 35328443 },
          { name: "Osaka", gdp: 652935, labourForce: 7644600, population: 17287319 },
          { name: "Nagoya", gdp: 380949, labourForce: 4200560, population: 8625333 },
          { name: "Fukuoka", gdp: 94161, labourForce: 1246440, population: 2687469 },
          { name: "Sapporo", gdp: 73171, labourForce: 1024080, population: 2232095 },
        ]
      },
      {
        name: "Poland",
        cities: [
          { name: "Warsaw", gdp: 153488, labourForce: 1513438, population: 3015136 },
          { name: "Lodz", gdp: 25654, labourForce: 492531, population: 948711 },
          { name: "Cracow", gdp: 38929, labourForce: 574541, population: 1361102 },
          { name: "Wroclaw", gdp: 28469, labourForce: 347204, population: 849117 },
          { name: "Poznan", gdp: 37043, labourForce: 412860, population: 961545 },
        ]
      },
      {
        name: "Turkey",
        cities: [
          { name: "Ankara", gdp: 131546, labourForce: 1465992, population: 4199114 },
          { name: "Adana", gdp: 15609, labourForce: 323542, population: 1009251 },
          { name: "Antalya", gdp: 29616, labourForce: 446153, population: 1090060 },
          { name: "Balikesir", gdp: 6644, labourForce: 124184, population: 348001 },
          { name: "Bursa", gdp: 43459, labourForce: 637775, population: 1711814 },
        ]
      },
    ]
  },
  {
    year: "2012",
    countries: [
      {
        name: "Australia",
        cities: [
          { name: "Sydney", gdp: 208919, labourForce: 2413280, population: 4677196 },
          { name: "Melbourne", gdp: 179819, labourForce: 2244850, population: 4265843 },
          { name: "Brisbane", gdp: 91724, labourForce: 1162180, population: 2196288 },
          { name: "Perth", gdp: 129731, labourForce: 1037090, population: 1892862 },
          { name: "Adelaide", gdp: 49736, labourForce: 648616, population: 1277850 },
        ]
      },
      {
        name: "Spain",
        cities: [
          { name: "Madrid", gdp: 299863, labourForce: 3522795, population: 6702403 },
          { name: "Barcelona", gdp: 190943, labourForce: 2533062, population: 4933262 },
          { name: "Valencia", gdp: 52716, labourForce: 848459, population: 1731040 },
          { name: "Seville", gdp: 41947, labourForce: 743517, population: 1536722 },
          { name: "Saragossa", gdp: 27432, labourForce: 383768, population: 766171 },
        ]
      },
      {
        name: "Japan",
        cities: [
          { name: "Tokyo", gdp: 1718407, labourForce: 17354740, population: 35355415 },
          { name: "Osaka", gdp: 652534, labourForce: 7718580, population: 17261483 },
          { name: "Nagoya", gdp: 398911, labourForce: 4137090, population: 8626441 },
          { name: "Fukuoka", gdp: 93307, labourForce: 1235160, population: 2689783 },
          { name: "Sapporo", gdp: 73125, labourForce: 1007760, population: 2221516 },
        ]
      },
      {
        name: "Poland",
        cities: [
          { name: "Warsaw", gdp: 157360, labourForce: 1563549, population: 3035975 },
          { name: "Lodz", gdp: 25909, labourForce: 487600, population: 943419 },
          { name: "Cracow", gdp: 39466, labourForce: 586179, population: 1366987 },
          { name: "Wroclaw", gdp: 29432, labourForce: 345888, population: 851233 },
          { name: "Poznan", gdp: 37909, labourForce: 415408, population: 964839 },
        ]
      },
      {
        name: "Turkey",
        cities: [
          { name: "Ankara", gdp: 136520, labourForce: 1518352, population: 4303983 },
          { name: "Adana", gdp: 16483, labourForce: 314144, population: 1020664 },
          { name: "Antalya", gdp: 30481, labourForce: 460891, population: 1125957 },
          { name: "Balikesir", gdp: 6870, labourForce: 127565, population: 348602 },
          { name: "Bursa", gdp: 44625, labourForce: 668700, population: 1742449 },
        ]
      },
    ]
  },
  {
    year: "2013",
    countries: [
      {
        name: "Australia",
        cities: [
          { name: "Sydney", gdp: 212508, labourForce: 2457780, population: 4757364 },
          { name: "Melbourne", gdp: 183192, labourForce: 2287080, population: 4370067 },
          { name: "Brisbane", gdp: 92920, labourForce: 1171830, population: 2241944 },
          { name: "Perth", gdp: 139648, labourForce: 1047100, population: 1943855 },
          { name: "Adelaide", gdp: 50106, labourForce: 652932, population: 1289696 },
        ]
      },
      {
        name: "Spain",
        cities: [
          { name: "Madrid", gdp: 294929, labourForce: 3460718, population: 6701979 },
          { name: "Barcelona", gdp: 188935, labourForce: 2493027, population: 4922465 },
          { name: "Valencia", gdp: 51961, labourForce: 837437, population: 1726103 },
          { name: "Seville", gdp: 40533, labourForce: 738362, population: 1540296 },
          { name: "Saragossa", gdp: 27266, labourForce: 379221, population: 769657 },
        ]
      },
      {
        name: "Japan",
        cities: [
          { name: "Tokyo", gdp: 1753718, labourForce: 17382770, population: 35441104 },
          { name: "Osaka", gdp: 659986, labourForce: 7718580, population: 17230085 },
          { name: "Nagoya", gdp: 410294, labourForce: 4119780, population: 8632099 },
          { name: "Fukuoka", gdp: 94854, labourForce: 1225760, population: 2691769 },
          { name: "Sapporo", gdp: 74690, labourForce: 991440, population: 2209717 },
        ]
      },
      {
        name: "Poland",
        cities: [
          { name: "Warsaw", gdp: 161573, labourForce: 1479412, population: 3056113 },
          { name: "Lodz", gdp: 26265, labourForce: 510122, population: 937808 },
          { name: "Cracow", gdp: 40917, labourForce: 597380, population: 1370850 },
          { name: "Wroclaw", gdp: 30680, labourForce: 335106, population: 853452 },
          { name: "Poznan", gdp: 39187, labourForce: 414568, population: 967675 },
        ]
      },
      {
        name: "Turkey",
        cities: [
          { name: "Ankara", gdp: 153350, labourForce: 1596232, population: 4369675 },
          { name: "Adana", gdp: 17798, labourForce: 321590, population: 1028810 },
          { name: "Antalya", gdp: 32836, labourForce: 477172, population: 1152990 },
          { name: "Balikesir", gdp: 6827, labourForce: 129235, population: 350540 },
          { name: "Bursa", gdp: 44625, labourForce: 702741, population: 48295 },
        ]
      },
    ]
  },
  {
    year: "2014",
    countries: [
      {
        name: "Australia",
        cities: [
          { name: "Sydney", gdp: 222383, labourForce: 2491750, population: 4841349 },
          { name: "Melbourne", gdp: 191865, labourForce: 2325040, population: 4476030 },
          { name: "Brisbane", gdp: 95225, labourForce: 1190810, population: 2281740 },
          { name: "Perth", gdp: 130807, labourForce: 1051610, population: 1973923 },
          { name: "Adelaide", gdp: 51291, labourForce: 646876, population: 1302079 },
        ]
      },
      {
        name: "Spain",
        cities: [
          { name: "Madrid", gdp: 298920, labourForce: 3413234, population: 6661415 },
          { name: "Barcelona", gdp: 192922, labourForce: 2457928, population: 4907411 },
          { name: "Valencia", gdp: 53125, labourForce: 824489, population: 1717694 },
          { name: "Seville", gdp: 41403, labourForce: 737966, population: 1540802 },
          { name: "Saragossa", gdp: 27645, labourForce: 374752, population: 754347 },
        ]
      },
      {
        name: "Japan",
        cities: [
          { name: "Tokyo", gdp: 1730445, labourForce: 17438190, population: 35565308 },
          { name: "Osaka", gdp: 662331, labourForce: 7628160, population: 17190150 },
          { name: "Nagoya", gdp: 410516, labourForce: 4096700, population: 8633991 },
          { name: "Fukuoka", gdp: 94454, labourForce: 1218240, population: 2691347 },
          { name: "Sapporo", gdp: 74810, labourForce: 975120, population: 2197028 },
        ]
      },
      {
        name: "Poland",
        cities: [
          { name: "Warsaw", gdp: 167694, labourForce: 1580280, population: 3069387 },
          { name: "Lodz", gdp: 27256, labourForce: 507398, population: 931444 },
          { name: "Cracow", gdp: 42737, labourForce: 587686, population: 1375294 },
          { name: "Wroclaw", gdp: 32249, labourForce: 338967, population: 855968 },
          { name: "Poznan", gdp: 40415, labourForce: 399028, population: 970130 },
        ]
      },
      {
        name: "Turkey",
        cities: [
          { name: "Ankara", gdp: 156201, labourForce: 1753136, population: 4439670 },
          { name: "Adana", gdp: 18265, labourForce: 329206, population: 1040242 },
          { name: "Antalya", gdp: 35057, labourForce: 483546, population: 1189207 },
          { name: "Balikesir", gdp: 7323, labourForce: 132017, population: 351154 },
          { name: "Bursa", gdp: 50940, labourForce: 681849, population: 1800817 },
        ]
      },
    ]
  },
  {
    year: "2015",
    countries: [
      {
        name: "Australia",
        cities: [
          { name: "Sydney", gdp: 233437, labourForce: 2558510, population: 4930189 },
          { name: "Melbourne", gdp: 200524, labourForce: 2393910, population: 4586012 },
          { name: "Brisbane", gdp: 98065, labourForce: 1210840, population: 2318653 },
          { name: "Perth", gdp: 124971, labourForce: 1065810, population: 1998937 },
          { name: "Adelaide", gdp: 51843, labourForce: 654252, population: 1313419 },
        ]
      },
      {
        name: "Spain",
        cities: [
          { name: "Madrid", gdp: 311423, labourForce: 3455420, population: 6643994 },
          { name: "Barcelona", gdp: 200640, labourForce: 2437877, population: 4908585 },
          { name: "Valencia", gdp: 54580, labourForce: 824422, population: 1717473 },
          { name: "Seville", gdp: 42442, labourForce: 747878, population: 1542162 },
          { name: "Saragossa", gdp: 28252, labourForce: 368245, population: 753884 },
        ]
      },
      {
        name: "Japan",
        cities: [
          { name: "Tokyo", gdp: 1746808, labourForce: 17463020, population: 35707770 },
          { name: "Osaka", gdp: 665154, labourForce: 7554180, population: 17162968 },
          { name: "Nagoya", gdp: 413553, labourForce: 4062080, population: 8639205 },
          { name: "Fukuoka", gdp: 95805, labourForce: 1212600, population: 2708075 },
          { name: "Sapporo", gdp: 75427, labourForce: 962880, population: 2200555 },
        ]
      },
      {
        name: "Poland",
        cities: [
          { name: "Warsaw", gdp: 173960, labourForce: 1637892, population: 3091550 },
          { name: "Lodz", gdp: 28341, labourForce: 484877, population: 926120 },
          { name: "Cracow", gdp: 45494, labourForce: 553978, population: 1381755 },
          { name: "Wroclaw", gdp: 34062, labourForce: 343200, population: 860272 },
          { name: "Poznan", gdp: 42198, labourForce: 382732, population: 973430 },
        ]
      },
      {
        name: "Turkey",
        cities: [
          { name: "Ankara", gdp: 164114, labourForce: 1791328, population: 4532062 },
          { name: "Adana", gdp: 19444, labourForce: 341376, population: 1048150 },
          { name: "Antalya", gdp: 36471, labourForce: 484074, population: 1224631 },
          { name: "Balikesir", gdp: 7679, labourForce: 131482, population: 359096 },
          { name: "Bursa", gdp: 54084, labourForce: 705566, population: 1831414 },
        ]
      },
    ]
  },
  {
    year: "2016",
    countries: [
      {
        name: "Australia",
        cities: [
          { name: "Sydney", gdp: 239093, labourForce: 2611060, population: 5024923 },
          { name: "Melbourne", gdp: 204578, labourForce: 2479030, population: 4714387 },
          { name: "Brisbane", gdp: 102888, labourForce: 1230930, population: 2362672 },
          { name: "Perth", gdp: 126068, labourForce: 1065880, population: 2019263 },
          { name: "Adelaide", gdp: 51616, labourForce: 657538, population: 1324057 },
        ]
      },
      {
        name: "Spain",
        cities: [
          { name: "Madrid", gdp: 321656, labourForce: 3434352, population: 6675302 },
          { name: "Barcelona", gdp: 208069, labourForce: 2461426, population: 4926338 },
          { name: "Valencia", gdp: 54890, labourForce: 826481, population: 1723352 },
          { name: "Seville", gdp: 43569, labourForce: 728529, population: 1542237 },
          { name: "Saragossa", gdp: 29416, labourForce: 371067, population: 751248 },
        ]
      },
      {
        name: "Japan",
        cities: [
          { name: "Tokyo", gdp: 1752653, labourForce: 17616780, population: 35884502 },
          { name: "Osaka", gdp: 664013, labourForce: 7611720, population: 17143814 },
          { name: "Nagoya", gdp: 411058, labourForce: 4079390, population: 8652554 },
          { name: "Fukuoka", gdp: 96528, labourForce: 1206960, population: 2726887 },
          { name: "Sapporo", gdp: 75135, labourForce: 962880, population: 2204708 },
        ]
      },
      {
        name: "Poland",
        cities: [
          { name: "Warsaw", gdp: 180338, labourForce: 1446514, population: 3110666 },
          { name: "Lodz", gdp: 28629, labourForce: 421102, population: 921052 },
          { name: "Cracow", gdp: 47939, labourForce: 602277, population: 1385638 },
          { name: "Wroclaw", gdp: 35595, labourForce: 367253, population: 863696 },
          { name: "Poznan", gdp: 44090, labourForce: 449932, population: 975878 },
        ]
      },
      {
        name: "Turkey",
        cities: [
          { name: "Ankara", gdp: 175217, labourForce: 1874224, population: 4638110 },
          { name: "Adana", gdp: 20334, labourForce: 344750, population: 1056654 },
          { name: "Antalya", gdp: 32974, labourForce: 507581, population: 1260941 },
          { name: "Balikesir", gdp: 8035, labourForce: 135227, population: 358380 },
          { name: "Bursa", gdp: 55658, labourForce: 723195, population: 1867555 },
        ]
      },
    ]
  },
  {
    year: "2017",
    countries: [
      {
        name: "Australia",
        cities: [
          { name: "Sydney", gdp: 244359, labourForce: 2667570, population: 5136919 },
          { name: "Melbourne", gdp: 212031, labourForce: 2566720, population: 4843928 },
          { name: "Brisbane", gdp: 107750, labourForce: 1263550, population: 2412517 },
          { name: "Perth", gdp: 127748, labourForce: 1069910, population: 2037902 },
          { name: "Adelaide", gdp: 52446, labourForce: 662917, population: 1334438 },
        ]
      },
      {
        name: "Spain",
        cities: [
          { name: "Madrid", gdp: 332864, labourForce: 3421373, population: 6717732 },
          { name: "Barcelona", gdp: 216070, labourForce: 2463868, population: 4957425 },
          { name: "Valencia", gdp: 55800, labourForce: 828871, population: 1723935 },
          { name: "Seville", gdp: 44923, labourForce: 727815, population: 1543858 },
          { name: "Saragossa", gdp: 30671, labourForce: 367226, population: 756296 },
        ]
      },
      {
        name: "Japan",
        cities: [
          { name: "Tokyo", gdp: 1783059, labourForce: 17859750, population: 36064684 },
          { name: "Osaka", gdp: 681236, labourForce: 7693920, population: 17125633 },
          { name: "Nagoya", gdp: 420635, labourForce: 4102470, population: 8669761 },
          { name: "Fukuoka", gdp: 98624, labourForce: 1206960, population: 2746439 },
          { name: "Sapporo", gdp: 76505, labourForce: 958800, population: 2209107 },
        ]
      },
      {
        name: "Poland",
        cities: [
          { name: "Warsaw", gdp: 191493, labourForce: 1445460, population: 3132386 },
          { name: "Lodz", gdp: 29954, labourForce: 423678, population: 917173 },
          { name: "Cracow", gdp: 51024, labourForce: 602898, population: 1393219 },
          { name: "Wroclaw", gdp: 37866, labourForce: 361218, population: 869076 },
          { name: "Poznan", gdp: 46305, labourForce: 454776, population: 979415 },
        ]
      },
      {
        name: "Turkey",
        cities: [
          { name: "Ankara", gdp: 180939, labourForce: 1919368, population: 4704938 },
          { name: "Adana", gdp: 21172, labourForce: 351860, population: 1065608 },
          { name: "Antalya", gdp: 36466, labourForce: 523699, population: 1283037 },
          { name: "Balikesir", gdp: 8450, labourForce: 139228, population: 361246 },
          { name: "Bursa", gdp: 60843, labourForce: 770970, population: 1906220 },
        ]
      },
    ]
  },
  {
    year: "2018",
    countries: [
      {
        name: "Australia",
        cities: [
          { name: "Sydney", gdp: 246471, labourForce: 2750080, population: 5225098 },
          { name: "Melbourne", gdp: 214660, labourForce: 2624800, population: 4964713 },
          { name: "Brisbane", gdp: 109119, labourForce: 1285360, population: 2461597 },
          { name: "Perth", gdp: 138569, labourForce: 1089170, population: 2058568 },
          { name: "Adelaide", gdp: 52562, labourForce: 674197, population: 1345860 },
        ]
      },
      {
        name: "Spain",
        cities: [
          { name: "Madrid", gdp: 341253, labourForce: 3468794, population: 6791667 },
          { name: "Barcelona", gdp: 221396, labourForce: 2466565, population: 4985549 },
          { name: "Valencia", gdp: 57699, labourForce: 825086, population: 1733606 },
          { name: "Seville", gdp: 45855, labourForce: 736776, population: 1545862 },
          { name: "Saragossa", gdp: 31386, labourForce: 368637, population: 759060 },
        ]
      },
      {
        name: "Japan",
        cities: [
          { name: "Tokyo", gdp: 1800719, labourForce: 18203620, population: 36231407 },
          { name: "Osaka", gdp: 683427, labourForce: 7751460, population: 17103838 },
          { name: "Nagoya", gdp: 428132, labourForce: 4142860, population: 8681708 },
          { name: "Fukuoka", gdp: 99925, labourForce: 1214480, population: 2766437 },
          { name: "Sapporo", gdp: 77230, labourForce: 966960, population: 2212685 },
        ]
      },
      {
        name: "Poland",
        cities: [
          { name: "Warsaw", gdp: 203835, labourForce: 1500838, population: 3154440 },
          { name: "Lodz", gdp: 32268, labourForce: 421986, population: 912121 },
          { name: "Cracow", gdp: 54682, labourForce: 597832, population: 1400321 },
          { name: "Wroclaw", gdp: 40579, labourForce: 357958, population: 873028 },
          { name: "Poznan", gdp: 48033, labourForce: 451276, population: 983752 },
        ]
      },
      {
        name: "Turkey",
        cities: [
          { name: "Ankara", gdp: 180502, labourForce: 1924384, population: 4791626 },
          { name: "Adana", gdp: 20932, labourForce: 350727, population: 1072776 },
          { name: "Antalya", gdp: 41839, labourForce: 531129, population: 1302784 },
          { name: "Balikesir", gdp: 8735, labourForce: 139293, population: 363856 },
          { name: "Bursa", gdp: 64808, labourForce: 792203, population: 1929478 },
        ]
      },
    ]
  },
]
